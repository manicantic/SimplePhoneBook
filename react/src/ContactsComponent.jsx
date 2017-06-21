import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';
import ContactsList from './components/ContactsList';
import ContactAddBox from './components/ContactAddBox';


class ContactsComponent extends Component {

    constructor(props) {
        super(props);

        this.state = {
            contacts: [],
            token: this.props.getUser().token,
            isLoading: false,
            isError: false,
            newContact: {
                name:'',
                surname:'',
                email:'',
                phone:'',
                birthday:''

            },
            editId:-1,
            editContact:''
        }
        this.changeInput=this.changeInput.bind(this);
        this.addContact=this.addContact.bind(this);
        this.setEditMode=this.setEditMode.bind(this);
        this.saveEditedContact=this.saveEditedContact.bind(this);
        this.deleteContact=this.deleteContact.bind(this);
    }

    componentDidMount() {
        console.log(this.state.token);
        this.setState({
            isError: false,
            isLoading: true,
         });
         this.getContacts();
    };

    getContacts(){
         let _this=this;
         let unauthorized=false;
         let token=this.state.token;
        fetch(`http://localhost:3000/api/contacts?token=${token}` , {
             method: 'GET',
          //   headers: new Headers({
		  //       'X-Auth-Token': `${token}`
          //  })
         }).then( (response) =>{
             if(response.status === 403){
                 unauthorized = true;
             }
             return response.json();
         }).then( (contacts) => {
             let newContact={name:'',surname:'',email:'',phone:'',birthday:''};
             _this.setState({
                 contacts: contacts,
                 isLoading: false,
                 newContact: newContact
             });
         }).catch( (err) =>{
             _this.setState({
                 contacts:[],
                 isLoading:false,
                 isError:true,
                 unauthorized:unauthorized
             });
         });
    }

    clearNewContact(isEdited){
        let newContact={name:'',surname:'',email:'',phone:'',birthday:''}
        if(isEdited){
            this.setState({editContact:newContact});
        }
        else{
            this.setState({newContact:newContact});
        }
    };

    changeInput(event) {
        if(this.state.editId === ''){
        let newContact=this.state.newContact;
        if (event.target.id === 'Name') {
            newContact.name=event.target.value;
        }
        else if (event.target.id === 'Surname') {
            newContact.surname=event.target.value;
        }
        else if (event.target.id === 'Email') {
            newContact.email=event.target.value;
        } 
        else if (event.target.id === 'Phone') {
            newContact.phone=event.target.value;
        }
        else if (event.target.id === 'Birthday') {
            newContact.birthday=event.target.value;
        }
        this.setState({newContact: newContact})
        }else{
            let editContact=this.state.editContact;
        if (event.target.id === 'Name') {
            editContact.name=event.target.value;
        }
        else if (event.target.id === 'Surname') {
            editContact.surname=event.target.value;
        }
        else if (event.target.id === 'Email') {
            editContact.email=event.target.value;
        } 
        else if (event.target.id === 'Phone') {
            editContact.phone=event.target.value;
        }
        else if (event.target.id === 'Birthday') {
            editContact.birthday=event.target.value;
        }
        this.setState({editContact: editContact})
        }
    
        //console.log(JSON.stringify(this.state.newContact));

    };

    addNewContact(newId){
        let contact = this.state.newContact;
        contact.id=newId;
        contact.user_id=this.props.getUser().user.id;
        let newContact={name:'',surname:'',email:'',phone:'',birthday:''}
        this.setState({
            contacts: [...this.state.contacts, contact],
            newContact:newContact
        });
    };

    addContact(){
        fetch(`http://localhost:3000/api/contacts?token=${this.state.token}`, {
            method: 'POST',
            body: JSON.stringify(this.state.newContact),
             headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
        }).then((response) => {
            if(response.status === 200){
                console.log('dobio sam 200');
                return response.json();
            }
            else{
                this.clearNewContact();
            }
        }).then( (body) => {
            console.log('citam rezultate body-a')
            this.addNewContact(body.id);
        })
        .catch((err) => {
            this.setState({isError:true});
        })
    };

    removeContactFromList(deletedId){
        this.setState({
            contacts: this.state.contacts.filter( contact => contact.id !== deletedId)
        })
    };

    deleteContact(event){
        let deletedId=event.target.value;
        fetch(`http://localhost:3000/api/contacts/${deletedId}?token=${this.state.token}`, {
            method: 'DELETE',
             //   headers: new Headers({
		  //       'X-Auth-Token': `${this.state.token}`
          //  })
        }).then((response) => {
            if(response.status === 200){
                console.log('u deletu sam')
                this.removeContactFromList(deletedId);
            }
            else{
                
            }
        }).catch((err) => {
            this.setState({isError:true});
        })
    };

    setEditMode(event){
        this.setState({
            editId:parseInt(event.target.value),
            editContact: this.state.contacts.find(contact => (contact.id == event.target.value))
        })
    };

    changeEditContact(){
        this.setState({
            contacts: this.state.contacts.map( contact => {
                if(contact.id != this.state.editContact.id){
                    return contact;
                }
                return this.state.editContact;
            } ),
            editId: ''
        })
    }

    saveEditedContact(){
        fetch(`http://localhost:3000/api/contacts/${this.state.editContact.id}?token=${this.state.token}`, {
            method: 'PUT',
            body: JSON.stringify(this.state.editContact),
             headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
        }).then((response) => {
            if(response.status === 200){
                this.changeEditContact();
            }
            else{
                this.clearNewContact();
            }
        }).catch((err) => {
            this.setState({isError:true});
        })
    }


    render() {
        console.log(this.state.editId + typeof(this.state.editId));
        if(this.state.unauthorized) {
            return (
                <Redirect to="/login" />
            );
        }

        return (
            <div className="container">
                  <ContactsList changeInput={this.changeInput} contacts={ this.state.contacts } deleteContact={this.deleteContact} editId={this.state.editId} setEditMode={this.setEditMode} editContact={this.state.editContact} saveEditedContact={this.saveEditedContact}/>
                  <ContactAddBox changeInput={this.changeInput} buttonName={"Add contact"} addContact={this.addContact} contact={this.state.newContact} />
            </div>

        );
    }
}

export default ContactsComponent;