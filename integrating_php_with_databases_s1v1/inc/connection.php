<? php

$host = "localhost";
$user = "root";
$db = "database";
$pass = "root";


$dbc = new PDO("mysql:host=" . $host . ";dbname=" . $db, $user, $pass);
var_dump($dbc);