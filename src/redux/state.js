let rerenderEntireTree = () =>{

}

let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'How are you?', likes: '5', name: 'Leo'},
            { id: 2, message: 'Hi, I`m Olly', likes: '7', name: 'Olly'}
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
}

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likes: 0,
        name: 'Dan'
    }

    state.profilePage.posts.push (newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) =>{
    rerenderEntireTree = observer;
}

export default state;