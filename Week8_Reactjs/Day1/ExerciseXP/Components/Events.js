import React from "react";

class Events extends React.Component {
    constructor() {
        super();
        this.state = {
            isToggleOn: true
        }
    }


    render() {
        const clickMe = (e) => {
            alert('i was clicked!');
        }
        const handleKeyPress = (e) => {
            let inputVal = e.target.value;
            if (e.which === 13 || e.key === 'Enter' || e.keyCode === 13) {
                alert(`The Enter key was pressed , your input is : ${inputVal}`);

            }
        }
        const onOff = () => {
            this.state.isToggleOn = !this.state.isToggleOn
            this.state.isToggleOn === true ? alert(`Exsercise 9 : 🆗 ON`) : alert(`Exsercise 9 : 🆘☠ OFF`);

        }

        return (
            <>
                <button type="" onClick={clickMe}> Click Me</button>
                <br></br>
                <input type="text" placeholder="Press the enter key" onKeyUp={handleKeyPress}></input>
                <br></br>
                <button type="" onClick={onOff}> on / off</button>

            </>
        )
    }
}

export default Events;