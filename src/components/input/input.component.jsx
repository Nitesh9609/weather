// import CityComp from "../City-Name/city.component"
import React from "react"
import WeatherComp from "../weather-forcast/weather.component"
import './input.style.scss'

class InputComp extends React.Component {
    constructor(){
        super()
        this.state={
            city:'',
            cityname: '',
            countryname: '',
            temperature: '',
            min_temp:'',
            max_temp:''
        }
    }
    handleOnChange = (event)=>{
        this.setState({city:event.target.value});
    }

    setOnClick = () =>{
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=b8e33c26fa36e6279ade6889e4a3a45b`)
        .then(result => result.json())
        .then(data => {
            console.log(data);
          this.setState({
            cityname : data.name, 
            countryname : data.sys.country,
            temperature : data.main.temp,
            min_temp:data.main.temp_min,
            max_temp:data.main.temp_max,
          })
          console.log(data)
       })
       console.log('clicked');
    }
    
    
    render(){
        return(
        <>

            <div>
                <input
                    type='search'
                    placeholder="Enter Location"
                    onChange={this.handleOnChange}
                    >
                </input>

                <button onClick={this.setOnClick}>
                    Search
                </button>

                
                
                    
                    <WeatherComp
                    cityname = {this.state.cityname} 
                    countryname = {this.state.countryname}
                    temperature = {this.state.temperature}
                    min_temp = {this.state.min_temp}
                    max_temp = {this.state.max_temp}
                    />
                
            </div>
            
        </>
    )
    }
}


export default InputComp