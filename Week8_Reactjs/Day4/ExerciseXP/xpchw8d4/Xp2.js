import React from "react";
import Xpjson from './components/Xpjson.json';
import Xpjson2 from './components/Xpjson2.json';
import Xp22 from './components/Xp22'

let     user = {
    key1: 'myusername',
    email: 'mymail@gmail.com',
    name: 'Isaac',
    lastname: 'Doe',
    age: 27
};

class Xp2 extends React.Component {
constructor(){
    super();
    this.state ={
    }
}

fetchUrl = () => {
    fetch('https://webhook.site/cc5e04b0-81c4-4dc9-926e-60f2b15b5613', {
        method: 'POST',
        headers: {
            'content_type': 'application/json'
        },
        body: JSON.parse(user)
    }
    )
        .then(res => res.json())
        .then((data) => {
            console.log(data);
        })
        .catch(err => console.log('fetch&log error', err))
}

render() {
    return (

        <>
            <button onClick={this.fetchUrl}>FETCH&LOG</button>
            <h3>hi this is a title</h3>
            {
                Xpjson.map((item) => {
                    return (
                        <div>
                            <div key={item.id}>
                                <h1>{item.title}</h1>
                            </div>
                            <div>
                                <h6>{item.content}</h6>

                            </div>
                        </div>
                    )
                })
            }

            <h4>----example1--------</h4>
            {

                Xpjson2 && Xpjson2.SocialMedias.map((item, i) => {
                    return (
                        <div>
                            <li key={i + 16}>{item}</li>
                        </div>
                    )
                })

            }

            <>

                <h4>----example2--------</h4>
                {

                    Xpjson2.Skills.map((item, i) => {
                        return (
                            <div>

                                <h3 key={i + 12}>{item.Area}</h3>
                                {item.SkillSet.map((item, i) => {
                                    return (
                                        <>
                                            <li key={i + 2}>{item.Name}</li>
                                        </>
                                    )
                                })
                                }

                            </div>
                        )
                    })

                }
            </>
            <Xp22 />


        </>

    )
}
}

export default Xp2;