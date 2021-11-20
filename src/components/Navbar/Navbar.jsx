import style from './Navbar.module.css';


const Navbar = () => {
    return (
        <div className={style.nav}>
            <ul>
                <li><a>Profile</a></li>
                <li><a>Messages</a></li>
                <li><a>Music</a></li>
                <li><a>Settings</a></li>
                <li><a>News</a></li>
            </ul>
        </div>
    )
}

export default Navbar;