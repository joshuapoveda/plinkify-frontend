import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const handleClick = () => {
    logout();
  };

  return (
    <header>
      <div className="nav-container">
        <Link to="/">
          <h1>PLINKIFY</h1>
        </Link>
        <nav>
          {user && (
            <div>
              <div>{user.email}</div>
              <button onClick={handleClick}>Logout</button>
            </div>
          )}
          {!user && (<div>
            <Link to="/login">Login</Link>
            <br></br>
            <Link to="/signup">signup</Link>
          </div>)}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
