import React, { useEffect } from "react";
import Login from "./components/Login";
import Categories from "./components/Categories";


function App() {

  return (
    <>
      <header>
        <h1>C-TEH MARKET PLACE</h1>
        
          <div className="sign-in">
            <button>Sign In</button>
            <span className="material-symbols-outlined">login</span>
          </div>        
        
      </header>
          <div className="main">
            <h1>WELCOME</h1>
            <Login />
          </div>
          <div className="page">
            <div className="items">
              <h2>View Categories Below</h2>
              <Categories />
            </div>
          </div>
        </>
  );
}


export default App;
