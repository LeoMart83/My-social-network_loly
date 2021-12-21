import React from 'react';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/MessagesReducer';
import StoreContext from '../../StoreContext';
import Messages from './Messages';


const MessagesContainer = (props) => {

    return <StoreContext.Consumer>
        {store => {
            const state = store.getState().messagesPage;
            const onSendMessageClick = () => {
                store.dispatch(sendMessageActionCreator());
            }
            const newMessageChange = (body) => {
                store.dispatch(updateNewMessageTextActionCreator(body));
            }

            return <Messages updateNewMessageText={newMessageChange} sendMessage={onSendMessageClick} messagesPage={state} />
        }
    }
    </StoreContext.Consumer>
}

export default MessagesContainer;