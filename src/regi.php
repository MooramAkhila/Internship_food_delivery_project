<?php
// Database connection settings
$servername = "localhost";
$username = "root";
$password = "janu1234"; // Set your MySQL root password
$dbname = "food_delivery";

// Create a connection
$conn = new mysqli_connect($servername, $username, $password, $dbname);

// Check the connection
if ($conn->connect_error) {
    die("Connection: " . $conn->connect_error);
}
echo "Connection is successful";
// Handle POST request
// if ($_SERVER["REQUEST_METHOD"] === "POST") {
//     $action = $_POST["action"]; // 'register' or 'login'

//     // if ($action === "register") {
//         // Registration logic
//         $data = json_decode(file_get_contents("php://input"), true);
//         $username = $data["username"];
//         $email = $data["email"];
//         // Insert user into database (only storing username and email)
//         $sql = "INSERT INTO users   (username, email) VALUES ('$username', '$email')";

//         if ($conn->query($sql) === TRUE) {
//             echo json_encode(["message" => "Registration successful!"]);
//         } else {
//             echo json_encode(["error" => "Error: " . $conn->error]);
//         }
//     // } elseif ($action === "login") {
//     //     // Login logic (this is a placeholder for the login process)
//     //     // Since you're only storing email and username, login can be checked here
//     //     $email = $_POST["email"];
        
//     //     // Check if user exists
//     //     $sql = "SELECT * FROM users WHERE email='$email'";
//     //     $result = $conn->query($sql);

//     //     if ($result->num_rows > 0) {
//     //         $user = $result->fetch_assoc();
//     //         echo json_encode(["message" => "Login successful!"]);
//     //     } else {
//     //         echo json_encode(["error" => "User not found!"]);
//     //     }
//     // } else {
//     //     echo json_encode(["error" => "Invalid action!"]);
//     // }
// }

// // Close the connection
$conn->close();
?>