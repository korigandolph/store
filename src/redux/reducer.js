const initialState ={
    email: {}
}

const GET_EMAIL='GET_EMAIL';

export function getEmail(emailObj){
    return{
        type: GET_EMAIL,
        payload: emailObj
    }
}

export default function reducer(state = initialState,action){
    const {type, payload} = action;
    switch(type){
        case GET_EMAIL:
            return{...state, email: payload}
        default:
            return state;
    }
}