<?php include_once("layout.php") ?>
<?php 
    require('../model/db.php');
    require('../controller/vip_memberController.php');
    $KHs = get_KH();
    $ten_KH_search ="";
    $sdt_KH_search ="";
    ?>
<head>
  <link rel="stylesheet" href="../css/vipmember.css">
</head>
<body>
    <div class="container">
        <div class="contener_body">
            <div class="contener_above">

            </div>
            <div class="contener_middle">
                <div class="contener_middle_left">
                    <div class="contener_add_member">
                        <h2> Thêm Thành Viên Mới</h2>
                        <form action="" method="post" class="contener_add_list">
                            <div >
                                <label>Tên Khách Hàng</label>
                                <input type="text" name ="ten_KH" class="input_KH">
                            </div>
                            <div style="margin-top: 5%">
                                <label>Số Điện Thoại Khách Hàng</label>
                                <input type="text" name ="SDT" class="input_KH">
                            </div>
                            <button type= "submit" class="input_button">Submit</button>
                        </form>
                        <!-- <img src="../image/anh_vipmember .jpg" class="vip_image_member" /> -->
                        <div class="vipmember_image">
                            <img src="https://lh3.googleusercontent.com/pw/AM-JKLWDxaYBlmzAmzNwGEhlHO7T8uRTRV14JVkStno1CaCc7HwbtobywPQdZKO4Jn320-AjxElMyOx1SrU0N2WHyl6eu8MgKTHv1MB_QFtNNj7OZBWfLWzZM8rcMG7hM_P1wQL_gxBSggsSAiZ3VfdOVvIM=s360-no?authuser=0" 
                            alt="2H8l7.png" style="width: 98%; height: 56%">
                        </div>
                    </div>
                </div>
                <div class="contener_middle_right">
                    <div class="contener_middle_rtop">
                        <div class="contener_rtop_rlist">
                            <h2> Tìm Kiếm Thành Viên Vip</h2>
                            <form action="" method="post" class="contener_search">
                                <input type="text" name ="ten_KH_search" class="input_search" placeholder="Tên Khách Hàng">
                                <input type="text" name ="sdt_KH_search" class="input_search" placeholder="Số Điện Thoại">
                                <button type= "submit" name="btn"class="search_button">Search</button>
                            </form>
                        </div>
                        <div class="contener_rtop_image">
                            <img src="https://sikido.vn/uploads/source/tintuc/chu-p-a-nh2-1.jpg" style="width:300px; height:200px"/>
                        </div>
                    </div>
                    <div class="contener_middle_rbottom">
                        <?php
                            if(isset($_POST["btn"])){
                                $ten_KH_search = $_POST["ten_KH_search"];
                                $sdt_KH_search = $_POST["sdt_KH_search"];
                                $KH_searchs = get_KH_byName($ten_KH_search, $sdt_KH_search);
                            }
                        ?>
                        <?php
                            if(!empty($_POST["ma_KH_del"])){
                                $ma_KH_del = $_POST["ma_KH_del"];
                                delete_KH($ma_KH_del);
                                header("Location: .?ma_KH_del=$ma_KH_del");
                                header("Location: ./vipmember.php");
                            }
                        ?>
                        <?php 
                            if(!empty($_POST["ten_KH"])){
                                $ten_KH = $_POST["ten_KH"];
                                $SDT = $_POST["SDT"];
                                add_KH($ten_KH, $SDT );
                                header("Location: ./vipmember.php");
                            }
                        ?>
                         <div>
                            <table>
                                <thead>
                                    <tr>
                                        <th class="contener_th">Tên Khách Hàng</th>
                                        <th class="contener_th">Số Điện Thoại</th>
                                        <th class="contener_th">Tổng Tiền</th>
                                        <th class="contener_short">Hạng</th>
                                        <th class="contener_short">Xóa</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <?php if(!empty($ten_KH_search) || !empty($sdt_KH_search)) { ?>
                                            <?php if(!empty($KH_searchs)) { ?>
                                            <?php foreach ($KH_searchs as $KH) : ?>
                                                <?php $rank=get_Rank($KH['TONG_TIEN']) ?>
                                            <?php if($KH['DEL'] == 0) { ?>
                                                <div class="list__item">
                                                    <td class="contener_th"><?php echo $KH['TEN_KHACH_HANG'] ?></td>
                                                    <td class="contener_th"><?php echo $KH['SO_DIEN_THOAI'] ?></td>
                                                    <td class="contener_th"><?php echo $KH['TONG_TIEN'] ?></td>
                                                    <td class="contener_short"><?php echo $rank ?></td>
                                                </div>
                                                <div class="list__removeItem">
                                                    <form action="" method="post">
                                                        <input type="hidden" name="action" value="delete_KH">
                                                        <input type="hidden" name="ma_KH_del" value="<?= $KH['MA_KHACH_HANG']; ?>">
                                                        <td class="contener_short"><button>❌</button></td>
                                                    </form>
                                                </div>
                                    </tr>  
                                            <?php } endforeach; ?>
                                            <?php } else { ?>
                                                <td>KHÔNG TÌM THẤY KHÁCH HÀNG NÀO</td>
                                            <?php } ?>
                                            <?php } else { ?>
                                            <?php if(!empty($KHs)) { ?>
                                            <?php foreach ($KHs as $KH) : ?>
                                            <?php $rank=get_Rank($KH['TONG_TIEN']) ?>
                                            <?php if($KH['DEL'] == 0) { ?>
                                                <div class="list__item">
                                                    <td class="contener_th"><?php echo $KH['TEN_KHACH_HANG'] ?></td>
                                                    <td class="contener_th"><?php echo $KH['SO_DIEN_THOAI'] ?></td>
                                                    <td class="contener_th"><?php echo $KH['TONG_TIEN'] ?></td>
                                                    <td class="contener_short"><?php echo $rank ?></td>
                                                </div>
                                                <div class="list__removeItem">
                                                    <form action="" method="post">
                                                        <input type="hidden" name="action" value="delete_KH">
                                                        <input type="hidden" name="ma_KH_del" value="<?= $KH['MA_KHACH_HANG']; ?>">
                                                        <td class="contener_short"><button>❌</button></td>
                                                    </form>
                                                </div>
                                        </tr>  
                                            <?php } endforeach; ?>
                                            <?php $dem =0 ?>
                                            <?php foreach ($KHs as $KH) : ?>
                                            <?php if($KH['DEL'] == 0) { $dem=1; break ?>
                                            <?php } endforeach; ?>
                                            <?php if($dem==0){ ?>
                                                <td>KHÔNG CÓ KHÁCH HÀNG NÀO</td>
                                            <?php } ?>
                                            <?php } else { ?>
                                                <p>CHƯA CÓ KHÁCH HÀNG NÀO</p>
                                            <?php } ?>
                                        <?php } ?>                                                  
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <div class="contener_bottom">

            </div>
        </div>
    </div>
</body>
</html>