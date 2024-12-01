// import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";

// import Home from "../pages/Home";
// import Pizzas from "../pages/Pizzas";
// import PizzaDetails from "../pages/PizzaDetails";
// import Cart from "../pages/Cart";
// import Checkout from "../pages/Checkout";
// import Login from "../components/Login";

// const Routers = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<Navigate to="/home" />} />
//       <Route path="/home" element={<Home />} />
//       <Route path="/pizzas" element={<Pizzas />} />
//       <Route path="/cart" element={<Cart />} />
//       <Route path="/checkout" element={<Checkout />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/pizzas/:id" element={<PizzaDetails />} />
//     </Routes>
//   );
// };

// export default Routers;
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Pizzas from "../pages/Pizzas";
import PizzaDetails from "../pages/PizzaDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Login from "../components/Login";

const Routers = ({ setLoggedInUser }) => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/pizzas" element={<Pizzas />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/login" element={<Login setLoggedInUser={setLoggedInUser} />} />
      <Route path="/pizzas/:id" element={<PizzaDetails />} />
    </Routes>
  );
};

export default Routers;

