import React from 'react';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import style from './Messages.module.css';


const Messages = (props) => {

    const state = props.messagesPage;

    let dialogsElements = state.dialogs.map(dialog => <Dialog key={dialog.id} name={dialog.name} id={dialog.id} />);
    let messagesElements = state.messages.map(message => <Message key={message.id} message={message.message} />)

    let newMessageText = state.newMessageText;

    let newMessageElement = React.createRef();

    let sendMessage = () => {
        let text = newMessageElement.current.value;
        props.sendMessage();
    }

    let newMessageChange = (event) => {
        let body = event.target.value;
        props.updateNewMessageText(body);
    }
    
    return (
        <div className={style.messages}>
            <div className={style.users}>
                {dialogsElements}
            </div>
            <div className={style.userMessages}>
                {messagesElements}
                <div className={style.sendMessage}>
                    <textarea ref={newMessageElement} onChange={newMessageChange} value={newMessageText}></textarea>
                    <button onClick={sendMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}

export default Messages;