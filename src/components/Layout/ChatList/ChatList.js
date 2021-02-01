import React from "react";
import "./chatlist.css";
import {Link} from "react-router-dom";

export default function ChatList () {
    return (
        <div className="chat-list">
            <Link to="/chat/1">chat 1</Link>
            <Link to="/chat/2">chat 2</Link>
            <Link to="/chat/3">chat 3</Link>
        </div>
    )
};











