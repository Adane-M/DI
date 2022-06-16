
 const incrementNum = () => {
    return {
        type: 'INCREMENTED',
    }
}
 const decrementNum = () => {
    return {
        type: 'DECREMENTED',
    }
}

export {incrementNum, decrementNum};