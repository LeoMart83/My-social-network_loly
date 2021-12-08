import React from 'react';
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import style from './Messages.module.css';


const Messages = (props) => {

    let dialogsElements = props.state.dialogs.map(dialog => <Dialog name={dialog.name} id={dialog.id} />);
    let messagesElements = props.state.messages.map(message => <Message message={message.message} />)

    let newMessageElement = React.createRef();

    let addMessage = () => {
        let text = newMessageElement.current.value;
        console.log(text);
    }
    
    return (
        <div className={style.messages}>
            <div className={style.users}>
                {dialogsElements}
            </div>
            <div className={style.userMessages}>
                {messagesElements}
                <div className={style.sendMessage}>
                    <textarea ref={newMessageElement}></textarea>
                    <button onClick={addMessage}>Отправить</button>
                </div>
            </div>
        </div>
    )
}

export default Messages;