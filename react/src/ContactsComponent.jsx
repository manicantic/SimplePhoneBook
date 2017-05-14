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
            user: {
                name:'',
                surname:'',
                email:'',
                phone:'',
                birthday:''

            },
        }
        this.changeInput=this.changeInput.bind(this);
        this.addContact=this.addContact.bind(this);
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
             let user={name:'',surname:'',email:'',phone:'',birthday:''};
             _this.setState({
                 contacts: contacts,
                 isLoading: false,
                 user: user
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

    clearUser(){
        let user={name:'',surname:'',email:'',phone:'',birthday:''}
        this.setState({user:user});
    }

    changeInput(event) {
        let user=this.state.user;
        if (event.target.id === 'Name') {
            user.name=event.target.value;
        }
        else if (event.target.id === 'Surname') {
            user.surname=event.target.value;
        }
        else if (event.target.id === 'Email') {
            user.email=event.target.value;
        } 
        else if (event.target.id === 'Phone') {
            user.phone=event.target.value;
        }
        else if (event.target.id === 'Birthday') {
            user.birthday=event.target.value;
        }
        this.setState({user: user})
        //console.log(JSON.stringify(this.state.user));

    };

    addContact(){
        fetch(`http://localhost:3000/api/contacts?token=${this.state.token}`, {
            method: 'POST',
            body: JSON.stringify(this.state.user),
             headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
        }).then((response) => {
            if(response.status === 200){
                this.getContacts();
            }
            else{
                this.clearUser();
            }
        }).catch((err) => {
            this.setState({isError:true});
        })
    }


    render() {

        if(this.state.unauthorized) {
            return (
                <Redirect to="/login" />
            );
        }

        return (
            <div className="container">
                  <ContactsList contacts={ this.state.contacts } />
                  <ContactAddBox changeInput={this.changeInput} addContact={this.addContact} user={this.state.user} />
            </div>

        );
    }
}

export default ContactsComponent;