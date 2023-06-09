import { useHistory } from 'react-router-dom'

import VideoBlock from './VideoBlock'
import Button from './Button'

import { streams } from '../utils/costants'

function Bar() {

  const history = useHistory()

  function refreshPage() {
    let result = window.confirm('Выйти из бара?')
    if (result) {
      history.push('/barlist')
      window.location.reload()
    }
  }

  return (
    <main className="w-full py-17 flex flex-col items-center">
      <section className="w-full mb-5 grid videoWrapepr grid-cols-3 justify-center">
        {streams.map((stream) => {
          return <VideoBlock key={stream.id} />
        })}
      </section>
      <Button
        text="Назад"
        variant="orange-button"
        handler="stop-stream"
        type="button"
        onRefreshPage={refreshPage}
      />
      <div className="w-120 h-45 mt-7 bg-bar_image bg-cover" />
    </main>
  )
}

export default Bar
