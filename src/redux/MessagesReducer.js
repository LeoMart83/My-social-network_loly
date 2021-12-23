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
        case 'UPDATE-NEW-MESSAGE-TEXT': {
            let stateCopy = {...state};
            stateCopy.newMessageText = action.newMessageText;
            return stateCopy;
        }
        case 'SEND-MESSAGE':{
            let stateCopy = {...state};
            let body = stateCopy.newMessageText;
            stateCopy.newMessageText = '';
            stateCopy.messages = [...state.messages];
            stateCopy.messages.push({ id: 4, message: body });
            return stateCopy;
        }
        default:
            return state;    
    }
}

export const sendMessageActionCreator = () => ({ type: 'SEND-MESSAGE' })
export const updateNewMessageTextActionCreator = (body) => ({ type: 'UPDATE-NEW-MESSAGE-TEXT', newMessageText: body })

export default messagesReducer;