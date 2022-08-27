<?php

$secretKey = "6LfzHz8eAAAAAK-8tT3HY2ipPeYFPrLRSP2xpbkc";
$ip = $_SERVER['REMOTE_ADDR'];

// post request to server

$response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=".$secretKey."&response=".$_POST['token']);
$responseKeys = json_decode($response,true);
header('Content-type: application/json');
if($responseKeys["success"] && $responseKeys["score"] >= 0.5) {
	echo json_encode(array('success' => 'true', 'om_score' => $responseKeys["score"], 'token' => $_POST['token'], 'name' => $_POST['name']));
} else {
	echo json_encode(array('success' => 'false', 'om_score' => $responseKeys["score"], 'token' => $_POST['token']));
}

?>
