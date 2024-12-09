<?php
    
	include 'database.php';
    
	$name=$_POST['name'];
	$email=$_POST['email'];
	$phone=$_POST['phone'];
	$article=$_POST['inputArt'];
	$star=$_POST['inputStar'];
	$price=$_POST['inputPrice'];
	$message=$_POST['message'];
	$page_url=$_POST['page_url'];
	$date = date("l jS \of F Y h:i:s A");
	$sql = "INSERT INTO `leadform`( `name`, `email`, `phone`, `comments`,`wholeDate`) 
	VALUES ('$name','$email','$phone','$message','$date')";

	mysqli_query($conn, $sql);

	$html="<table> <tr> <td>Name</td> <td>$name</td> </tr> <tr> <td>Email</td> <td>$email</td> </tr> <tr> <td>Phone</td> <td> $phone</td> </tr> <tr> <td>Article</td> <td>$article</td> </tr> <tr><tr> <td>Star</td> <td>$star</td> </tr> <tr>  <td>Price</td> <td>$price</td> </tr> <tr> <td>Message</td> <td>$message</td> </tr> <tr> <td>Page URL</td> <td>$page_url</td> </tr></table>";
	
	include('smtp/PHPMailerAutoload.php');
	$mail=new PHPMailer(true);
	$mail->isSMTP();
	$mail->Host="smtp.office365.com";
	$mail->Port=587;
	$mail->SMTPSecure="tls";
	$mail->SMTPAuth=true;
	$mail->Username="info@bookwritingcube.us";
	$mail->Password="mark@BWC!23*";
	$mail->SetFrom("info@bookwritingcube.us");
	$mail->addAddress("info@bookwritingcube.us");
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
	
	

	
