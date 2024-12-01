// import React from "react";

// import Header from "../Header/Header.jsx";
// import Footer from "../Footer/Footer.jsx";
// import Routes from "../../routes/Routers";
// import Carts from "../UI/cart/Carts.jsx";


// import { useSelector } from "react-redux";

// const Layout = () => {
//   const showCart = useSelector((state) => state.cartUi.cartIsVisible);

//   return (
//     <div className="d-flex flex-column vh-100 justify-content-between">
//       <Header />
//       {showCart && <Carts />}
//       <div>
//         <Routes />
//       </div>
//       <Footer />
      

//     </div>
//   );
// };

// export default Layout;
import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Routes from "../../routes/Routers";
import Carts from "../UI/cart/Carts.jsx";

import { useSelector } from "react-redux";

const Layout = ({ loggedInUser, setLoggedInUser }) => {
  const showCart = useSelector((state) => state.cartUi.cartIsVisible);

  return (
    <div className="d-flex flex-column vh-100 justify-content-between">
      <Header
        loggedInUser={loggedInUser}
        setLoggedInUser={setLoggedInUser}
      />
      {showCart && <Carts />}
      <div>
        <Routes loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;

