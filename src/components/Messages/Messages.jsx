import { NavLink } from 'react-router-dom';
import style from './Messages.module.css'

const Dialog = (props) =>{
    const path = '/messages/'+ props.id;
    return(
        <div className={style.user}>
            <span><NavLink to={path}>{props.name}</NavLink></span>
        </div>
    )
}

const Messages = () =>{
    return (
        <div className={style.messages}>
            <div className={style.users}>
                <Dialog name='Leo' id='1' />
                <Dialog name='Maria' id='2' />
                <Dialog name='Dan' id='3' />
            </div>
            <div className={style.userMessages}>
                <span>hello</span>
                <span>how r u?</span>
                <span>im fine</span>
            </div>
        </div>
    )
}

export default Messages;