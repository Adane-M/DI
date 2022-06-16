const handleChangeFromRedux = (val) => {
    return {
        type: 'CHANGE_PROP_ONE',
        payload: val
    }
};
 const handleChangeFromRedux2 = (val) => {
    return {
        type: 'CHANGE_PROP_TWO',
        payload: val
    }
};
 const handleChangeFromRedux3 = () => {
    return {
        type: 'CHANGE_TO_PROP_TWO',
    }
};
 const handleChangeFromRedux4 = () => {
    return {
        type: 'INCREMENTED',
    }
}

export {handleChangeFromRedux,handleChangeFromRedux2, handleChangeFromRedux3, handleChangeFromRedux4};