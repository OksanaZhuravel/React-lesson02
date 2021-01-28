import React from "react";
import "./chatlist.css";
import {Link} from "react-router-dom";
import {ListItem} from "@material-ui/core";
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';

export default function ChatList () {
    return (
        <div className="chat-list">
            <Link to="/chat/1">
                <ListItem primaryText="Chat 1" leftIcon={<DeleteOutlinedIcon/>}>chat 1</ListItem>
            </Link>
            <Link to="/chat/2">
                <ListItem primaryText="Chat 2" leftIcon={<DeleteOutlinedIcon/>}>chat 2</ListItem>
            </Link>
            <Link to="/chat/3">
                <ListItem primaryText="Chat 3" leftIcon={<DeleteOutlinedIcon/>}>chat 3</ListItem>
            </Link>
        </div>
    )
};











