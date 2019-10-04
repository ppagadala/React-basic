import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';

const user1 = {
  firstName: "Pradeep",
  middileName: "Kumar",
  lastName: "Pagadala"
};

const user2 = {
  firstName: "Matha",
  middileName: "Raju",
  lastName: "Karri"
};

class App extends React.Component{
  
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return ( 
      <div className = "App" >
        <header className = "App-header"></header> 
        <body>
          <Welcome user={user1}/>
          <Welcome user={user2}/>
        </body>
      </div>
    );  
  }
}

export default App;