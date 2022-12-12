const initState = {
    users: [
        {id: 1, Name: 'Michael Lawson'},
        {id: 2, Name: ' Lindsay Ferguson'},
        {id: 3, Name: 'Tobias Funke'}
    ]

}
const rootReducer = (state = initState, action) => {
    switch(action.type){
        case 'DELETE_USERS': console.log(">>> run into delete user:", action)
            let users = state.users;
            users = users.filter(item => item.id !== action.payload.id)
        return {...state, users}
        
        //
        default:
            return state;
     }

}

export default rootReducer;