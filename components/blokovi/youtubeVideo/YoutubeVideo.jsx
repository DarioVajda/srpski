import React from 'react'
import styles from './youtubeVideo.module.css'

// <YoutubeVideo href="https://www.youtube.com/embed/dQw4w9WgXcQ"/>
// Primer koriscenja bloka youtubeVideo

const YoutubeVideo = (props) => {
  return (
    <div className={styles.youtubeVideo}>
      <iframe
      src={props.href}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen>
      </iframe>
    </div>
  )
}

export default YoutubeVideo