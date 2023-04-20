import VideoController from '../controllers/VideoController.ts'
import React, { useEffect, useState } from 'react'

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

  const turnOnMicrophone = async () => {
    try {
      const newStream = await stream.turnOnMicrophone()
      console.log('Microphone turned on:', newStream)
    } catch (err) {
      setError(err.message)
    }
  }

  const turnOffMicrophone = async () => {
    try {
      await stream.turnOffMicrophone()
      console.log('Microphone turned off')
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div>
      <video
        autoPlay
        muted
        playsInline
        className="w-full h-full border"></video>
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
        onClick={() => {
          turnOnMicrophone()
        }}>
        Turn on microphone
      </button>
      <button
        onClick={() => {
          turnOffMicrophone()
        }}>
        Turn off microphone
      </button>
    </div>
  )
}
