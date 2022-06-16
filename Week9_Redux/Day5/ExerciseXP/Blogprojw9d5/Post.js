import React from "react";
import { useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { deletePost } from '../../Redux/action';
import { Link } from "react-router-dom";
import Blog from "./Blog";
const Post = (props) => {
    const { postList, delcurrPost } = props
    const loc = useLocation();
    const index = loc.pathname.split('').splice(-1, 1);
    const [id] = index
    const post = postList[id - 1]
    const delPost = (n) => {
        let newArr = postList.splice(n, 1)
        delcurrPost(newArr)
    }
    return (
        <>
            <div key={post.id}>
                <img src='https://raw.githubusercontent.com/devtlv/studentsGitHub/master/JS/Week%2010/Day5/Mini%20Projects/Mini%20Project%201%20-%20Redux%20Blog/blog.png' alt='' />
                <h3>{post.title}</h3>
                <p>{post.body}</p>
                <button onClick={delPost(post.id - 1)}> <Link to='/'>DELETE</Link></button>
            </div>

        </>
    )
}


const mapStateToProps = (state) => {
    return {
        postList: state.posts,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        delcurrPost: (arr) => dispatch(deletePost(arr))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);