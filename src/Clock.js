import React from 'react';

class Clock extends React.Component{
    constructor(props){
        super(props)
        this.state = {date:new Date()};
    }
    
    render(){
        return (
            <h3>it is {this.state.date .toLocaleTimeString()}</h3>
        );
    }

    componentDidMount(){
        this.timerID = setInterval(() => this.tick(),1000);
    }

    componentWillUnmount(){
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({
            date: new Date()
          });        
    }
}

export default Clock;