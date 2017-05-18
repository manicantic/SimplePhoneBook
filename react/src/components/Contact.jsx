import React, { Component } from 'react';
import ContactAddBox from './ContactAddBox';

class Contact extends Component {
    render() {
        if(this.props.editId == this.props.contact.id){
            return(
                <tr>
                    <td>
                        <ContactAddBox buttonName={"Save changes"} addContact={this.props.saveEditedContact} contact={this.props.editContact} changeInput={this.props.changeInput} />
                    </td>
                </tr>
            );
        };

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
                    <td>
                        <button className="btn btn-default" value={this.props.contact.id} onClick={this.props.setEditMode}>Edit</button>
                    </td>
                    <td>
                        <button className="btn btn-default" value={this.props.contact.id} onClick={this.props.deleteContact} >Delete</button>
                    </td>
                </tr>
        );
    }
}

export default Contact;