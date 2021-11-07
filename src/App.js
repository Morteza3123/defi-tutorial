import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';

class App extends Component{
  
  constructor(props){
    super(props)
    this.state = {
      account : '0x0'
    }
  }

  render(){
    return (
      <div>
        <Navbar account={this.state.account} />
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 ml-auto mr outo" >
              <div className="content mr-auto ml-auto">
                <a 
                  href="http://localhost:3000/"
                  trarget="_blanck"
                  rel="noopener noreffer"
                  ></a>
                  <h1>Hello World</h1>
              </div>
            </main>
          </div>
        </div>
      </div>
  );
}
}

export default App;
