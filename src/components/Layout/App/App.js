import React, { useEffect, useState, useCallback } from "react";
import "./App.css";
import Message from "./Message";
import Input from "./Input";


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
            <div className="posts">{messages.map(renderMessage)}
            <div className="counter">
                <Input onAddMessage={handleAddMessage}/>
            </div>
            </div>
        </>
    );
}
