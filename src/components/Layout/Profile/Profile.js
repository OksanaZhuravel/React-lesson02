import React from 'react';
import './profile.css'

export default class Profile extends React.Component {

state = {name: 'Oleg ', lastname: 'Petrov', about: 'я только учусь'};

    render() {
        return(
            <div className='profile'>
                <span>{this.state.name} {this.state.lastname}</span>
                <p>About: {this.state.about}</p>
            </div>
        )
    }
};