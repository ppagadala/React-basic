import React from 'react';

class User extends React.Component{
    constructor(props){
        super(props);
        this.state = {user:props.user}
    }
    
    render(){
        return (
            <h1>Hello, {getFullName(this.state.user)}</h1>
        );
    }
}

function getFullName(user) {
    return user.firstName + ' ' + user.middileName + ' ' + user.lastName;
}

export default User;