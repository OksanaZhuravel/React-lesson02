import React from "react";
import  PropTypes from 'prop-types';
import "./App.css";
import {bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import Message from '../../components/Message';
import {TextField} from "@material-ui/core";
import CircularProgress from '@material-ui/core/CircularProgress';
import { sendMessage, loadMessages } from '../../actions/messageActions';
import { loadChats } from '../../actions/chatActions';


class App extends React.Component {
    static propTypes ={
        chatId: PropTypes.number.isRequired,
        messages: PropTypes.object.isRequired,
        chats: PropTypes.object.isRequired,
        sendMessage: PropTypes.func.isRequired,
        isLoading: PropTypes.bool.isRequired
    };
    state = {
        input: '',
    };

    handleSendMessage = (message, sender) => {
       if (this.state.input.length > 0 || sender === 'bot') {
            this.props.sendMassage(message, sender);
       }
       if (sender === 'me') {
            this.setState({ input: '' })
        }
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleKeyUp = (e) => {
        if (e.keyCode === 13) {
            this.handleSendMessage(this.state.input, 'me')
        }
    };
    componentDidMount() {
        this.props.loadMessages();
    };

    render() {
        if (this.props.isLoading) {
            return <CircularProgress />
        }
        const { chatId, messages, chats } = this.props;
        const messageElements = chats[chatId].messageList.map((messageId) => (
            <Message
                key={ messageId }
                text={ messages[messageId].text }
                sender={ messages[messageId].sender }
            />
            )
        );

        return [
            <div key='messageElements' className="message-field">
                { messageElements }
            </div>,
            <div key='textInput'>
                <TextField className="input" name="input" placeholder="Введите сообщение" onChange={ this.handleChange } value={ this.state.input } onKeyUp={ this.handleKeyUp }
                />
                <button className="button" onClick={ () => this.handleSendMessage(this.state.input, 'me') }>Ввод</button>
            </div>
        ]
    }
}
const mapStateToProps = ({ chatReducer, messageReducer }) => ({
    chats: chatReducer.chats,
    messages: messageReducer.messages,
    isLoading: messageReducer.isLoading
});

const mapDispatchToProps = dispatch => bindActionCreators({sendMessage, loadMessages, loadChats }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(App);

