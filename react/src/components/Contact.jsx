import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
                <tr>
                    <td>
                        {this.props.contact.id}
                    </td>
                    <td>
                        {this.props.contact.name}
                    </td>
                    <td>
                        {this.props.contact.surname}
                    </td>
                    <td>
                        {this.props.contact.phone}
                    </td>
                    <td>
                        {this.props.contact.email}
                    </td>
                    <td>
                        {this.props.contact.birthday.substring(0,10)}
                    </td>
                </tr>
        );
    }
}

export default Contact;