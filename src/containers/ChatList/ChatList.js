import React from "react";
import {bindActionCreators} from "redux";
import connect from "react-redux/es/connect/connect";
import "./chatlist.css";
import {Link} from "react-router-dom";
import {ListItem, TextField} from "@material-ui/core";
import { addChat} from "../../actions/chatActions";

class ChatList extends React.Component {
    state = {
        input: '',
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };
    handleKeyUp = (e) => {
        if (e.keyCode === 13) {
            this.handleAddChat();
        }
    };
    handleAddChat = () => {
        if (this.state.input.length > 0) {
            this.props.addChat(this.state.input);
            this.setState({input: ''});
        }
      };
    render() {
        const { chats } = this.props;
        const chatElements = Object.keys(chats).map(chatId => (
            <Link key={chatId} to={`/chat/${chatId}`}>
                { chats[chatId].title }
            </Link>
        ));
        return (
        <div className="chat-list">
            {chatElements}
            <ListItem
                key="Add new chat"
                onClick={ this.handleAddChat }
                children= {<TextField
                    className="input"
                    key="textField"
                    name="input"
                    placeholder="Добавить новый чат"
                    onChange={ this.handleChange }
                    value={ this.state.input }
                    onKeyUp={ this.handleKeyUp }
                />}/>
                    <button className="button" onClick={ () => this.handleAddChat(this.state.input, 'me') }>Новый чат</button>
        </div>
    );
    }
}
const mapStateToProps = ({ chatReducer }) => ({
    chats: chatReducer.chats,
});

const mapDispatchToProps = dispatch => bindActionCreators({ addChat }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ChatList);











