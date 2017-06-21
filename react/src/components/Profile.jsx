import React from 'react';

const Profile = (props) => {
        return (
            <div className="container">
                <h2>
                    Welcome {props.user.name} {props.user.surname} !
                </h2>
                <div className="container">
                    <dl className="dl-horizontal">
                        <dt>First Name</dt>
                        <dd>{props.user.name}</dd>
                        <dt>Last Name</dt>
                        <dd>{props.user.surname}</dd>
                        <dt>Your number</dt>
                        <dd>{props.user.phoneNumber}</dd>
                    </dl>
                </div>
            </div>
        );
    }

export default Profile;