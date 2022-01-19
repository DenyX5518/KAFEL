<?php
//
//
//    $db_connection = new mysqli('localhost', 'root', '', 'first_db', '3306');
//    if($db_connection->errno) echo("Ошибка подключения!");
//    $db_connection->set_charset("utf8");

//    $sql = 'INSERT INTO db ("email") VALUES ("$email")';
//    $result = mysqli_query($db_connection, $sql);
//    if ($result == false) {
//        print("Произошла ошибка при выполнении запроса");
//    }
/*подключение к базе данных*/
    //Login in DataBase
    $host = "localhost"; // в 90% случаев это менять не надо
    $password = "";
    $username = "root";
    $databasename = "first_db";

    //Data in DataBase
    $password_input = $_GET['password'];
    $phone = $_GET['phone'];
    $email = $_GET['email'];
    $name = $_GET['name'];
    $db = mysqli_connect($host, $username, $password, $databasename) or die("error: Failed_connect_database");
    mysqli_query($db, "INSERT INTO `db` (`username`, `email`, `password`, `phone`, `id`) VALUES ('" . $name . "', '" . $email . "', '" . $password_input . "', '" . $phone . "', NULL)");
    mail("alekc.72-72@mail.ru", "Новый клиент", "Привет, к тебе пришёл новый клиент. \r\n Имя: $name \r\n Почта: $email \r\n Номер телефона: $phone", "KAFEL-PLUS");
    


