import React, { Component } from 'react';
import Video from './Video';
import logo from './resources/images/zuuby_logo.png';
// NOTE: you must manually put your own local video file here
import video from './resources/videos/It Ain’t Easy - LeBron James ft. Kevin Durant.mp4'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <a href="/"><img src={logo} className="App-logo" alt="logo" /></a>
          <h1 className="App-title">
            This is only the beginning!
          </h1>
        </header>
        <div className="App-content">
          <Video src={video} />
        </div>
        <footer className="App-footer">
          <p>
            Created my free logo at <a href="https://logomakr.com">LogoMakr.com</a>
          </p>
          <p>
            View source <a href="https://github.com/zuuby/zuuby-ui">Github</a>
          </p>
        </footer>
      </div>
    );
  }
}

export default App;
