import MyPosts from './MyPosts/MyPosts';
import style from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div className={style.content}>
            <ProfileInfo />
            <MyPosts posts={props.state.posts} newPostText={props.state.newPostText} dispatch={props.dispatch} />
        </div>
    )
}

export default Profile;