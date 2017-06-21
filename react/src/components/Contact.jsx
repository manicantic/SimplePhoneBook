import React from 'react';
import ContactAddBox from './ContactAddBox';

const Contact = (props) => {
        if(props.editId === props.contact.id){
            return(
                <tr>
                    <td>
                        <ContactAddBox buttonName={"Save changes"} addContact={props.saveEditedContact} contact={props.editContact} changeInput={props.changeInput} />
                    </td>
                </tr>
            );
        };

        return (
                <tr>
                    <td>
                        {props.contact.id}
                    </td>
                    <td>
                        {props.contact.name}
                    </td>
                    <td>
                        {props.contact.surname}
                    </td>
                    <td>
                        {props.contact.phone}
                    </td>
                    <td>
                        {props.contact.email}
                    </td>
                    <td>
                        {props.contact.birthday.substring(0,10)}
                    </td>
                    <td>
                        <button className="btn btn-default" value={props.contact.id} onClick={props.setEditMode}>Edit</button>
                    </td>
                    <td>
                        <button className="btn btn-default" value={props.contact.id} onClick={props.deleteContact} >Delete</button>
                    </td>
                </tr>
        );
    }


export default Contact;