import React, {Component} from 'react';

class Note extends Component{
    render() {
        return(
        //    this return will hold every single note that we add
            <div className='note' onClick={this.props.deleteMethod}>
                {this.props.text}
            </div>
        );
    }
};

export default Note;