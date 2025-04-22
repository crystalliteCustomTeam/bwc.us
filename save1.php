<?php
    // error_reporting(10);
	include 'database.php';
    
// 	$name=$_POST['name'];
// 	$email=$_POST['email'];
// 	$phone=$_POST['phone'];
// 	$message=$_POST['message'];
// 	$page_url=$_POST['page_url'];
// 	$date = date("l jS \of F Y h:i:s A");
// 	$sql = "INSERT INTO `leadform`( `name`, `email`, `phone`, `comments`,`wholeDate`) 
// 	VALUES ('$name','$email','$phone','$message','$date')";

// 	mysqli_query($conn, $sql);

// 	$html="<table> <tr> <td>Name</td> <td>$name</td> </tr> <tr> <td>Email</td> <td>$email</td> </tr> <tr> <td>Phone</td> <td> $phone</td> </tr> <tr> <td>Subject</td> <td>$subject</td> </tr> <tr> <td>Budget</td> <td>$budget</td> </tr> <tr> <td>Message</td> <td>$message</td> </tr> <tr> <td>Page URL</td> <td>$page_url</td> </tr></table>";
// 	$html = "avc0";


	$name=$_POST['name'];
	$email=$_POST['email'];
	$phone=$_POST['phone'];
	$message=$_POST['comments'];
    $date = date("l jS \of F Y h:i:s A");
	$pageURL=$_POST['pageURL'];
	$clientIP=$_POST['ip'];
	
	$params = array();
    parse_str($_POST['form'], $params);
	echo $sql = "INSERT INTO `leadform`( `name`, `email`, `phone`, `comments`,`wholeDate`,`page_url`,`clientIP`) 
	VALUES ('".$params['name']."','".$params['email']."','".$params['phone']."','".$params['message']."','$date', '$pageURL','$clientIP')";

	mysqli_query($conn, $sql);

	$html="<table><tr><td>Name</td><td>".$params['name']."</td></tr><tr><td>Email</td><td>".$params['email']."</td></tr><tr><td>Phone</td><td>	".$params['phone']."</td></tr><tr><td>message</td><td>".$params['message']."</td></tr><tr><td>page URL</td><td>$pageURL</td></tr><tr><td>IP</td><td>$clientIP</td></tr></table>";
	
	
	try{
	    include('smtp/PHPMailerAutoload.php');
	    	$mail=new PHPMailer(true);
        	$mail->isSMTP();
        	$mail->Host="smtp.gmail.com";
        	$mail->Port=587;
        	$mail->SMTPSecure="tls";
        	$mail->SMTPAuth=true;
        	$mail->Username="signups@bookwritingcube.us";
        	$mail->Password="LYU2M95NQ4Um6gW@";
        	$mail->SetFrom("signups@bookwritingcube.us");
        	$mail->addAddress("signups@bookwritingcube.us");
        	$mail->IsHTML(true);
        	$mail->Subject="Lead Form - BWC - Book Writing";
        	$mail->Body=$html;
        	$mail->SMTPOptions=array('ssl'=>array(
        		'verify_peer'=>true,
        		'verify_peer_name'=>true,
        		'allow_self_signed'=>true
        	));
        $mail->send();

	}
	catch(Exception $e) {
      echo 'Message: ' .$e->getMessage();
    }
	

mysqli_close($conn);

// The URL where you want to send the request
$url = 'https://brandsapi.pulse-force.com/api/v1/leads'; // Replace with your target URL




// Data to be sent in the request
$data3 = array(
    'page_url' => $pageURL,
    'user_ip' => $clientIP,
    'lead_data' => $params
);
// Initialize cURL session
$ch = curl_init($url);
// Set the necessary cURL options
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); // Return the response as a string
curl_setopt($ch, CURLOPT_POST, true); // Specify the request type as POST
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($data3)); // Encode the data array to JSON and set it as POST fields
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Content-Type: application/json', // Set the content type to JSON
    'Content-Length: ' . strlen(json_encode($data3)) // Set the content length
));
// Execute the cURL request and get the response
$response = curl_exec($ch);
// Check for errors
if (curl_errno($ch)) {
    echo 'Error:' . curl_error($ch);
} else {
    // Print the response
    echo 'Response:' . $response;
}
// Close the cURL session
curl_close($ch);
	
	

	
