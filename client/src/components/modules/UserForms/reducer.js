export const LOGIN = "LOGIN";

const initialState = {
    token: "",
    username: "",
    id: "",
}

const userInfo = (state = initialState, action) => {
    debugger;
    switch(action.type){
        case LOGIN:
            return {
                ...state,
                token: action.user.token,
                username: action.user.username,
                id: action.user.id,
            }
        default:
            return state;
    }
}

export default userInfo;