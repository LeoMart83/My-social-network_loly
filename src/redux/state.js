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
            ]
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
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likes: 0,
                name: 'Dan'
            }
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}

export const addPostActionCreator = () => ({type: 'ADD-POST'}) 

export const updateNewPostTextActionCreator = (text) => ({type: 'UPDATE-NEW-POST-TEXT', newText: text})



export default store;