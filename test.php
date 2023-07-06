<?php
include('smtp/PHPMailerAutoload.php');

    
    
    $mail = new PHPMailer();
           $mail->IsSMTP();  // telling the class to use SMTP
           $mail->SMTPDebug = 2;
           $mail->Mailer = "smtp";
           $mail->Host = "smtp.office365.com";
           	$mail->SMTPSecure="tls";
           $mail->Port = 587;
           $mail->SMTPAuth = true; // turn on SMTP authentication
           	$mail->Username="info@bookwritingcube.com";
	        $mail->Password="mark@BWC!23*";
           $Mail->Priority = 1;
         	$mail->addAddress("info@bookwritingcube.com");
        	$mail->SetFrom("info@bookwritingcube.com");
           $mail->Subject  = "This is a Test Message";
           $mail->Body     = "HELLO";
           $mail->WordWrap = 50;
           if(!$mail->Send()) {
           echo 'Message was not sent.';
           echo 'Mailer error: ' . $mail->ErrorInfo;
           } else {
           echo 'Message has been sent.';
           }