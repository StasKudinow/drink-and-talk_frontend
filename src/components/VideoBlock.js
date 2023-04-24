import VideoController from '../controllers/VideoController.ts'
import React, { useState, useEffect } from 'react'

import micOn from '../images/icons/micOn.svg'
import micOff from '../images/icons/micOff.svg'
import chRes480 from '../images/icons/iconShit480.jpg'
import chRes720 from '../images/icons/iconShit720.png'


const stream = new VideoController(1920, 1080)


export default function VideoBlock() {
  const [error, setError] = useState(null)

  useEffect(() => {
    stream
      .getVideoStream()
      .then((stream) => {
        const videoElement = document.querySelector('video')
        videoElement.srcObject = stream
        videoElement.play()
      })
      .catch((err) => {
        setError(err.message)
      })
  }, [])

  const changeResolution = async (width, height) => {
    try {
      const newStream = await stream.changeResolution(
        width,
        height
      )
      const videoElement = document.querySelector('video')
      videoElement.srcObject = newStream
    } catch (err) {
      setError(err.message)
    }
  }

	  const [isMicOn, setIsMicOn] = useState(true)

    const toggleMic = () => {
      const streamObj = stream.muteToggler()
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
        className="relative w-full h-full border"></video>
      {error && <div className="text-red-500">{error}</div>}
      <button
        onClick={() => changeResolution(640, 480)}
        className="absolute top-55 left-80">
        <img src={chRes480} alt="mic" />
      </button>
      <button
        onClick={() => changeResolution(800, 480)}
        className="absolute top-55 left-95">
        <img src={chRes720} alt="mic" />
      </button>
      <button
        className="absolute top-55 left-110 w-8 h-8"
        onClick={toggleMic}
        type="button">
        <img src={isMicOn ? micOn : micOff} alt="mic" />
      </button>
    </div>
  )
}
