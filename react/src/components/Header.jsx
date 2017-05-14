import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <span className="navbar-brand">
                                SimplePhoneBook
                            </span>
                        </div>
                        <div className="collapse navbar-collapse">
                            <ul className="nav navbar-nav">
                                <li>
                                    <Link to="/profile">Profile</Link>
                                </li>
                                <li>
                                    <Link to="/contacts">Contact</Link>
                                </li>
                                <li>
                                    <Link to="/login">Login</Link>
                                </li>

                            </ul>

                        </div>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Header;