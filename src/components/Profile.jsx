import contentImg from './../img/content-img.jpg';

const Profile = () => {
    return (
        <div className='content'>
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