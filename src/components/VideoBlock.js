import VideoController from '../controllers/VideoController.ts'
import React, { useEffect } from 'react'

const stream = new VideoController(1920, 1080)

export default function VideoBlock() {
  useEffect(() => {
    stream.getVideoStream().then((stream) => {
      const videoElement = document.querySelector('video')
      videoElement.srcObject = stream
      videoElement.play()
    })
  }, [])

  return <video autoPlay muted playsInline></video>
}
