import React from "react";
import { Link,  useNavigate } from "react-router-dom";
const Navbar = () => {
  const Navigate = useNavigate()
  const handleSignout = () => {
    localStorage.clear();
   
    Navigate("/login")
  };
  const isLogin = localStorage.getItem("registrationData");
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <Link className="navbar-brand" to="/">
        Home
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div
        className="collapse navbar-collapse d-flex justify-content-end"
        id="navbarNavAltMarkup"
      >
        <div className="navbar-nav d-flex justify-content-end">
        {isLogin ? (
            <button
              className="nav-item nav-link btn btn-link"
              onClick={handleSignout}
            >
              Signout
            </button>
          ) : null}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
