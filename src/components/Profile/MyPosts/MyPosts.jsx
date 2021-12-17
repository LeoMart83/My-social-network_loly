import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/ProfileReducer';
import style from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

    let postsElements = props.posts.map( post => <Post message={post.message} likes={post.likes} name={post.name} /> );

    let newPostElement = React.createRef();

    let addPost = () => {
        props.dispatch(addPostActionCreator());
    }

    let onPostChange = () =>{
        let text = newPostElement.current.value;
        props.dispatch(updateNewPostTextActionCreator(text));
    }

    return (
        <div className={style.wrapper}>
            <div>
                <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} /><br />
                <button onClick={ addPost }>Add post</button>
            </div>
            <div className={style.wrapperPost}>
                {postsElements}
            </div>
            
        </div>
    )
}

export default MyPosts;