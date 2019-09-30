import React from 'react';
import CreateMessage from "./CreateMessage";

class DisplayMessage extends React.Component{
    render(){
        let data = this.props.messages.map((val,index)=>{
            return <p key={index} className="messageinorder">
                {val}
                <i className="fas fa-trash" style={{float: 'right', cursor: 'pointer'}} onClick={() => this.props.deleteMessage(index)} ></i>
                <i className="fas fa-edit" style={{float: 'right', cursor: 'pointer'}} onClick={() => this.props.editMessage(index)}></i>
            </p>

        })
        return(
            <div className="yourmessages">
                {data}
            </div>
        );
    }
}

export default DisplayMessage;