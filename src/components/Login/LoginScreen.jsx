import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/index';

import 'animate.css'
export const LoginScreen = () => {
    const navigate = useNavigate();

    const {dispatch} = useContext(AuthContext);

    const handleLogin = () => {
        
        //Homework:
        const action = {
            type: types.login,
            payload: {
                name: 'Juan'
            }
        }
        dispatch(action);
        const lastPath = localStorage.getItem('lastPath') || '/';

        navigate(lastPath,{ replace: true });


    }
    return (
        <div className='container mt-5 animate__animated animate__fadeIn'>
           <h1>Login Screen</h1> 
           <hr/>
           <button 
            className="btn btn-primary btn-lg btn-block"
            onClick={handleLogin}
           >Login</button>
        </div>
    )
}
