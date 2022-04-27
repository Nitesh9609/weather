import './App.css';
import React from 'react';
import InputComp from './components/input/input.component';


class App extends React.Component {
  
  render(){
      return (
        <div className="App">
            <h1>Weather App</h1>
            <InputComp  />
        </div>
      );
    }
}
export default App;
