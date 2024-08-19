<?php


	include 'database.php';

	$name=$_POST['name'];
	$email=$_POST['email'];
	$phone=$_POST['phone'];
    $zip=$_POST['zip'];
    $em1=$_POST['em1'];
    $em2=$_POST['em2'];
    $em3=$_POST['em3'];
    $em4=$_POST['em4'];
    $em5=$_POST['em5'];
    $em6=$_POST['em6'];
    $em7=$_POST['em7'];
    $em8=$_POST['em8'];
    $em9=$_POST['em9'];
    $em10=$_POST['em10'];
    $em11=$_POST['em11'];
    $em12=$_POST['em12'];
    $em13=$_POST['em13'];
    $em14=$_POST['em14'];
    $em15=$_POST['em15'];
	$message=$_POST['message'];
	$date = date("l jS \of F Y h:i:s A");
	$sql = "INSERT INTO `form_2`( `name`, `email`, `phone`, `zip`,  `em1`, `em2`, `em3`, `em4`, `em5`, `em6`, `em7`, `em8`, `em9`, `em10`, `em11`, `em12`, `em13`, `em14`, `em15`, `message`,`wholeDate`) 
	VALUES ('$name','$email','$phone','$zip','$em1','$em2','$em3','$em4','$em5','$em6','$em7','$em8','$em9','$em10','$em11','$em12','$em13','$em14','$em15','$message','$date')";

	mysqli_query($conn, $sql);

	$html="<table><tr><td>Name</td><td>$name</td></tr><tr><td>Email</td><td>$email</td></tr><tr><td>Phone</td><td>$phone</td></tr><tr><td>ZipCode</td><td>$zip</td></tr><tr><td>:</td><td>$em1</td></tr><tr><td>:</td><td>$em2</td></tr><tr><td>:</td><td>$em3</td></tr><tr><td>:</td><td>$em4</td></tr><tr><td>:</td><td>$em4</td></tr><tr><td>:</td><td>$em5</td></tr><tr><td>:</td><td>$em6</td></tr><tr><td>:</td><td>$em7</td></tr><tr><td>:</td><td>$em8</td></tr><tr><td>:</td><td>$em9</td></tr><tr><td>:</td><td>$em10</td></tr><tr><td>:</td><td>$em11</td></tr><tr><td>:</td><td>$em12</td></tr><tr><td>:</td><td>$em13</td></tr><tr><td>:</td><td>$em14</td></tr><tr><td>:</td><td>$em15</td></tr><tr><td>Message</td><td>$message</td></tr></table>";
	
	include('smtp/PHPMailerAutoload.php');
	$mail=new PHPMailer(true);
	$mail->isSMTP();
	$mail->Host="smtp.gmail.com";
	$mail->Port=587;
	$mail->SMTPSecure="tls";
	$mail->SMTPAuth=true;
	$mail->Username="signups@bookwritingcube.com";
	$mail->Password="LYU2M95NQ4Um6gW@";
	$mail->SetFrom("signups@bookwritingcube.com");
	$mail->addAddress("signups@bookwritingcube.com");
	$mail->IsHTML(true);
	$mail->Subject="Lead Form - BWC - Book Writing";
	$mail->Body=$html;
	$mail->SMTPOptions=array('ssl'=>array(
		'verify_peer'=>true,
		'verify_peer_name'=>true,
		'allow_self_signed'=>true
	));
	if($mail->send()){
		//echo "Mail send";
	}else{
		//echo "Error occur";
	}

mysqli_close($conn);

?>
	
	

	
