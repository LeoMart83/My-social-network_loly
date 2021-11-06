import Logo from "./../img/logo.png";
import style from './Header.module.css';

const Header = () =>{
    return (
        <header className={style.header}>
            <img src={Logo} />
        </header>
    )
}

export default Header;