import React, { Component } from 'react';
import Video from './Video';
import Footer from './Footer';
import Header from './Header';
// NOTE: you must manually put your own local video file here
import video from './resources/videos/It Ain’t Easy - LeBron James ft. Kevin Durant.mp4'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="App-content">
          <Video src={video} />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
