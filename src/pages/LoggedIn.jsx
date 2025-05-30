import { useState } from "react";
import { ChooseCategory } from "../components/Categories";
import Cards from "../components/Card";
import { Link } from "react-router-dom";
export function LoggedIn() {
  const [cartCount, setCartCount] = useState(null);
  const [selected, setSelected] = useState("");

  return (
    <>
      <header>
      <h1>C-TEH MARKET PLACE</h1>
        <div className="sign-out">
          <button>
            <span className="material-symbols-outlined" title="View Cart">
              shopping_cart
            </span>
            <span>{cartCount}</span>
          </button>
          <button>
            <Link to="/">
            <span className="material-symbols-outlined" title="Log Out">
              logout
            </span>
            </Link>
          </button>
        </div>
      </header>
      // logged in page
      <div className="logged-in">
        <div className="choose-category">
          <h2>Choose Category</h2>
          <ChooseCategory setSelected={setSelected} />
          <hr style={{ marginTop: "1rem" }} />
          <Cards selected />
        </div>
      </div>
    </>
  );
}
