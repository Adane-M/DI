import React from "react";
import { connect } from "react-redux";
import { Link} from "react-router-dom";
const Blog = (props) => {
    const { postList } = props
    return (
        <>
        <h1>Hello</h1>
            {
                postList.map(post => {
                    return (
                        <div key={post.id}>
                            <img src='https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%2010/Day5/Mini%20Projects/Mini%20Project%201%20-%20Redux%20Blog/blog.png' alt='' />
                            <Link to={'/' + post.id}>
                                <h3>{post.title}</h3>
                            </Link>
                            <p>{post.body}</p>
                        </div>
                    )
                })
            }
        </>
    )
}
const mapStateToProps = (state) => {
    return {
        postList: state.posts,
    }
}
export default connect(mapStateToProps)(Blog);