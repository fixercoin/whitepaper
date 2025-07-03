<?php
require_once 'vendor/autoload.php';
require_once 'config.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = json_decode(file_get_contents('php:                          
    $password = json_decode(file_get_contents('php://input'), true)['password'];

    // Validate email using Gmail API
    $curl = curl_init();
    curl_setopt_array($curl, array(
        CURLOPT_URL => "https:                                            
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "GET",
        CURLOPT_HTTPHEADER => array(
            "Authorization: Bearer " . get_access_token($email, $password)
        ),
    ));

    $response = curl_exec($curl);
    $err = curl_error($curl);

    curl_close($curl);

    if ($err) {
        echo json_encode(array('success' => false, 'message' => 'cURL Error              
    } else {
        $response = json_decode($response, true);
        if (isset($response['email'])) {
                                                  
            $hashed_password = password_hash($password, PASSWORD_DEFAULT);
                                        
            $conn = mysqli_connect($config['db_host'], $config['db_username'], $config['db_password'], $config['db_name']);
            $query = "INSERT INTO users (email, password) VALUES ('$email', '$hashed_password')";
            if (mysqli_query($conn, $query)) {
                echo json_encode(array('success' => true, 'message' => 'User created successfully!'));
            } else {
                echo json_encode(array('success' => false, 'message' => 'Error creating user!'));
            }
        } else {
            echo json_encode(array('success' => false, 'message' => 'Invalid email or password!'));
        }
    }
}

function get_access_token($email, $password) {
                                       
    $curl = curl_init();
    curl_setopt_array($curl, array(
        CURLOPT_URL => "https://accounts.google.com/o/oauth2/token",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT =>
