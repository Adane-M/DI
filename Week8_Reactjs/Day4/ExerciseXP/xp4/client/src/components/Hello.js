import { connect } from "react-redux";

const Hello = (props) => {
    return (
        <>
            
            <p>propety_one from app.js  send it with props.--{props.prop_app} </p>
            <p> propety_one from reducer   connect this Hello componnent to store --{props.prop_store}.</p>
        </>
    )
}
const mapStatetoprop = (state) => {
    return {
        prop_store: state.prop_one,
        my_text: state.text
    }

}


export default connect(mapStatetoprop)(Hello);