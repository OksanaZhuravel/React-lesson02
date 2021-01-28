import React, { useState, useCallback } from 'react';

export default function Input({ onAddMessage }){
    const [value, setValue] = useState('');
    const handleChange = useCallback((e) => {
        setValue(e.target.value);
    }, []);


    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        onAddMessage (value);
        setValue(' ');
    }, [onAddMessage, value]);
    return (
        <form onSubmit={handleSubmit}>
            <input className="input" placeholder="Ввведите свое сообщение" type="text" onChange={handleChange} value={value} />
            <button className="button">Ввод</button>
        </form>
    )
}