import React, {Component} from "react";
import axios from 'axios';

import './BackendHealth.css';

class BackendHealth extends Component {
  
  constructor(props) {
    super(props);
    this.state = {backendHealth: "UNKNOWN"};
  }

  componentDidMount() {
    this.getHealth();
    this.interval = setInterval(this.getHealth, 3000);
  }

    render() {
      return (
        <div className="BackendHealth">
          <p>Backend is: <a className={this.state.backendHealth}>{this.state.backendHealth}</a></p>
        </div>
      );
    }

    getHealth = () => {
      axios.get(`health`)
        .then(res => {
          if (res.status === 200) {
            this.setState({ backendHealth: res.data.status });
          } else {
            this.setState({ backendHealth: "DOWN" });            
          }
        })
        .catch(res => {
          console.log(res);
          this.setState({ backendHealth: "DOWN" });            
        });    
    }    

  }
  
  export default BackendHealth;