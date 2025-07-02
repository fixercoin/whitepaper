 # Signup with Mobile Number and Password

<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $mobile = $_POST['mobile'];
    $password = $_POST['password'];

    // Validate mobile number and password
    if (preg_match('/^[0-9]{10}$/', $mobile) && !empty($password)) {
        // Store data (example: using a database)
        // Assuming a connection to the database is already established
        $hashedPassword = password_hash($password, PASSWORD_DEFAULT);
        $stmt = $conn->prepare("INSERT INTO users (mobile, password) VALUES (?, ?)");
        $stmt->bind_param("ss", $mobile, $hashedPassword);
        $stmt->execute();
        $stmt->close();

        // Redirect to login.html
        header("Location: login.html");
        exit();
    } else {
        echo "Invalid mobile number or password.";
    }
}
?>
