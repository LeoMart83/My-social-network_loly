import userImg from './../../../../img/user.png';
import likesImg from './../../../../img/like.png';
import style from './Post.module.css';

const Post = (props) => {
    return (
        <div className={style.wrapper}>
            <div className={style.wrapperPost}>
                <img src={userImg} className={style.user} />
                <div className={style.postInfo}>
                    <div className={style.postUserName}>
                        {props.name}
                    </div>
                    <div className={style.postMessage}>
                        {props.message}
                    </div>
                </div>
            </div>
            <div className={style.postLikes}>
                <button><img src={likesImg} alt="" /></button>  
                <div>{props.likes}</div>
            </div>
        </div>
    )
}

export default Post;