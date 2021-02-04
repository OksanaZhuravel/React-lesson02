import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

export default class Header extends React.Component {

    static defaultProps = {
        chatId: 1,
        profileId: 1,
    };

    render() {
        return (
            <div className="header">
                <Link to="/profile/">profile</Link>
                <span >Чат { this.props.chatId }</span>
                <span>profile {this.props.profileId}</span>
            </div>
        );
    }
}












