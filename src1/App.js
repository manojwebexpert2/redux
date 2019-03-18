import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './App.css';
class App extends Component {
  rAbout()
  {
   //console.log("clicked");
   this.props.history.push('/about/12');
  }
  reloadAbout()
  {
   //console.log("clicked");
   this.props.history.push('/about');
  }
  render() {
    return (
      <div className="App">
        <h1>HomePage</h1>
        <button onClick={this.rAbout.bind(this)}>Redirect to About us</button>
        <button onClick={this.reloadAbout.bind(this)}>Reload About us</button><br/>
        <Link to='/about/1'>1</Link><br/>
        <Link to='/about/2'>2</Link><br/>
        <Link to='/about/3'>3</Link>
      </div>
    );
  }
}

export default App;
