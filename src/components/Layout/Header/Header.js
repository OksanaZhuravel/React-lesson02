import React from "react";
import "./header.css";
import Profile from "../Profile/Profile";
import { Link } from "react-router-dom";

export default class Header extends React.Component {

    static defaultProps = {
        chatId: 1,
        profileId: 2,
    };

    render() {
        return (
            <div className="header">
                <Link to="/profile/">
                    <span><Profile/></span>
                </Link>
                <span >Чат { this.props.chatId }</span>
            </div>
        )
    }
}












