import React, { useEffect, useState, useCallback } from "react";
import "./App.css";
import Message from "./message";
import Input from "./input";


export default function App(callback, deps) {
    const [messages, setMessages] = useState(
        [{ text: 'Привет!', author: 'guest' },
            { text: 'Как дела?', author: 'guest' },
            { text: 'Как дела??', author: 'guest' },
            { text: 'Как дела???', author: 'guest' },
        ]
    );

    const renderMessage = useCallback((message, i) => {
        return (
            <Message massage = {message} key={i}/>
        );
    }, []);

    const handleAddMassage = useCallback((text, author = 'guest') => {
        setMessages((oldMessages) => ([...oldMessages, {text, author}]));
    }, []);

    useEffect(() => {
        let timeout;
        if (messages[messages.length -1].author !== 'bot') {
          timeout = setTimeout(() => {
            handleAddMassage('Нормально, но я БОТ!!!', 'bot')
            }, 1500 );
        }
        return () => {
            clearTimeout(timeout);
        }
    }, [messages, handleAddMassage]);

    return (
        <>
            {messages.map(renderMessage)}
            <div className="counter">
            <Input onAddMessage={handleAddMassage}/>
        </div>
        </>
    );
}
