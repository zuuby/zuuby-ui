import React from 'react';
import { Col } from 'reactstrap';
import ChevronDown from 'react-feather/dist/icons/chevron-down';
import ChevronUp from 'react-feather/dist/icons/chevron-up';
import Video from './Video';
// NOTE: you must manually put your own local video file here
import video from './resources/videos/It Ain’t Easy - LeBron James ft. Kevin Durant.mp4'
import metadata from './resources/meta/It Ain’t Easy - LeBron James ft. Kevin Durant.json'
import './VideoContent.css';

class VideoContent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      descIsOpen: false,
    };

    this.onClickDesc = this.onClickDesc.bind(this);
  }

  onClickDesc() {
    console.log('click');
    this.setState({descIsOpen: !this.state.descIsOpen});
  }

  render() {
    return (
      <Col className='Video-content'>
        <Video src={video} />
        <p className='Video-title'>
          {metadata.title}
        </p>
        {this.state.descIsOpen &&
          <p className='Video-description'>
            <ChevronUp className='Video-description-chevron' onClick={this.onClickDesc} />
            {metadata.description}
          </p>
        }
        {!this.state.descIsOpen &&
          <p className='Video-description'>
            <ChevronDown className='Video-description-chevron' onClick={this.onClickDesc} />
            {metadata.description.slice(0, 64) + (metadata.description.length > 64 ? ' . . .' : '')}
          </p>
        }
      </Col>
    );
  }
}

export default VideoContent;
