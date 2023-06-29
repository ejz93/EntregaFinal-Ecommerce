import React from 'react'
import video from '../../assets/elemental.mp4'

const Main = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        zIndex: '-1',
      }}
    >
      <video
        autoPlay
        loop
        muted
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          minWidth: '100%',
          minHeight: '100%',
          width: 'auto',
          height: 'auto',
          opacity: '0.9',
        }}
      >
        <source src={video} type="video/mp4" />
      </video>
    </div>
  )
}

export default Main