 <?php
require_once 'vendor/autoload.php';
require_once 'config.php';

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $client = new Google_Client();
    $client->setApplicationName("Client_Library_Examples");
    $client->setDeveloperKey($config['google_api_key']);

    $oauth2 = new Google_Service_Oauth2($client);

    if (isset($_POST['email']) && isset($_POST['password'])) {
        try {
            $client->setScopes(array('https:                                                                                                
            $client->setAssertionCredentials(new Google_Auth_AssertionCredentials(
                $config['service_account_email'],
                array('https://www.googleapis.com/auth/userinfo.email', 'https://www.googleapis.com/auth/userinfo.profile'),
                file_get_contents($config['private_key_file'])
            ));

            $userinfo = $oauth2->userinfo->get();

            if ($userinfo['email'] == $email) {
                // Verify password using Gmail API
                $curl = curl_init();
                curl_setopt_array($curl, array(
                    CURLOPT_URL => "https:                                      
                    CURLOPT_RETURNTRANSFER => true,
                    CURLOPT_ENCODING => "",
                    CURLOPT_MAXREDIRS => 10,
                    CURLOPT_TIMEOUT => 30,
                    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                    CURLOPT_CUSTOMREQUEST => "POST",
                    CURLOPT_POSTFIELDS => "grant_type=password&username=$email&password=$password",
                    CURLOPT_HTTPHEADER => array(
                        "Content-Type: application/x-www-form-urlencoded",
                        "Authorization: Basic " . base64_encode($config['client_id'] . ":" . $config['client_secret'])
                    ),
                ));

                $response = curl_exec($curl);
                $err = curl_error($curl);

                curl_close($curl);

                if ($err) {
                    echo json_encode(array('success' => false, 'message' => 'cURL Error              
                } else {
                    $response = json_decode($response, true);
                    if (isset($response['access_token'])) {
                                           
                        session_start();
                        $_SESSION['email'] = $email;
                        echo json_encode(array('success' => true, 'message' => 'Login successful!'));
                    } else {
                        echo json_encode(array('success' => false, 'message' => 'Invalid email or password!'));
                    }
                }
            } else {
                echo json_encode(array('success' => false, 'message' => 'Invalid email or password!'));
            }
        } catch (Exception $e) {
            echo json_encode(array('success
