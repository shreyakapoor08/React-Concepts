import React from 'react';
import PersonalInfo from './components/PersonalInfo';
import CreateMessage from './components/CreateMessage';
import DisplayMessage from './components/DisplayMessage';
import Friends from './components/Friends';
import './App.css';

class App extends React.Component
{
    state = {
        messageText: '',
        messages: [],
        btnText: 'Create',
        pos: 0
    }

    inputHandler=(e)=>{
        this.setState({messageText:e.target.value});

    }

    submitHandler=(event) => {
        console.log("event", event);
        event.preventDefault();
        if(this.state.messageText.trim() === '')
            return false;
        let messageArr = [...this.state.messages];
        if(this.state.btnText==='Create'){
            let d = new Date();
            let messageObj = {
                text: this.state.messageText,
                createdAt: d.getTime()
            }
            messageArr.unshift(messageObj);
        } else{
            messageArr[this.state.pos].text  = this.state.messageText;
        }
        this.setState({messages:messageArr, messageText: ' ',btnText: 'Create'});

    }

    editMessage=(index)=>{
        let messageText = this.state.messages[index].text
        this.setState({messageText, pos:index, btnText: 'Update'})
    }

    deleteMessage =(index)=>{
        let messageArr = this.state.messages
        messageArr.splice(index,1);
        this.setState({messages: messageArr})
    }

  render()
  {
console.log(this.state.messages)
    return (
        <div className='App'>
          <div className="wrapper-class">
              <div className="personal-info">
                  <PersonalInfo/>
              </div>
              <div className="row">
                  <div className="col-lg-8">
                      <CreateMessage
                          change={(e)=>this.inputHandler(e)}
                          submit={this.submitHandler}
                          messageText={this.state.messageText}
                          btnText={this.state.btnText}
                      />
                      <DisplayMessage
                          messages={this.state.messages}
                          editMessage={(index) => this.editMessage(index)}
                          deleteMessage={(index) => this.deleteMessage(index)}
                      />
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
