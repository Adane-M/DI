import Child from "./Child";

const Parnet = (props) => {
    if (props.username === "admin") {

        return (
            <>
                <p>PARENT</p>
                <Child/>
            </>
        )
    }

    return props.children;
}
export default Parnet;