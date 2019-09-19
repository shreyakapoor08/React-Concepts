import React, {Component} from 'react';
import Note from './components/note'
import './App.css';

class App extends Component {
    constructor(props) {
        super(props) ;
            this.state = {
                noteText: '',
                notes: []
            //    notes will contain all the notes which we add
            //    noteText will contain text of actual note, value will get updated
            }
    }
    updateNoteText(noteText) {
        this.setState({noteText: noteText.target.value})
    }

    addNote() {
        if(this.state.noteText === '')
        {
            return;
        }
        let notesArr = this.state.notes;
        notesArr.push(this.state.noteText);
        this.setState({noteText: ''}); // this is to blank the text area so that we can add further values
        this.textInput.focus();
    }

    handleKeyPress = (event) => {
        if(event.key === 'Enter') {
            let notesArr = this.state.notes;
            notesArr.push(this.state.noteText);
            this.setState({noteText: ''});
        }
    }

    deleteNote(index) {
        let notesArr = this.state.notes;
        notesArr.splice(index, 1);
    //    it will remove note from notes array
        this.setState({notes: notesArr})
    }
    render() {
        //creating map for all the notes
        let notes = this.state.notes.map((val,key)=>{
            return <Note key={key}
                         text={val}
                         deleteMethod={()=> this.deleteNote(key)} />
        //                 react uses this key to check which element is added updated or deleted
        })

        return (
            <div className="container">
                <div className="header">
                    React Todo Application
                </div>
                {notes}
                <div className="btn" onClick={this.addNote.bind(this)}>
                    +
                </div>
                <input type="text"
                    ref={((input) => {this.textInput = input})}
                    className="textInput"
                       value={this.state.noteText}
                       onChange={noteText => this.updateNoteText(noteText)}
                       onKeyPress={this.handleKeyPress}
                />
            </div>
        );
    }
}


export default App;