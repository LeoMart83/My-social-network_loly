let initialState = {
    dialogs: [
        { id: 1, name: 'Leo' },
        { id: 2, name: 'Maria' },
        { id: 3, name: 'Dan' }
    ],
    messages: [
        { id: 1, message: 'hello' },
        { id: 2, message: 'how r u?' },
        { id: 3, message: 'im fine' }
    ],
    newMessageText: ''
}

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'UPDATE-NEW-MESSAGE-TEXT':
            state.newMessageText = action.newMessageText;
            return state;
        case 'SEND-MESSAGE':
            let body = state.newMessageText;
            state.newMessageText = '';
            state.messages.push({ id: 4, message: body });
            return state;
        default:
            return state;    
    }
}

export const sendMessageActionCreator = () => ({ type: 'SEND-MESSAGE' })
export const updateNewMessageTextActionCreator = (body) => ({ type: 'UPDATE-NEW-MESSAGE-TEXT', newMessageText: body })

export default messagesReducer;