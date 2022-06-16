import React from 'react';
import superheroe from './superhero.json';
import './Superheroes.css';


class Superheroes extends React.Component {
    constructor() {
        super();
        this.state = {
            score: 0,
            topScore: 0,
            heroArr: []
        }
    }
    updateScore = (n) => {
        let { topScore, score, heroArr } = this.state
        let hero = superheroe.superheroes;
        ////shuffle the cards
        hero.sort(() => 0.5 - Math.random());
       
        console.log(n);
        if (heroArr.includes(n) === true) {
            this.setState({ score: score = 0 });
            this.setState({ heroArr: heroArr = [] });
            // heroArr = [];

        } else {
            heroArr.push(n);
            hero[n].clicked = true;
            this.setState({ score: score += 1 });
                        
        }
        if (topScore < score) {
            this.setState({ topScore: score });
        }
    }

    render() {
        const { topScore, score } = this.state
        return (
            <>
                <div className='header'>
                    <h1>MINI-PROJ Super-Heroes memory game</h1>
                    <p>instructions : Get points by clicking on an image but don't click on any more than once!</p>
                    <h3>Your  score:  {score} _________  Top score :  {topScore}</h3>
                </div>
                <div className='wraper'>


                    {
                        superheroe.superheroes.map(item => {
                            return (
                                <div key={item.id} onClick={() => this.updateScore(item.id)}>
                                    <img src={item.image} alt={item.name} />
                                    <p>{item.name}</p>
                                    <p>{item.occupation}</p>
                                </div>
                            )
                        })

                    }

                </div>
            </>
        )
    }
}

export default Superheroes;
