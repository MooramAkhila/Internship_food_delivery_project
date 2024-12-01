
// import React, { useState } from "react";
// import axios from "axios";
// import "./login.css";

// const Login = () => {
//   const [userData, setUserData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setUserData({ ...userData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         "http://localhost:5000/register", // Update the endpoint to match the backend
//         userData
//       );

//       console.log("Response:", response);
//       if (response.data.success) {
//         alert("User registered successfully!");
//       } else {
//         alert(response.data.message || "Registration failed.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("An error occurred during registration.");
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-form">
//         <h2>Register</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="username"
//             placeholder="Username"
//             value={userData.username}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={userData.email}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={userData.password}
//             onChange={handleChange}
//             required
//           />
//           <button type="submit">Register</button>
//           <p>
//             Already have an account? <a href="/login">Login</a>
//           </p>
//         </form>
//       </div>
//       <div className="login-image">
//         <img src="/path-to-your-image.jpg" alt="Login Illustration" />
//       </div>
//     </div>
//   );
// };

// export default Login;

// import React, { useState } from "react";
// import axios from "axios";
// import "./login.css";

// const Login = ({ setLoggedInUser }) => {
//   const [isLogin, setIsLogin] = useState(true); // Toggle between login and register
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const endpoint = isLogin
//         ? "http://localhost:5000/login"
//         : "http://localhost:5000/register";

//       const response = await axios.post(endpoint, formData);

//       console.log("Response:", response);
//       if (response.data.success) {
//         if (isLogin) {
//           // Handle successful login
//           alert("Login successful!");
//           setLoggedInUser(response.data.username); // Set the logged-in user
//         } else {
//           // Handle successful registration
//           alert("User registered successfully!");
//           setIsLogin(true); // Redirect to login after registration
//         }
//       } else {
//         alert(response.data.message || "Operation failed.");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("An error occurred. Please try again.");
//     }
//   };



//   return (
//     <div className="login-container">
//       <div className="login-form">
//         <h2>{isLogin ? "Login" : "Register"}</h2>
//         <form onSubmit={handleSubmit}>
//           {!isLogin && (
//             <input
//               type="text"
//               name="username"
//               placeholder="Username"
//               value={formData.username}
//               onChange={handleChange}
//               required
//             />
//           )}
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//           <button type="submit">{isLogin ? "Login" : "Register"}</button>
//           <p>
//             {isLogin
//               ? "Don't have an account? "
//               : "Already have an account? "}
//             <a
//               href="#"
//               onClick={(e) => {
//                 e.preventDefault();
//                 setIsLogin(!isLogin); // Toggle between login and register
//               }}
//             >
//               {isLogin ? "Register" : "Login"}
//             </a>
//           </p>
//         </form>
//       </div>
//       <div className="login-image">
//         <img src="/path-to-your-image.jpg" alt="Illustration" />
//       </div>
//     </div>
//   );
// };

// export default Login;
/////////////////87654568909876545678///
// import React, { useState } from "react";
// import axios from "axios";
// import "./login.css";

// const Login = ({ setLoggedInUser }) => {
//   const [isLogin, setIsLogin] = useState(true); // Toggle between login and register
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Function to handle registration
//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:5000/register", formData);

//       if (response.data.success) {
//         alert("Registration successful! You can now log in.");
//         setIsLogin(true); // Switch to login form after successful registration
//       } else {
//         alert(response.data.message || "Registration failed.");
//       }
//     } catch (error) {
//       console.error("Registration error:", error.response?.data || error.message);
//       alert(error.response?.data?.message || "An error occurred during registration.");
//     }
//   };

//   // Function to handle login
//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:5000/login", {
//         email: formData.email,
//         password: formData.password,
//       });

//       if (response.data.success) {
//         alert("Login successful!");
//         setLoggedInUser(response.data.username); // Pass logged-in user's name to parent component
//       } else {
//         alert(response.data.message || "Invalid email or password.");
//       }
//     } catch (error) {
//       console.error("Login error:", error.response?.data || error.message);
//       alert(error.response?.data?.message || "An error occurred during login.");
//     }
//   };

//   return (
//     <div className="login-container">
//       <div className="login-form">
//         <h2>{isLogin ? "Login" : "Register"}</h2>
//         <form onSubmit={isLogin ? handleLogin : handleRegister}>
//           {!isLogin && (
//             <input
//               type="text"
//               name="username"
//               placeholder="Username"
//               value={formData.username}
//               onChange={handleChange}
//               required
//             />
//           )}
//           <input
//             type="email"
//             name="email"
//             placeholder="Email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//           <button type="submit">{isLogin ? "Login" : "Register"}</button>
//           <p>
//             {isLogin
//               ? "Don't have an account? "
//               : "Already have an account? "}
//             <a
//               href="#"
//               onClick={(e) => {
//                 e.preventDefault();
//                 setIsLogin(!isLogin); // Toggle between login and register
//               }}
//             >
//               {isLogin ? "Register" : "Login"}
//             </a>
//           </p>
//         </form>
//       </div>
//       <div className="login-image">
//         <img src="/path-to-your-image.jpg" alt="Illustration" />
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./login.css";

const Login = ({ setLoggedInUser }) => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between login and register
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/register", formData);

      if (response.data.success) {
        alert("Registration successful! You can now log in.");
        setIsLogin(true); // Switch to login form after successful registration
      } else {
        alert(response.data.message || "Registration failed.");
      }
    } catch (error) {
      console.error("Registration error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "An error occurred during registration.");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email: formData.email,
        password: formData.password,
      });

      if (response.data.success) {
        alert("Login successful!");
        setLoggedInUser(response.data.username); // Pass username to parent
        navigate("/home"); // Navigate to the home page
      } else {
        alert(response.data.message || "Invalid email or password.");
      }
    } catch (error) {
      console.error("Login error:", error.response?.data || error.message);
      alert(error.response?.data?.message || "An error occurred during login.");
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>{isLogin ? "Login" : "Register"}</h2>
        <form onSubmit={isLogin ? handleLogin : handleRegister}>
          {!isLogin && (
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          )}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit">{isLogin ? "Login" : "Register"}</button>
          <p>
            {isLogin
              ? "Don't have an account? "
              : "Already have an account? "}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setIsLogin(!isLogin);
              }}
            >
              {isLogin ? "Register" : "Login"}
            </a>
          </p>
        </form>
      </div>
      <div className="login-image">
        <img src="/path-to-your-image.jpg" alt="Illustration" />
      </div>
    </div>
  );
};

export default Login;
