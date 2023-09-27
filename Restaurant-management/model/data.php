<?php

require('../model/db.php');

if(isset($_POST["action"]))
{
	if($_POST["action"] == 'fetch')
	{
		$query = "
            SELECT NGAY_LAP, SUM(DON_GIA) AS Total
            FROM hoa_don
            WHERE month(NGAY_LAP) = month(CURDATE())
            GROUP BY NGAY_LAP;
		";

		$result = $connect->query($query);
        
		$data = array();

		foreach($result as $row)
		{
			$data[] = array(
				'language'		=>	$row["NGAY_LAP"],
				'total'			=>	$row["Total"],
				'color'			=>	'#' . rand(100000, 999999) . ''
			);
		}

		echo json_encode($data);

	}

    if($_POST["action"] == 'fetch2')
	{
        $query2 = "
            SELECT month(NGAY_LAP) as month, SUM(DON_GIA) AS Total
            FROM hoa_don
            WHERE year(NGAY_LAP) = year(CURDATE())
            GROUP BY month(NGAY_LAP);
		";

        $result2 = $connect->query($query2);
        $data2 = array();

		foreach($result2 as $row)
		{
			$data2[] = array(
				'language'		=>	$row["month"],
				'total'			=>	$row["Total"],
				'color'			=>	'#' . rand(100000, 999999) . ''
			);
		}

		echo json_encode($data2);
    }

    if($_POST["action"] == 'fetch3')
	{
        $query3 = "
            SELECT year(NGAY_LAP) as year, SUM(DON_GIA) AS Total
            FROM hoa_don
            GROUP BY year(NGAY_LAP);
		";

        $result3 = $connect->query($query3);
        $data3 = array();

		foreach($result3 as $row)
		{
			$data3[] = array(
				'language'		=>	$row["year"],
				'total'			=>	$row["Total"],
				'color'			=>	'#' . rand(100000, 999999) . ''
			);
		}

		echo json_encode($data3);
    }
}
?>