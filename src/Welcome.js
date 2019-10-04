import React from 'react';
import User from './User';
import Clock from './Clock';

class Welcome extends React.Component{    
    
    constructor(props){
        super(props);
        this.state = {user:props.user};
    }

    render(){
        const element = (
            <div>
                <User user={this.state.user}/>
                <h2>Good to see you here</h2>
                <Clock/>            
            </div>     
        );
        return(<div>{element}</div>);        
    }
}




export default Welcome;