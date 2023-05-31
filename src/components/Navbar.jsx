import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header>
      <div className="nav-container">
        <Link to="/">
            <h1>PLINKIFY</h1>
        </Link>
        <nav>
          <div>
            <Link to="/login">Login</Link>
            <br></br>
            <Link to="/signup">signup</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
