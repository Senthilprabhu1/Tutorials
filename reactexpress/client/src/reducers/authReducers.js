import { SET_CURRENT_USER, USER_LOADING, GET_CURRENT_USER } from '../actions/types';

const isEmpty = require('is-empty');

const initialstate = {
    isAuthenticated : false,
    user : {},
    loading : false
};

export default function(state = initialstate, action){
    switch(action.type){
        case SET_CURRENT_USER:
            return{
                ...state,
                isAuthenticated : !isEmpty(action.payload),
                user : action.payload
            };
        case USER_LOADING:
            return{
                ...state,
                loading : true
            };
        case GET_CURRENT_USER:
            return{
                ...state,
                profile : action.payload,
                loading : false
            };
        default:
            return state;
    }
}