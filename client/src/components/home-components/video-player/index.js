import React from 'react'
import ReactPlayer from 'react-player'
import './styles.css'

const VideoPlayer = () => {
    return (
      <div className='player-wrapper'>
        <ReactPlayer
          className='react-player'
          url='https://www.youtube.com/watch?v=UalTfOIDQ7M'
          width='100%'
          height='40vh'
        />
      </div>
    )
}

export default VideoPlayer
