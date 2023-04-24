import VideoController from '../controllers/VideoController.ts'
import React, { useEffect, useState } from 'react'

import micOn from '../images/icons/micOn.svg'
import micOff from '../images/icons/micOff.svg'

const stream = new VideoController(1920, 1080)

function MicToggle() {
  const [isMicOn, setIsMicOn] = useState(true)

  const toggleMic = () => {
    setIsMicOn(!isMicOn)
  }

  return (
    <img
      className="absolute top-95 left-110"
      src={isMicOn ? micOn : micOff}
      alt="mic"
      onClick={toggleMic}
    />
  )
}

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

  return (
    <div>
      <video
        autoPlay
        playsInline
        className="w-full h-full border relative"></video>
      {error && <div className="text-red-500">{error}</div>}
      <button
        onClick={() => {
          changeResolution(640, 480)
        }}>
        Click button 640
      </button>
      <button
        onClick={() => {
          changeResolution(1000, 480)
        }}>
        Click button 1000
      </button>
      <button
        className=""
        onClick={() => {
          stream.muteToggler()
        }}>
        <MicToggle className="" />
      </button>
    </div>
  )
}
