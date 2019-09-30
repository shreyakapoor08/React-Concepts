import React from 'react';

class CreateMessage extends React.Component {
    render() {
        return (
            <div className="messagearea">
                <div className="entertext">
                    <form onSubmit={(event) => this.props.submit(event)}>
                        <div className="writetext">
                            <h3>Enter Your Message here: </h3>
                            <input onChange={this.props.change} placeholder="What's in your mind?" type="text"
                                      className="textInput" value={this.props.messageText}/>
                        </div>
                        <div className="createbutton">
                            <button>{this.props.btnText}</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
};

export default CreateMessage;