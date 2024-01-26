export default (state, action) => {
    //defining logic with use of switch statement
    switch (action.type) {
        case 'DELETE_TRANSACTION':
            return {
                ...state,
                transaction:state.transaction.filter(transaction=>transaction.id!==action.payload)
            }
        case 'ADD_TRANSACTION':
            return {
                ...state,
                transaction:[action.payload,...state.transaction]
            }
        default:
            return state;
    }
}