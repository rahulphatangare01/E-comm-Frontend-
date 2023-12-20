import { LOGIN_REQUEST, LOGIN_FAIL, LOGIN_SUCCESS, CLEAR_ERRORS } from "../constants/userConstants";

export const userReducer = (state = {user:{}},action)=>{

    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                loading:true,
                isAuthanticated:false
            };
        case LOGIN_SUCCESS:
            return{
                ...state,
                loading:false,
                isAuthanticated:true,
                user:action.payload,
            };
        case LOGIN_FAIL:
            return{
                ...state,
                loading: false,
                isAuthanticated:false,
                user:null,
                error:action.payload
            }
        case CLEAR_ERRORS:
            return{
                ...state,
                error: null
            }
        default:
            return state;
    }

}

// switch (action.type) {
//     case LOGIN_REQUEST:
//         return{
//             loading:true,
//             isAuthanticated:false
//         };
//     case LOGIN_SUCCESS:
//         return {
//             ...state,
//             loading:false,
//             isAuthanticated: true,
//             user:action.payload,
//         };
//     case LOGIN_FAIL: 
//         return {
//             ...state,
//             loading:false,
//             isAuthanticated:false,
//             user:null,
//             error:action.payload,

//         };
//     case CLEAR_ERRORS:
//             return {
//                 ...state,
//                 error: null
//             };   
    
         
//    default:
//         return state,
    
//  }