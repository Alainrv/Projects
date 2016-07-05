<?php

$user    = 'root';
$pass    = 'root';
$host    = 'localhost';
$db      = 'database';
$charset = 'utf8';

try {
	$conn = new PDO("mysql:host=$host;dbname=$db;charset=$charset", $user, $pass);
	$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (Exception $e) {
	echo "Unable to connect to the database";
	// echo $e->getMessage();
	exit;
}


