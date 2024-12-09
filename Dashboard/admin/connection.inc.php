<?php
	session_start();

$servername = "localhost";
$username = "bwc_leadform_bwc";
$password = "leadform12345*";
$db="bwc_leadform_bwc";
$con = mysqli_connect($servername, $username, $password,$db);
	
	define('SERVER_PATH',$_SERVER['DOCUMENT_ROOT'].'/Dashboard/admin/');
	define('SITE_PATH','https://www.bookwritingcube.us/Dashboard/admin/');
// 	define('PRODUCT_IMAGE_SERVER_PATH',SERVER_PATH.'media/product/');
// 	define('PRODUCT_IMAGE_SITE_PATH',SITE_PATH.'media/product/');
?>