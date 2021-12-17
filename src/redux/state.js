import messagesReducer from "./MessagesReducer";
import profileReducer from "./ProfileReducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                { id: 1, message: 'How are you?', likes: '5', name: 'Leo' },
                { id: 2, message: 'Hi, I`m Olly', likes: '7', name: 'Olly' }
            ],
            newPostText: ''
        },
        messagesPage: {
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

    },
    _callSubscriber() {

    },

    getState() {
        return this._state
    },

    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatchEvent(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);

        this._callSubscriber(this._state);
    }
}




export default store;