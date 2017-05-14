import React, {Component} from 'react';

class ContactAddBox extends Component {
    render() {
        return (
            <div className="form-inline">
                    <div className="form-group">
                        <input
                            onChange={this.props.changeInput}
                            type="text"
                            className="form-control"
                            id="Name"
                            value={this.props.user.name}
                            placeholder="Name"/>
                    </div>
                    <div className="form-group">
                        <input
                            onChange={this.props.changeInput}
                            type="text"
                            className="form-control"
                            id="Surname"
                            value={this.props.user.surname}
                            placeholder="Surame"/>
                    </div>
                    <div className="form-group">
                        <input
                            onChange={this.props.changeInput}
                            type="tel"
                            className="form-control"
                            id="Phone"
                            value={this.props.user.phone}
                            placeholder="Phone"/>
                    </div>
                    <div className="form-group">
                        <input
                            onChange={this.props.changeInput}
                            type="email"
                            className="form-control"
                            id="Email"
                            value={this.props.user.email}
                            placeholder="email"/>
                    </div>
                    <div className="form-group">
                        <input
                            onChange={this.props.changeInput}
                            type="date"
                            className="form-control"
                            id="Birthday"
                            value={this.props.user.birthday}
                            placeholder="Birthday"/>
                    </div>
                    <button className="btn btn-default" onClick={this.props.addContact}>Add contact</button>
            </div>
        );
    }
}

export default ContactAddBox;