import React, {Component} from 'react';
import Contact from './Contact';

class ContactsList extends Component {
    render() {

        var contactComponents = this.props.contacts.map(( c, index) => {
            return (<Contact contact={c} key={index} /> )
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