import { NavLink } from 'react-router-dom';
import style from './Navbar.module.css';


const Navbar = () => {
    return (
        <div className={style.nav}>
            <ul>
                <li><NavLink className={(navData) => navData.isActive ? style.active : ''} to='/profile'>Profile</NavLink></li>
                <li><NavLink className={(navData) => navData.isActive ? style.active : ''} to='/messages'>Messages</NavLink></li>
                <li><NavLink className={(navData) => navData.isActive ? style.active : ''} to='/friends'>Friends</NavLink></li>
                <li><NavLink className={(navData) => navData.isActive ? style.active : ''} to='/music'>Music</NavLink></li>
                <li><NavLink className={(navData) => navData.isActive ? style.active : ''} to='/settings'>Settings</NavLink></li>
            </ul>
        </div>
    )
}

export default Navbar;