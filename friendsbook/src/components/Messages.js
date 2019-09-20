import React from 'react';

class Messages extends React.Component {
    render() {
        let data = this.props.messageArr.map((val,index)=>{
            return <p className="messageinorder" key={index}>{val}</p>
        })
        return (
            <div className="messagearea">
                <div className="entertext">
                    <div className="writetext">
                        <h3>Enter Your Message here: </h3>
                        <textarea onChange={this.props.change} placeholder="What's in your mind?" type="text"
                                  className="textInput"/>
                    </div>
                    <div className="createbutton">
                        <button onClick={this.props.submit}>Create</button>
                    </div>
                </div>
                <div className="yourmessages">
                    {data}
                </div>

            </div>
        );
    }
};

export default Messages;