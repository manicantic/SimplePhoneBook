import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';


class LoginComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loggedIn: false,
            username: '',
            password: '',
            token:'',
            user:''
        }
        this.changeInput = this
            .changeInput
            .bind(this);
        this.logIn=this.logIn.bind(this);
        
    }
    componentWillUpdate(nextProps, nextState) {
        if(nextState.token!=='' && nextState.loggedIn === false){
            console.log('skuzio token');
            this.updateLoggedIn();
        }
    }
    componentDidUpdate(prevProps, prevState){
        if(this.state.loggedIn){
            console.log('saljem token App');
            this.props.setUser(this.state.user, this.state.token);
        }
    }

    updateLoggedIn = () => {
        console.log('updateat cu login');
        this.setState({
                  loggedIn: true
                 });
    }

    changeInput(event) {
        if (event.target.id === 'username') {
            this.setState({username: event.target.value})
        }
        if (event.target.id === 'password') {
            this.setState({password: event.target.value})
        }
    };

    logIn = () =>{
        fetch('http://localhost:3000/api/auth/login', {
            method : 'POST',
            body: JSON.stringify({username: this.state.username, password:this.state.password}),
            headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
        }).then((response) => {
            if(response.status === 200){
              //  this.updateLoggedIn();
                return response.json();
            }
            else if(response.status === 401){
                this.setState({
                    username:'',
                    password:''
                })
                throw(response.json());
            }
            else{
                console.log('server error')
            }
        }).then( body => {
            console.log('body');
            this.setState({
                user:body.user,
                token:body.token
            })
           // this.props.setUser(body);
        })
        .catch((err) => {
            console.log(err);
        })       
    }

    render = () => {
        console.log('rednrediram');
        console.log(this.state.loggedIn);
        console.log(this.state.token);
        if (this.state.loggedIn || this.props.getUser().token) {
                      console.log('redirectam');
      return (
        <Redirect to="/" />
      );
    }

        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <fieldset>
                                <div id="legend">
                                    <legend className="">Login</legend>
                                </div>
                                <div className="input-group">
                                    <div className="controls">
                                        <input
                                            type="text"
                                            id="username"
                                            name="username"
                                            placeholder="username"
                                            className="form-control"
                                            value={this.state.username}
                                            onChange={this.changeInput}/>
                                    </div>
                                </div>
                                <br/>
                                <div className="input-group">
                                    <div className="controls">
                                        <input
                                            type="password"
                                            id="password"
                                            name="password"
                                            placeholder="password"
                                            className="form-control"
                                            value={this.state.password}
                                            onChange={this.changeInput}/>
                                    </div>
                                </div>
                                <br/>
                                <div className="input-group">
                                    <div className="controls">
                                        <button className="btn btn-success" onClick={this.logIn}>Login</button>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginComponent;