import userImg from './../../../../img/user.png';
import style from './Post.module.css';

const Post = (props) => {
    return (
        <div>
            <img src={userImg} className={style.user} />
            {props.message}
            <p>Likes 
                {props.likes}
            </p>
        </div>
    )
}

export default Post;