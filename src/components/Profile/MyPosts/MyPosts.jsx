import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            <Post message='How are you?' />
            <Post message='Hi, I`m Olly' />
        </div>
    )
}

export default MyPosts;