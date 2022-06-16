import React from "react";
import About from './About';
import Contact from './Contact';
import Blog from './Blog';
import Post from './Post';
import {
    Routes,
    BrowserRouter,
    Route,
    Link,
} from "react-router-dom";

class Home extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <div className='home'>
                        <img src='https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%2010/Day5/Mini%20Projects/Mini%20Project%201%20-%20Redux%20Blog/blog.png' alt='' />
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">contact</Link></li>
                    </ul>
                </div>
                <div className='home_body'>
                    <Routes>
                        <Route exact path="/" element={<Blog />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route exact path="/:post" element={<Post/>} />
                    </Routes>
                </div>
            </BrowserRouter>
        )
    }
}


export default Home;