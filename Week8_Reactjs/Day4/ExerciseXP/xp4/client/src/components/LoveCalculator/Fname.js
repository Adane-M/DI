export const Fname =(props)=>{

    return (
        //the first name we need for the fetch link
       <p>First name : <input type='text' name='fname' onChange={props.handleChange}/></p>
    )
}