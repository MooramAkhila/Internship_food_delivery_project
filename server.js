/*const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());  // Middleware to parse JSON requests

// MySQL connection using createPool for connection pooling
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Janu@62004",  // Set your MySQL root password
    database: "food_delivery",  // Set your database name
});

// Test database connection
db.getConnection((err, connection) => {
    if (err) {
        console.log("Database Connection Error:", err);
    } else {
        console.log("Connected to Database");
        connection.release();  // Release the connection back to the pool
    }
});

// Create a new user
app.post("/register", (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const query = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
    db.query(query, [username, email, password], (err, results) => {
        if (err) {
            console.error("Error inserting user:", err);
            return res.status(500).json({ success: false, message: "Database error" });
        }

        res.status(201).json({ success: true, message: "User registered successfully" });
    });
});
// Login endpoint
// app.post("/login", (req, res) => {
//     const { email, password } = req.body;

//     if (!email || !password) {
//         return res.status(400).json({ success: false, message: "All fields are required" });
//     }

//     const query = "SELECT username FROM users WHERE email = ? AND password = ?";
//     db.query(query, [email, password], (err, results) => {
//         if (err) {
//             console.error("Error during login:", err);
//             return res.status(500).json({ success: false, message: "Database error" });
//         }

//         if (results.length > 0) {
//             res.status(200).json({ success: true, username: results[0].username });
//         } else {
//             res.status(401).json({ success: false, message: "Invalid credentials" });
//         }
//     });
// });
app.post("/login", (req, res) => {
    const { email, password } = req.body;
    if (email === "akhimooram213@gmail.com" && password === "12345678") {
        return res.json({ success: true, username: "testuser" });
    } else {
        return res.status(401).json({ success: false, message: "Invalid credentials" });
    }
});



// Server setup
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); */
const express = require("express");
const mysql = require("mysql");
const bcrypt = require("bcrypt"); // For password hashing
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json()); // Middleware to parse JSON requests

// MySQL connection using createPool for connection pooling
const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Janu@62004", // Set your MySQL root password
    database: "food_delivery", // Set your database name
});

// Test database connection
db.getConnection((err, connection) => {
    if (err) {
        console.log("Database Connection Error:", err);
    } else {
        console.log("Connected to Database");
        connection.release(); // Release the connection back to the pool
    }
});

// Register endpoint
// app.post("/register", async (req, res) => {
//     const { username, email, password } = req.body;

//     // Validate input
//     if (!username || !email || !password) {
//         return res.status(400).json({ success: false, message: "All fields are required" });
//     }

//     try {
//         // Check if the user already exists
//         const userExistsQuery = "SELECT * FROM users WHERE email = ?";
//         db.query(userExistsQuery, [email], async (err, results) => {
//             if (err) {
//                 console.error("Error checking user existence:", err);
//                 return res.status(500).json({ success: false, message: "Database error" });
//             }

//             if (results.length > 0) {
//                 return res.status(400).json({ success: false, message: "Email is already registered" });
//             }

//             // Hash the password
//             //const hashedPassword = await bcrypt.hash(password, 10);

//             // Insert new user
//             const insertUserQuery = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
//             db.query(insertUserQuery, [username, email, password], (err, results) => {
//                 if (err) {
//                     console.error("Error inserting user:", err);
//                     return res.status(500).json({ success: false, message: "Database error" });
//                 }

//                 res.status(201).json({ success: true, message: "User registered successfully" });
//             });
//         });
//     } catch (error) {
//         console.error("Error during registration:", error);
//         res.status(500).json({ success: false, message: "Server error" });
//     }
// });

app.post("/register", (req, res) => {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
        return res.status(400).json({ success: false, message: "All fields are required" });
    }

    // Check if the user already exists
    const userExistsQuery = "SELECT * FROM users WHERE email = ?";
    db.query(userExistsQuery, [email], (err, results) => {
        if (err) {
            console.error("Error checking user existence:", err);
            return res.status(500).json({ success: false, message: "Database error" });
        }

        if (results.length > 0) {
            return res.status(400).json({ success: false, message: "Email is already registered" });
        }

        // Insert user without hashing password
        const insertUserQuery = "INSERT INTO users (username, email, password) VALUES (?, ?, ?)";
        db.query(insertUserQuery, [username, email, password], (err, results) => {
            if (err) {
                console.error("Error inserting user:", err);
                return res.status(500).json({ success: false, message: "Database error" });
            }

            res.status(201).json({ success: true, message: "User registered successfully" });
        });
    });
});


app.post("/login", (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ success: false, message: "Email and password are required" });
    }

    const query = "SELECT username, password FROM users WHERE email = ?  AND password = ?";
    db.query(query, [email, password], async (err, results) => {
        if (err) {
            console.error("Database Error:", err);
            return res.status(500).json({ success: false, message: "Database error" });
        }

        if (results.length === 0) {
            return res.status(401).json({ success: false, message: "Invalid email" });
        }

        const user = results[0];

        // Compare the plaintext password with the hashed password
        const isPasswordValid = await bcrypt.compare(password, user.password);

        console.log("Plaintext Password:", password);
        console.log("Stored Hashed Password:", user.password);
        console.log("Password Match:", isPasswordValid);

        // if (!isPasswordValid) {
        //     return res.status(401).json({ success: false, message: "Invalid password" });
        // }

        // If both email and password are correct
        res.status(200).json({ success: true, username: user.username });
    });
});
// app.post("/login", (req, res) => {
//     const { email, password } = req.body;

//     if (!email || !password) {
//         return res.status(400).json({ success: false, message: "Email and password are required" });
//     }

//     // Query the database for a matching email and password
//     const query = "SELECT username FROM users WHERE email = ? AND password = ?";
//     db.query(query, [email, password], (err, results) => {
//         if (err) {
//             console.error("Database Error:", err);
//             return res.status(500).json({ success: false, message: "Database error" });
//         }

//         if (results.length === 0) {
//             return res.status(401).json({ success: false, message: "Invalid email or password" });
//         }

//         const user = results[0];
//         res.status(200).json({ success: true, username: user.username });
//     });
// });



// Server setup
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

