import React from 'react';

class Friends extends React.Component{
    state = {
        flag:false
    }

    clickHandler = () =>{
        this.setState({flag:true})
    }

    render(){
        let modalfriend = <div>
            <input type="text" placeholder="Add friend"/>
            <button className="addfrndbtn">Add new friend</button>
        </div>
            return(
            <div className='myfriends'>
                <h2>MY FRIENDS</h2>
                <button className="addfrnd" onClick={this.clickHandler}>Add Friends</button>
                {this.state.flag === false ? '':modalfriend}
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