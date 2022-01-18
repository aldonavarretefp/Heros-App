import React, { useContext } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/index';

export const Navbar = () => {
    const navigate = useNavigate();


    const {user,dispatch} = useContext(AuthContext);


    const handleLogout = () => {
        const action = {
            type: types.logout
        }
        
        dispatch(action);

        navigate('/login', { replace: true });
    }   
    //TODO: Modify the navbar toggler
    return (
        <div className="hello">
            <nav className="navbar navbar-expand-lg navbar-light"  style={{backgroundColor: '#e1e5e9'}}>
                <Link className="navbar-brand" to="/">
                <img src="/assets/marvel-dc-logo.png" alt="" width="50" height="60"/>
                </Link>
                <Link
                    className="navbar-brand"
                    to="/"
                >
                    Asociaciones
                </Link>
                <div className="collapse navbar-collapse">
                    <div className="navbar-nav">
                        <NavLink
                            className={({isActive})=>("nav-item nav-link " + (isActive ? " active" : ""))}
                            to="/marvel"
                        >
                            Marvel
                        </NavLink>
                        <NavLink
                            className={({isActive})=>"nav-item nav-link " + (isActive ? " active" : "")}
                            to="/dc"
                        >
                            DC
                        </NavLink>
                        <NavLink
                            className={({isActive})=>"nav-item nav-link " + (isActive ? " active" : "")}
                            to="/search"
                        >
                            Search
                        </NavLink>
                        <button
                          className="navbar-toggler"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#navbarSupportedContent"
                          aria-controls="navbarSupportedContent"
                          aria-expanded="false"
                          aria-label="Toggle navigation"
                        >
                          <span className="navbar-toggler-icon" />
                        </button>
                    </div>
                </div>
                <div className="navbar-collapse collapse w-100 order-3 dual-collapse2 d-flex justify-content-end">
                    <ul className="navbar-nav ml-auto">
                        <span className="nav-item nav-link text-info">
                            {
                                user.name
                            }
                        </span>
                        <button
                            className="nav-item nav-link btn"
                            onClick={handleLogout}
                            to="/login"
                        >
                            Logout
                        </button>
                    </ul>
                </div>
            </nav>
            {/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
              <div class="container-fluid">
                <a class="navbar-brand" href="#">Navbar</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div class="navbar-nav">
                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                    <a class="nav-link" href="#">Features</a>
                    <a class="nav-link" href="#">Pricing</a>
                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                  </div>
                </div>
              </div>
            </nav> */}

        </div>

    )
}