import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/authContext";
import { types } from "../../types/index";

import 'animate.css'

export const Navbar = () => {
  const navigate = useNavigate();

  const { user, dispatch } = useContext(AuthContext);

  const handleLogout = () => {
    const action = {
      type: types.logout,
    };

    dispatch(action);

    navigate("/login", { replace: true });
  };

  return (
    <div className="hola">
      <nav class="navbar navbar-expand-md navbar-light bg-light">
        <div class="container-fluid animate__animated animate__fadeIn">
          <Link className="navbar-brand" to="/marvel">
            <img
              src="/assets/marvel-dc-logo.png"
              alt=""
              width="50"
              height="60"
            />
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link className="navbar-brand" to="/marvel">
              Associations
            </Link>
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    "nav-item nav-link " + (isActive ? " active" : "")
                  }
                  to="/marvel"
                >
                  Marvel
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    "nav-item nav-link " + (isActive ? " active" : "")
                  }
                  to="/dc"
                >
                  DC
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink
                  className={({ isActive }) =>
                    "nav-item nav-link " + (isActive ? " active" : "")
                  }
                  to="/search"
                >
                  Search
                </NavLink>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto">
              <span className="nav-item nav-link text-info">{user.name}</span>
              <button
                className="btn btn-outline-dark ms-2"
                onClick={handleLogout}
                to="/login"
              >
                Logout
              </button>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
