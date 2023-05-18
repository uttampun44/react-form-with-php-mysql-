<?php 

     require_once('connection.php');
       header("Access-Control-Allow-Origin: *");
       header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
       header("Access-Control-Allow-Headers: Content-Type, Authorization");
       header('Content-Type: application/json');


if($_SERVER['REQUEST_METHOD'] == 'POST'){
         $firstName = $_POST['firstName'];
         $lastName = $_POST['lastName'];
         $email = $_POST['email'];
         $phoneNumber = $_POST['phoneNumber'];
         $address = $_POST['address'];

         $insert = "INSERT INTO fullstackform(firstName, lastName, email, phoneNumber, address)VALUES('$firstName', '$lastName', '$email', '$phoneNumber', '$address')";


      if(mysqli_query($sqlConnection, $insert)){
          echo json_encode(['message' => 'Form data submitted successfully']);
          http_response_code(200);
        }else{
          http_response_code(404);
     }
   }