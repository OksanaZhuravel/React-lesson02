import React from "react";
import App from "./App/App";
import Header from "./Header/Header";
import ChatList from "./ChatList/ChatList";
import "./layout.css";

export default class Layout extends React.Component {

    static defaultProps = {
        chatId: 1,
    };

    render() {
        return (
        <>
            <Header chatId={this.props.chatId}/>
            <ChatList/>
            <App/>
            </>
        )
    }
};

