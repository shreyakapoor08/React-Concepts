import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() { //react will call this method to render something to the screen
      //<Person/> is a self closing tag
     return (
       <div className="App">
         <h1>Hi I'm a react app</h1>
         <p>This is working</p>
          <Person/>
          <Person/>
       </div> //this part of code is jsx which looks like html
       // <p>This does not wrk</p>  as jsx can have only 1 root element
     );

     //the jsx gets compiled to the following code that is why it is not html but js only
    //return React.createElement('div',{className: 'App'},React.createElement('h1',null, 'Does this works now?'));
  }
}

export default App;
