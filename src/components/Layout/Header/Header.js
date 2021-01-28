import React from "react";
import "./header.css";

export default class Header extends React.Component {

    static defaultProps = {
        chatId: 1,
    };

    render() {
        return (
            <div className="header">
                <span style={ { fontSize: '20px' } }>Чат { this.props.chatId }</span>
            </div>
        )
    }
}












