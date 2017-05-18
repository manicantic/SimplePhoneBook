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
                            value={this.props.contact.name}
                            placeholder="Name"/>
                    </div>
                    <div className="form-group">
                        <input
                            onChange={this.props.changeInput}
                            type="text"
                            className="form-control"
                            id="Surname"
                            value={this.props.contact.surname}
                            placeholder="Surame"/>
                    </div>
                    <div className="form-group">
                        <input
                            onChange={this.props.changeInput}
                            type="tel"
                            className="form-control"
                            id="Phone"
                            value={this.props.contact.phone}
                            placeholder="Phone"/>
                    </div>
                    <div className="form-group">
                        <input
                            onChange={this.props.changeInput}
                            type="email"
                            className="form-control"
                            id="Email"
                            value={this.props.contact.email}
                            placeholder="email"/>
                    </div>
                    <div className="form-group">
                        <input
                            onChange={this.props.changeInput}
                            type="date"
                            className="form-control"
                            id="Birthday"
                            value={this.props.contact.birthday}
                            placeholder="Birthday"/>
                    </div>
                    <button className="btn btn-default" onClick={this.props.addContact}>{this.props.buttonName}</button>
            </div>
        );
    }
}

export default ContactAddBox;