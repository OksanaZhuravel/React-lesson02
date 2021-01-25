import React, { useEffect, useState, useCallback } from "react";
import "./App.css";
import Message from "./message";
import Input from "./input";
import ChatList from "./ChatList";
import Header from "./Header";

export default function App(callback, deps) {
    const [messages, setMessages] = useState(
        [{ text: 'Привет!', author: 'guest' },
            { text: 'Как дела?', author: 'guest' },
            { text: 'Как дела??', author: 'bot' },
            { text: 'Как дела???', author: 'guest' },
        ]
    );



    const renderMessage = useCallback((message, i) => {
        return (
            <Message massage = {message} key={i}/>
        );
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
            <Header />
            <div className="list">
                <ChatList />
            </div>
            <div className="layout">
                <div className="message-field">
                    {messages.map(renderMessage)}
                </div>

                <div>
                    <Input onAddMessage={handleAddMessage}/>
                </div>
            </div>
        </>


);
}
