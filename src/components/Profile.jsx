import contentImg from './../img/content-img.jpg';
import style from './Profile.module.css';

const Profile = () => {
    return (
        <div className={style.content}>
            <img src={contentImg} />
            <div>Ava + discription</div>
            <div>My post</div>
            <div>New post</div>
            <div>Post 1</div>
            <div>Post 2</div>
        </div>
    )
}

export default Profile;