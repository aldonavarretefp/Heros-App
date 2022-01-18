// const state= {
//     name:"Aldo",
//     logged:true
// }
import {types} from '../types/';

// const loginAction = {
//     type: types.login,
//     payload: {
//         name: 'Aldo',
//         logged: true,
//         email: 'aaldiitoo@gmail.com'
//     }
// }

export const authReducer = (state={}, action ) => {
    switch(action.type){
        case types.login:
            return {
                ...action.payload,
                logged:true
            }
        case types.logout:
            return {
                logged:false
            }
        default:
            return state;
    }    
}
