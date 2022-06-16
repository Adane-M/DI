import React from "react";
const Scroll = (props) => {
    let num = Math.floor(Math.random() * 10)
    let text = getLoremIpsum(num)
    function getLoremIpsum(wordCount) {
        var sentence = '';

        for (var i = 0; i < wordCount; i++) {
            sentence += getWord() + ' ';
        }
        return sentence;
    }

    function getWord() {
        var charsStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        var res = '';

        for (var i = 0; i < getRandomInt(3, 6); i++) {
            var idx = getRandomInt(0, charsStr.length);
            var letter = charsStr.charAt(idx);
            res += letter;
        }

        return res;
    }



    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min);
    }
console.log(React.Children.forEach);
    return (
        <div style={{overflow:'scroll', height:'100vh' , width:'100wh'}}>
            {props.children}
        <hr/>
            <div className="split-cards">
                <p>{text}</p>
                <h1>{num}</h1>
            </div>
            <hr/>
           
        <hr/>
            <div className="split-cards">
                <p>{text}</p>
                <h1>{num}</h1>
            </div>
            <hr/>
           
        <hr/>
            <div className="split-cards">
                <p>{text}</p>
                <h1>{num}</h1>
            </div>
            <hr/>
           
        <hr/>
            <div className="split-cards">
                <p>{text}</p>
                <h1>{num}</h1>
            </div>
            <hr/>
           
        <hr/>
            <div className="split-cards">
                <p>{text}</p>
                <h1>{num}</h1>
            </div>
            <hr/>
           
        <hr/>
            <div className="split-cards">
                <p>{text}</p>
                <h1>{num}</h1>
            </div>
            <hr/>
           
        <hr/>
            <div className="split-cards">
                <p>{text}</p>
                <h1>{num}</h1>
            </div>
            <hr/>
           
        <hr/>
            <div className="split-cards">
                <p>{text}</p>
                <h1>{num}</h1>
            </div>
            <hr/>
           
        <hr/>
            <div className="split-cards">
                <p>{text}</p>
                <h1>{num}</h1>
            </div>
            <hr/>
           
        </div>
    )
}
export default Scroll;