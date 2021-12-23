import { connect } from 'react-redux';
import { sendMessageActionCreator, updateNewMessageTextActionCreator } from '../../redux/MessagesReducer';
import Messages from './Messages';

const mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}
const mapDispatchToProops = (dispatch) => {
    return {
        updateNewMessageText: (body) => dispatch(updateNewMessageTextActionCreator(body)),
        sendMessage: () => dispatch(sendMessageActionCreator())
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProops)(Messages);

export default MessagesContainer; 