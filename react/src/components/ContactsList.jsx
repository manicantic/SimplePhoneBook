import React, {Component} from 'react';
import Contact from './Contact';

class ContactsList extends Component {
    render() {

        var contactComponents = this.props.contacts.map(( c, index) => {
            return (<Contact contact={c} key={index} changeInput={this.props.changeInput} deleteContact={this.props.deleteContact} editContact={this.props.editContact} saveEditedContact={this.props.saveEditedContact} editId={this.props.editId} setEditMode={this.props.setEditMode} /> )
        })

        return (
                <div>
                    <h3>Your contacts</h3>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Surname</th>
                                <th>Phone</th>
                                <th>Email</th>
                                <th>Birthday</th>
                                <th>Edit</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {contactComponents}
                        </tbody>
                    </table>
                </div>
        );
    }
}

export default ContactsList;