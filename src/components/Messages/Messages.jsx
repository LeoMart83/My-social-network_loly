import React from 'react';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/MessagesReducer';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import style from './Messages.module.css';


const Messages = (props) => {
    console.log(props.state);

    let dialogsElements = props.state.dialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id} />);
    let messagesElements = props.state.messages.map(message => <Message message={message.message} />)

    let newMessageText = props.state.newMessageText;

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        let text = newMessageElement.current.value;
        props.dispatch (sendMessageActionCreator());
        console.log(text);
    }

    let newMessageChange = (event) => {
        let body = event.target.value;
        props.dispatch (updateNewMessageTextActionCreator(body));
    }
    
    return (
        <div className={style.messages}>
            <div className={style.users}>
                {dialogsElements}
            </div>
            <div className={style.userMessages}>
                {messagesElements}
                <div className={style.sendMessage}>
                    <textarea ref={newMessageElement} onChange={newMessageChange} value={props.state.newMessageText}></textarea>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Messages;