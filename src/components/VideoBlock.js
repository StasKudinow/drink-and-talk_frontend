import VideoController from '../controllers/VideoController.ts'
import React, { useState, useEffect } from 'react'

import micOn from '../images/icons/micOn.svg'
import micOff from '../images/icons/micOff.svg'
import chRes480 from '../images/icons/iconShit480.jpg'
import chRes720 from '../images/icons/iconShit720.png'

const videoController = new VideoController(1280, 720)

export default function VideoBlock() {
  const [error, setError] = useState(null)

  useEffect(() => {
    videoController
      .getVideoStream()
      .then((stream) => {
        const videoElement = document.querySelector('video')
        videoElement.srcObject = stream
        videoElement.play()
      })
      .catch((err) => {
        setError(err.message)
      })
    return () => {
      videoController.closeVideoStream();
    }
  }, [])

  const [isHD, setIsHD] = useState(true)

  const changeResolution = async () => {
    try {
      const newStream = await videoController.changeResolution(
        isHD
          ? { width: 1280, height: 720 }
          : { width: 640, height: 480 }
      )
      setIsHD(!isHD)
      const videoElement = document.querySelector('video')
      videoElement.srcObject = newStream
    } catch (err) {
      setError(err.message)
    }
  }

  const [isMicOn, setIsMicOn] = useState(true)

  const toggleMic = () => {
    const streamObj = videoController.muteToggler()
    if (streamObj) {
      streamObj.enabled = !isMicOn
    }
    setIsMicOn(!isMicOn)
  }

  return (
    <div className="relative">
      <video
        autoPlay
        playsInline
        className="w-full h-full border"></video>
      {error && <div className="text-red-500">{error}</div>}
      <div className="absolute bottom-2 right-2">
        <button
          onClick={() => changeResolution()}
          className="w-5 h-5">
          <img
            src={!isHD ? chRes720 : chRes480}
            alt="mic"
          />
        </button>
        <button onClick={toggleMic} type="button">
          <img src={isMicOn ? micOn : micOff} alt="mic" />
        </button>
      </div>
    </div>
  )
}