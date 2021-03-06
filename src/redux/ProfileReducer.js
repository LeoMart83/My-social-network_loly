let initialState = {
    posts: [
        { id: 1, message: 'How are you?', likes: '5', name: 'Leo' },
        { id: 2, message: 'Hi, I`m Olly', likes: '7', name: 'Olly' }
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD-POST': {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likes: 0,
                name: 'Dan'
            }
            let stateCopy = { ...state };
            stateCopy.posts = [...state.posts];
            stateCopy.posts.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case 'UPDATE-NEW-POST-TEXT': {
            let stateCopy = { ...state };
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return state;
    }
}

export const addPostActionCreator = () => ({ type: 'ADD-POST' })
export const updateNewPostTextActionCreator = (text) => ({ type: 'UPDATE-NEW-POST-TEXT', newText: text })

export default profileReducer;