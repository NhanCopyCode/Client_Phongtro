const initState = {
    isLoggedIn: false,
    token: null,
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'login':
            
            break;
    
        default:
            return state;
    }
}


export default authReducer;