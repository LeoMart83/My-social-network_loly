import userImg from './../../../../img/user.png';
import Likes from './Likes';
import style from './Post.module.css';

const Post = (props) => {
    return (
        <div>
            <img src={userImg} className={style.user} />
            {props.message}
            <Likes number='5' />
        </div>
    )
}

export default Post;