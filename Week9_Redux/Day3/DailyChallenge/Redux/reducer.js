const initialState = {
    // count: 0

    // form: {
    //     accountNum: '',
    //     FSC: '',
    //     name: '',
    //     amount: '',
    // },
    // transactionList: [],
    robots: [],
    searchRobot: '',
    isFetchin:true,
    err: ' '

}



const reducer = (state = initialState, action = {}) => {
    switch (action.type) {

        case 'DISPLAY_ROBOTS':
            return {
                ...state, robots: action.payload
            }
        case 'FILTER_ROBOT':
            return {
                ...state, searchRobot: action.payload
            };
        case 'BEGIN_FETCHING_ROBOT':
            return {
...state , isFetchin:true
            };
        case 'FETCH_SUCCESS':
            return {
...state , robots:action.payload , isFetching:false
            };
        case 'FETCH_FAILURE':
            return {
...state , err: action.payload , isFetchin:false
            }

        // case 'DECREMENTED':
        //     return {
        //         ...state, count: state.count - 1
        //     };
        // case 'INCREMENTED':
        //     return {
        //         ...state, count: state.count + 1
        //     };

        // case 'TIME_OUT_INCRAEMENT':
        // setTimeout(() => {
        //     return {
        //         ...state, count: action.payload
        //     }
        // }, 1000)

        // case 'ACCOUNTNUM':
        //     return { ...state, accountNum: action.payload };
        // case 'FSC':
        //     return { ...state, FSC: action.payload };
        // case 'NAME':
        //     return { ...state, name: action.payload };
        // case 'AMOUNT':
        //     return { ...state, amount: action.payload };

        // case 'LIST':
        //     let arr = [...state.transactionList];
        //     arr.push(action.payload);
        //     return {
        //         ...state, transactionList: arr
        //     };
        // case 'DELETE':
        //     let arr2 = [...state.transactionList];
        //     arr2.splice(action.payload, 1)
        //     return {
        //         ...state, transactionList: arr2
        //     };
        // case 'EDIT':
        //     let arrEdit = [...state.transactionList];
        //     let update =
        //     {
        //         accountNum: arrEdit[action.payload].accountNum = prompt(` accountNum: insert your changes`),
        //         FSC: arrEdit[action.payload].FSC = prompt(`FSC: insert your changes`),
        //         name: arrEdit[action.payload].name = prompt(`name: insert your changes`),
        //         amount: arrEdit[action.payload].amount = prompt(`amount: insert your changes`),
        //     }
        //     arrEdit.push(update)
        //     arrEdit.splice(action.payload, 1);

        //     return {
        //         ...state, transactionList: arrEdit
        //     };
        default:
            return { ...state }
    }
}
export { reducer }