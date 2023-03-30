class VideoController {
  constructor(
    private width: number,
    private height: number,
    private stream: any
  ) {}

  public getVideoStream(): Promise<MediaStream> {
    this.stream = navigator.mediaDevices
      .getUserMedia({
        audio: true,
        video: { width: this.width, height: this.height },
      })
      .catch((error) => {
        console.error('Ошибка получения видео:', error)
        if (error.name === 'PermissionDeniedError') {
          console.error(
            'Отказано в доступе к камере/микрофону'
          )
        }
        throw error
      })

    return this.stream
  }

  public closeVideoStream(): void {
    this.stream.getTracks().forEach((track) => track.stop())
  }
}

export default VideoController
