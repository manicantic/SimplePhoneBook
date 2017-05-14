import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, hashHistory, Redirect} from 'react-router-dom';
import PersonalInfoComponent from './PersonalInfoComponent';
import LoginComponent from './LoginComponent';
import ContactsComponent from './ContactsComponent';
import Header from './components/Header';

const NotFound = () => {
  return (
    <h1>This page is missing</h1>
  );
};

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      token: '',
      user: ''
    }

    this.setUser = this
      .setUser
      .bind(this);
    this.getUser = this
      .getUser
      .bind(this);
  };

  setUser = (user, token) => {
    this.setState({token: token, user: user})
  };

  getUser = () => {
    return {user: this.state.user, token: this.state.token};
  };

  render() {
    console.log('rendreriram u app');
    return (
      <Router history={hashHistory}>
        <div >
          <Header/>
          <Switch>
            <Route exact path="/" component={() => (<PersonalInfoComponent getUser={this.getUser}/>)}/>
            <Route exact path="/profile" component={() => (<PersonalInfoComponent getUser={this.getUser}/>)}/>
            <Route exact path="/contacts" component={() => (<ContactsComponent getUser={this.getUser}/>)}/>
            <Route exact path="/login" component={() => (<LoginComponent setUser={this.setUser} getUser={this.getUser}/>)}/>
            <Route component={ NotFound } />
          </Switch>
        </div>
      </Router>

    );
  }
}

export default App;
