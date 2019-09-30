import React from 'react';

class Friends extends React.Component{
    state = {
        flag:false,
        friends: [],
        friendText: ''
    }

    inputHandler=(e)=>{
        this.setState({friendText:e.target.value});
        console.log(this.state.friendText);
    }

    submitHandler=(event)=> {
        event.preventDefault();
        if(this.state.friendText.trim() === '')
            return false;
        let friendArr = [...this.state.friends];
        friendArr.push(this.state.friendText);
        this.setState({friends:friendArr, friendText: ' '});
    }

    clickHandler = () =>{
        this.setState({flag:true})
    }

    render(){
        let modalfriend = <div>
            <input type="text" placeholder="Add friend" value={this.state.friendText} onChange={this.inputHandler}/>
            <button className="addfrndbtn" onClick={(event)=>   this.submitHandler(event)}>Add new friend</button>
                 </div>
            return(
            <div className='myfriends'>
                <h2>MY FRIENDS</h2>
                <button className="addfrnd" onClick={this.clickHandler}>Add Friends</button>
                {this.state.flag && modalfriend}
                <ul>
                    <li>Naina</li>
                    <li>Palak</li>
                    <li>Monika</li>
                    <li>Pritiksha</li>
                    <li>Srishti</li>
                    <li>Bhavya</li>
                </ul>
            </div>
        );
    }
}
;
export default Friends