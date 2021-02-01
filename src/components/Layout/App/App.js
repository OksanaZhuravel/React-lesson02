import React, { useEffect, useState, useCallback } from "react";
import "./App.css";
import Message from "./Message";
import Input from "./Input";
import {Chat} from "@material-ui/icons";


export default function App() {
    const [messages, setMessages] = useState(
        [{ text: 'Привет!', author: 'guest' },
            { text: 'Как дела??', author: 'bot' },
            { text: 'Как дела???', author: 'guest' },
        ]
    );
    const [chats, setChats] = useState(
        [ {1: { title: 'чат 1', messageList: [1]}},
            {2: { title: 'чат 2', messageList: [2]}},
            {3: { title: 'чат 3', messageList: [3]}},

        ]
    )
const renderChat = useCallback((chats, i) => {
    return (
        <Chat chat = {chats} key={i}/>
    );
},[]);

 const renderMessage = useCallback((message, i) => {
        return (
            <Message massage = {message} key={i}/>
        );
    }, []);
    const handleAddChat = useCallback((title, messageList ) => {
        setChats((oldMessageList) => ([...oldMessageList, {title, messageList}]));
    }, []);


    const handleAddMessage = useCallback((text, author = 'guest') => {
        setMessages((oldMessages) => ([...oldMessages, {text, author}]));
    }, []);

    useEffect(() => {
        let timeout;
        if (messages[messages.length -1].author !== 'bot') {
          timeout = setTimeout(() => {
            handleAddMessage('Нормально, но я БОТ!!!', 'bot')
            }, 1500 );
        }

        return () => {
            clearTimeout(timeout);
        }
    }, [messages, handleAddMessage]);


    return (
        <>
            <div className="posts">{messages.map(renderMessage)}
            <div className="counter">
                <Input onAddMessage={handleAddMessage}/>
            </div>
                <div className="chat">{chats.map(renderChat)}</div>
            </div>
        </>
    );
}
