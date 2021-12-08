import style from './ProfileInfo.module.css';
import contentImg from './../../../img/content-img.jpg';

const ProfileInfo = () => {
    return (
        <div>
            <img src={contentImg} />
            <div>Ava + discription</div>
        </div>
    )
}

export default ProfileInfo;