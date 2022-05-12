
const Form = (props) => {




    return (
        <>
            <form onSubmit={props.handleSubmit}>
                Message: <input type="text" name="msg" /><br />
                <button type="submit">Submit </button>
            </form>
        </>
    )

}

export default Form;