import React from 'react';

import Titles from './components/Titles';
import Form from "./components/Form";
import Weather from "./components/Weather";
// App is an instance of class

const API_KEY = "70711dbdffa620ff91964370d759fc94";

class App extends React.Component{
    getWeather = async(e) => {
        e.preventDefault();
    //    arrow function allow to use this keyword independently
        const api_call = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=${API_KEY}`);
        const data = await api_call.json();
        console.log(data);
    }
    render() {
        return(
            <div>
                <Titles/>
                <Form getWeather={this.getWeather}/>
                <Weather/>
            </div>
        );
    }
}

export default App;