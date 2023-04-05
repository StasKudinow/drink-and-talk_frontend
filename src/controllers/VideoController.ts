class VideoController {
  private stream?: MediaStream

  constructor(private width: number, private height: number) {}

  public async getVideoStream(): Promise<MediaStream> {
    try {
      this.stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
          width: { ideal: this.width },
          height: { ideal: this.height },
        },
      })
      return this.stream
    } catch (err) {
      console.error('Error getting video stream:', err)
      throw err
    }
  }

  public async changeResolution(width: number, height: number): Promise<MediaStream> {
    try {
      if (this.stream) {
        this.stream.getTracks().forEach((track) => {
          track.stop()
        })
      }
      this.stream = await navigator.mediaDevices.getUserMedia({
        audio: false,
        video: {
          width: { ideal: width },
          height: { ideal: height },
        },
      })
      return this.stream
    } catch (err) {
      console.error('Error changing video resolution:', err)
      throw err
    }
  }

  public closeVideoStream(): void {
    if (this.stream) {
      this.stream.getTracks().forEach((track) => {
        track.stop()
      })
      this.stream = undefined
    }
  }
}

export default VideoController
