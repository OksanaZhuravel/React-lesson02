import React from 'react';
import  PropTypes from 'prop-types';
import './profile.css'


export default class Profile extends React.Component {
    static propTypes = {
        profileId: PropTypes.number,
    };
    static defaultProps = {
       profileId: 1,
    };
    state = {
        name: 'Oleg', lastname: 'ivanov', about: '**--**',
    }
 render() {
     let nameUser = this.state.name;
     return(
         <div className='profile'>
              <span>{this.state.name} {this.state.lastname}</span>
                <p>About: {this.state.about}</p>
            </div>
        )
    }
};

