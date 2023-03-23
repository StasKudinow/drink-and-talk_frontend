class VideoController {
  constructor(
    private width: number,
    private height: number
  ) {}

  public getVideoStream(): Promise<MediaStream> {
    return navigator.mediaDevices
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
  }
}

export default VideoController
