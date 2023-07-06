<?php


	include 'database.php';

	$fname=$_POST['fname'];
	$lname=$_POST['lname'];
	$email=$_POST['email'];
	$phone=$_POST['phone'];
    $started=$_POST['started'];
    $services=$_POST['services'];
    $bundled=$_POST['bundled'];
	$date = date("l jS \of F Y h:i:s A");
	$sql = "INSERT INTO `offline`( `fname`, `lname`, `email`, `phone`, `started`, `services`, `bundled`) 
	VALUES ('$fname','$lname','$email','$phone','$started','$services','$bundled')";

	mysqli_query($conn, $sql);

	$html="<table><tr><td>First Name</td><td>$fname</td></tr><tr><td>Last Name</td><td>$lname</td></tr><tr><td>Email</td><td>$email</td></tr><tr><td>Phone</td><td>$phone</td></tr><tr><td>started</td><td>$started</td></tr><tr><td>servcies</td><td>$servcies</td></tr><tr><td>bundled</td><td>$bundled</td></tr></table>";
	
	include('smtp/PHPMailerAutoload.php');
	$mail=new PHPMailer(true);
	$mail->isSMTP();
	$mail->Host="smtp.gmail.com";
	$mail->Port=587;
	$mail->SMTPSecure="tls";
	$mail->SMTPAuth=true;
	$mail->Username="signups@bookwritingcube.com";
	$mail->Password="10@Kskwoks";
	$mail->SetFrom("signups@bookwritingcube.com");
	$mail->addAddress("signups@bookwritingcube.com");
	$mail->IsHTML(true);
	$mail->Subject="Lead Form - BWC - Book Writing Offline";
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
	
	

	
