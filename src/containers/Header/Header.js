import React from "react";
import PropTypes from 'prop-types';
import "./header.css";
import  nameUser  from "../Profile/Profile";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
    static propTypes ={
        chatId: PropTypes.number,
        profileId: PropTypes.number,
    };
    static defaultProps = {
        chatId: 1,
        profileId: 2,
    };

    render() {
        return (
            <div className="header">
                <Link to="/profile/">profile</Link>
                <span >Чат { this.props.chatId }</span>
                {nameUser}
            </div>
        );
    }
}












