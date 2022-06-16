const initialState = {
    value: 0
}

export const reducer = (state = initialState, action = {}) => {
    // action.type action.payload

    switch (action.type) {
        case 'INCREMENTED':
            return ({ value: state.value + 1 });
        case 'DECREMENTED':
            return ({ value: state.value - 1 });

        default:
            return { ...state }

    }
}