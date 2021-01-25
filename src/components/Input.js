import React, { useState, useCallback } from 'react';
import {TextField } from '@material-ui/core';


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
        <form onSubmit={handleSubmit} >
            <TextField
                label="Введите " variant="outlined" for="war"
                input id="war" type='text' onChange={handleChange} value={value} />
            <TextField
                label variant="filled" for="name"
                input id="name" type='submit'  value="Ввод"/>
        </form>
    )
}