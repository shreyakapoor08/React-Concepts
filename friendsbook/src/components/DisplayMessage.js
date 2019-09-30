import React from 'react';


class DisplayMessage extends React.Component{
    render(){
        let data = this.props.messages.map((val,index)=>{
            return <p key={index} className="messageinorder">
                {val}
                {new Date(this.props.time).toLocaleString()}
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