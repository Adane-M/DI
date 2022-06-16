import React from "react";

class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            num: 0
        }
    }


    add = () => {
        // let Num = this.state;
        // Num.num++
        // console.log('hiii1',Num.num);
        // this.setState({Num: Num});
        //opt1
        this.setState({ num: this.state.num + 1 })
    }
    subtract = () => {
        //opt2
        let Num = this.state;
        Num.num--
        console.log('hiii1', Num.num);
        this.setState({ Num: Num });
        ////this.setState({num:this.state.num-1})
    }

    render() {
        return (
            <>

                <button type="" onClick={this.add}>➕</button>
                {this.state.num}
                <button type="" onClick={this.subtract}>➖</button>
            </>

        )
    }

}

export default Counter;