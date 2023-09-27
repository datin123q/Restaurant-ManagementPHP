<?php include_once("layout.php") ?>
<!DOCTYPE HTML>
<html>
	<head>
		<meta charset="utf-8" />
		<title>How to Create Dynamic Chart in PHP using Chart.js</title>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
		<script	src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.8.0/Chart.bundle.min.js"></script>
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" >
	</head>
	<body>
    <div class="container-fluid">
			<div class="row">
				
				<div class="col-md-4">
					<div class="card mt-4 mb-4">
						<div class="card-header">Bar Chart</div>
						<div class="card-body">
							<div class="chart-container pie-chart">
								<canvas id="bar_chart"></canvas>
							</div>
						</div>
					</div>
				</div>
			</div>
	    </div>
    <div class="container-fluid">
		<div class="row">
			<div class="col-md-4">
					<div class="card mt-4 mb-4">
						<div class="card-header">Bar Chart</div>
						<div class="card-body">
							<div class="chart-container pie-chart">
								<canvas id="bar_chart2"></canvas>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

        <div class="container-fluid">
		<div class="row">
			<div class="col-md-4">
					<div class="card mt-4 mb-4">
						<div class="card-header">Bar Chart</div>
						<div class="card-body">
							<div class="chart-container pie-chart">
								<canvas id="bar_chart3"></canvas>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</body>
</html>

<script>
	
$(document).ready(function(){

	makechart();
    makechart2();
    makechart3();
    function makechart2(){
        $.ajax({
			url:"../model/data.php",
			method:"POST",
			data:{action:'fetch2'},
			dataType:"JSON",
			success:function(data2)
			{
				var language = [];
				var total = [];
				var color = [];

				for(var count = 0; count < data2.length; count++)
				{
					language.push(data2[count].language);
					total.push(data2[count].total);
					color.push(data2[count].color);
				}

				var chart_data = {
					labels:language,
					datasets:[
						{
							label:'Vote',
							backgroundColor:color,
							color:'#fff',
							data:total
						}
					]
				};

				var options = {
					responsive:true,
					scales:{
						yAxes:[{
							ticks:{
								min:0
							}
						}]
					}
				};

				var group_chart3 = $('#bar_chart2');

				var graph3 = new Chart(group_chart3, {
					type:'bar',
					data:chart_data,
					options:options
				});
			}
		})
    }

    function makechart3(){
        $.ajax({
			url:"../model/data.php",
			method:"POST",
			data:{action:'fetch3'},
			dataType:"JSON",
			success:function(data3)
			{
				var language = [];
				var total = [];
				var color = [];

				for(var count = 0; count < data3.length; count++)
				{
					language.push(data3[count].language);
					total.push(data3[count].total);
					color.push(data3[count].color);
				}

				var chart_data = {
					labels:language,
					datasets:[
						{
							label:'Vote',
							backgroundColor:color,
							color:'#fff',
							data:total
						}
					]
				};

				var options = {
					responsive:true,
					scales:{
						yAxes:[{
							ticks:{
								min:0
							}
						}]
					}
				};

				var group_chart3 = $('#bar_chart3');

				var graph3 = new Chart(group_chart3, {
					type:'bar',
					data:chart_data,
					options:options
				});
			}
		})
    }

	function makechart()
	{
		$.ajax({
			url:"../model/data.php",
			method:"POST",
			data:{action:'fetch'},
			dataType:"JSON",
			success:function(data)
			{
				var language = [];
				var total = [];
				var color = [];

				for(var count = 0; count < data.length; count++)
				{
					language.push(data[count].language);
					total.push(data[count].total);
					color.push(data[count].color);
				}

				var chart_data = {
					labels:language,
					datasets:[
						{
							label:'Vote',
							backgroundColor:color,
							color:'#fff',
							data:total
						}
					]
				};

				var options = {
					responsive:true,
					scales:{
						yAxes:[{
							ticks:{
								min:0
							}
						}]
					}
				};

				var group_chart3 = $('#bar_chart');

				var graph3 = new Chart(group_chart3, {
					type:'bar',
					data:chart_data,
					options:options
				});
			}
		})

        
	}

});

</script>