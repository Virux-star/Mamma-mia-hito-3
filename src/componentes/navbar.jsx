import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { UserContext } from "../context/UserContext";

const Navbar = () => {
  const { total } = useContext(CartContext);

  const { token, logout } = useContext(UserContext);

  return (
    <nav className="navbar navbar-dark bg-dark px-4 py-3 shadow">
      <div className="d-flex gap-2">
        <Link to="/">
          <button className="btn btn-outline-light">
            🍕 Home
          </button>
        </Link>

        {token ? (
          <>
            <Link to="/profile">
              <button className="btn btn-outline-light">
                🔓 Profile
              </button>
            </Link>

            <button
              className="btn btn-danger"
              onClick={logout}
            >
              🔒 Logout
            </button>
          </>
        ) : (
          <>
            <Link to="/login">
              <button className="btn btn-outline-light">
                🔐 Login
              </button>
            </Link>

            <Link to="/register">
              <button className="btn btn-warning">
                🔐 Register
              </button>
            </Link>
          </>
        )}
      </div>

      <Link to="/cart">
        <button className="btn btn-success">
          🛒 Total: ${total.toLocaleString("es-CL")}
        </button>
      </Link>
    </nav>
  );
};

export default Navbar;