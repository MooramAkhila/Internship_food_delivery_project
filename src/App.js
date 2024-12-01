// import Layout from "./components/Layout/Layout";

// function App() {
//   return <Layout />;
// }

// export default App;
import React, { useState } from "react";
import Layout from "./components/Layout/Layout";

function App() {
  const [loggedInUser, setLoggedInUser] = useState("");

  return <Layout loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} />;
}

export default App;

