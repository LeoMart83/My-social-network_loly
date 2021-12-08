import { NavLink } from 'react-router-dom';
import style from './../Messages.module.css'

const Dialog = (props) => {
    let path = '/messages/' + props.id;
    return (
        <div className={style.user}>
            <span><NavLink to={path}>{props.name}</NavLink></span>
        </div>
    )
}



export default Dialog;