import React from "react";
import { bindActionCreators } from "redux";
import connect from "react-redux/es/connect/connect";
import App from "../App/App";
import Header from "../Header/Header";
import ChatList from "../ChatList/ChatList";
import { sendMessage} from "../../actions/messageActions";
import "./layout.css";

 class Layout extends React.Component {
    static defaultProps = {
        chatId: 1,
        profileId: 1,
    };
    state = {
        chats: {
            1: {title: 'Чат 1', messageList: [1]},
            2: {title: 'Чат 2', messageList: [2]},
            3: {title: 'Чат 3', messageList: [3]},
        },
        messages: {
            1: {text: "Привет!? ", sender: 'bot'},
            2: {text: "Здравствуйте!", sender: 'bot'},
            3: {text: "Ты добавил, новый чат", sender: 'bot'},
        },
     };

    componentDidUpdate(prevProps, prevState) {
        const {messages} = this.state;
        if (Object.keys(prevState.messages).length < Object.keys(messages).length &&
            Object.values(messages)[Object.values(messages).length - 1].sender === 'me') {
            setTimeout(() =>
                this.sendMessage('Не приставай ко мне, я робот!', 'bot'), 1200);
        }
    }

    sendMessage = (message, sender) => {
        const {messages} = this.state;
        const {chatId} = this.props;
        const messageId = Object.keys(messages).length + 1;
        this.setState({
            messages: {...messages,[messageId]: {text: message, sender: sender}},
            });
        this.props.sendMessage(messageId, message, sender, chatId);
        };

/*    addChat = (title) => {
        const { chats } = this.state;
        const chatId = Object.keys(chats).length + 1;
        this.setState({
            chats: {...chats, [chatId]:{title: title, messageList:[]}},
        });
    };*/

    render() {
        return (
            <>
                <Header chatId={this.props.chatId} profileId={this.props.profileId}/>
                <ChatList chats={this.state.chats} addChat={this.addChat}/>
                <App chatId={this.props.chatId} messages={this.state.messages} sendMassage={this.sendMessage}/>
            </>
        );
    }
}
const mapStateToProps = ({}) => ({});
const mapDispatchToProps = dispatch => bindActionCreators({ sendMessage }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Layout);


