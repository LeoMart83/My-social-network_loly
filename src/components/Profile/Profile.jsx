import contentImg from './../../img/content-img.jpg';
import MyPosts from './MyPosts/MyPosts';
import style from './Profile.module.css';

const Profile = () => {
    return (
        <div className={style.content}>
            <img src={contentImg} />
            <div>Ava + discription</div>
            <div>My post</div>
            <div>New post</div>
            <MyPosts />
        </div>
    )
}

export default Profile;