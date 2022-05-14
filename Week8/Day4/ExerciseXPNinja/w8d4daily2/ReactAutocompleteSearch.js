import React from "react";
import Countries from "./Countries";
class ReactAutocompleteSearch extends React.Component {
    constructor() {
        super();
        this.state = {
            suggestions: [],

        }
    }
    handlechange = (e) => {
        let value = e.target.value;
        if (value.length > 0) {
            let filtercountries = Countries.filter(country => country.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
            this.setState({ suggestions: filtercountries });
            return filtercountries;
        } else {

            this.setState({ suggestions: [] });
        }
    }
    render() {
        const { suggestions } = this.state;
        return (
            <>

                Find Countries:   <input name="countries" onChange={this.handlechange} />
                <ul style={{overflowY:'scroll'  ,height:'40vh'}}>
                    {
                        suggestions.map((item, i) => {
                            return (

                                <li key={i} style={{backgroundColor:`lightblue`}}>{item}</li>
                            )
                        })}
                </ul>
                <h5>suggestions {suggestions.length}</h5>
            </>
        )
    }


}


export default ReactAutocompleteSearch;