import React from "react";

 export const Calcres = (props) => {

    return (
        //display the res we recive from the api, after assigin f name sname and clicking the button to fetch the res
        <>
            <h4>return resoult</h4>
            <h5>for: {props.res.fname} and: {props.res.sname}</h5>
            <h5> percentage: {props.res.percentage}</h5>
            <h5>{props.res.result}</h5>
        </>
    )
}



