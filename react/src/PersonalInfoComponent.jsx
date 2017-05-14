import React, { Component } from 'react';
import Profile from './components/Profile';
import { Redirect } from 'react-router-dom';

class PersonalInfoComponent extends Component {

    
    constructor(props){
        super(props);

        this.state={
            user: this.props.getUser().user,
            token: this.props.getUser().token
        }
    }

    componentDidMount(){

    }

    render() {
        if(this.state.token === ''){
            return (
           <Redirect to="/login"/>
            );
       }
        return (
            <div>
                <Profile user={ this.state.user } />
            </div>
        );
    }
}

export default PersonalInfoComponent;