import React from 'react';
import Quotes from './Quotes'
// const randomcolor = require ('randomcolor');

function getRandomColor() {
    let randomColorg = Math.floor(Math.random() * 16777215).toString(16);
    console.log('gadyyyst');
    return randomColorg;
}

class Quotedisplay extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            quote: '',
            author: '',
            style: { backgroundColor: '' }
        }
    }

    steQoute = () => {
        let rndm = Math.floor(Math.random() * Quotes.length - 1);
        this.setState({ author: Quotes[rndm].author });
        this.setState({ quote: Quotes[rndm].quote });
        this.setState({ style: { backgroundColor: `#${getRandomColor()}`} });
        console.log(this.state.style)
    }


    render() {
        const { quote, author, style } = this.state;
        return (

            <div className='wraper' style={style}>
                <div>
                    <blockquote >Quote :{quote}</blockquote>
                    <p> Author: {author}</p>
                    <button type="" onClick={this.steQoute}>QOUTE</button>
                </div>

            </div>

        )
    }
}

export default Quotedisplay;