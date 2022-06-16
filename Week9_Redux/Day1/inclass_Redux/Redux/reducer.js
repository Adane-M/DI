const initialState = {
    prop_one: 2, 
    prop_two: 4,
    text:'this is my text',
    value:0 
   }

   export const reducer = (state = initialState, action={})=>{
    // action.type action.payload
    
    switch (action.type) {
        case 'CHANGE_PROP_ONE':
            return({...state, prop_one: action.payload});
        case 'CHANGE_PROP_TWO':
            console.log({prop_two: action.payload});
            return({...state, prop_two: action.payload});
        case 'CHANGE_TO_PROP_TWO':
            return({...state, text: state.prop_two});
        case 'INCREMENTED':
            return({value: state.value + 1});
            // return(console.log('hiii'));
    
        default:
            return{...state }
            
    }
   }