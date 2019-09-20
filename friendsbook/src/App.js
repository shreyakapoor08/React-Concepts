import React from 'react';
import PersonalInfo from './components/PersonalInfo';
import Messages from './components/Messages';
import Friends from './components/Friends';
import './App.css';

class App extends React.Component
{
    state = {
        messageText: '',
        messages: []
    }

    inputHandler=(e)=>{
        console.log(e.target.value);
        this.setState({messageText:e.target.value});
    }
    submitHandler=() => {
        if(this.state.messageText.trim() === '')
        {
            return;
        }
        let messageArr = [...this.state.messages];
        messageArr.push(this.state.messageText);
        this.setState({messages:messageArr ,messageText: ''});
    }
  render()
  {
      console.log(this.state)
    return (
        <div className='App'>
          <div className="wrapper-class">
              <div className="personal-info">
                  <PersonalInfo/>
              </div>
              <div className="row">
                  <div className="col-lg-8">
                      <Messages messageArr={this.state.messages} change={(e)=>this.inputHandler(e)} submit={this.submitHandler}/>
                  </div>
                  <div className="col-lg-4">
                      <Friends/>
                  </div>
              </div>
          </div>
        </div>
    );
  }
};

export default App;
