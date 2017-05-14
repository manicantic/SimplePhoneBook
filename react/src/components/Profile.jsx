import React, {Component} from 'react';

class Profile extends Component {
    render() {
        return (
            <div className="container">
                <h2>
                    Welcome {this.props.user.name} {this.props.user.surname} !
                </h2>
                <div className="container">
                    <dl className="dl-horizontal">
                        <dt>First Name</dt>
                        <dd>{this.props.user.name}</dd>
                        <dt>Last Name</dt>
                        <dd>{this.props.user.surname}</dd>
                        <dt>Your number</dt>
                        <dd>{this.props.user.phoneNumber}</dd>
                    </dl>
                </div>
            </div>
        );
    }
}
export default Profile;