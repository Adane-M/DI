import { Link, useLocation } from "react-router-dom";

const Links = () => {
    const location = useLocation();
    if(location.pathname === '/shop'){
        throw new Error();
    } else {



        return (
            <nav>
                <Link to='/'>home</Link>
                <Link to='/profile'>profile</Link>
                <Link to='/shop'>shop</Link>

            </nav>
        )
    }
}
export default Links;