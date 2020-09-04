import React from "react";
import ReactDOM from "react-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Ticket from './component/ticket'

class App extends React.Component {
  render() {
    return (

    <div className="App">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a class="navbar-brand" href="https://www3.mercurywireless.com/" target="_blank">
                <img src="https://cdn1.mercurywireless.com/website/mercury-theme/glossy.png" height="40" alt=""/>
            </a>
          </div>
        </nav>
        <div class="container">
            <Ticket/>
        </div>
    </div>);
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

export default App;