import style from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = () => {
    return (
        <div>
            <Post message='How are you?' likes=' 5' />
            <Post message='Hi, I`m Olly' likes=' 7' />
        </div>
    )
}

export default MyPosts;