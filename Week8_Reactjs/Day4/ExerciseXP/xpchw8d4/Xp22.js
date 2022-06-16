import Xpjson2 from './Xpjson2.json';

const Xp22 = () => {

    return (
        <>

            <h4>----example3--------</h4>
            {

                Xpjson2.Experiences.map((item, i) => {
                    return (
                        <div>
                            <div key={i+62}>
                                <h3>{item.companyName}</h3>
                                <img src={item.logo} alt={item.companyName}/>
                                {item && item.roles.map((item, i) => {
                                    return (
                                        <>
                                            <div key={i+243}>
                                                {/* <img src={} alt={item.title}/> */}
                                                <li key={i+259}>{item.title}</li>
                                                <li key={i+250}>{item.description}</li>
                                                <li key={i+320}>{item.startDate}</li>
                                                <li key={i+200}>{item.location}</li>
                                            </div>
                                        </>
                                    )
                                })
                                }
                            </div>

                        </div>
                    )
                })

            }
        </>
    )
}

export default Xp22;