import React from 'react';
import './profile.css'


export default class Profile extends React.Component {
    static defaultProps = {
       profileId: 1,
    };
    state = {
        name: 'Oleg', lastname: 'ivanov', about: '**--**',
    }
 render() {

     return(
         <div className='profile'>
              <span>{this.state.name} {this.state.lastname}</span>
                <p>About: {this.state.about}</p>
            </div>
        )
    }
};

