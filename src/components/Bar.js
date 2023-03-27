import VideoBlock from './VideoBlock'
import Button from './Button'

import { streams } from '../utils/costants'

function Bar() {

  return (
    <main className="w-full py-17 flex flex-col items-center">
      <section className="w-full mb-5 grid videoWrapepr grid-cols-3 justify-center">
        {streams.map((stream) => {
          return <VideoBlock key={stream.id} />
        })}
      </section>
      <Button
        buttonColor="bg-green"
        buttonTextColor="text-black"
        buttonText="Назад"
        buttonHoverText="hover:text-black"
        handler="link"
        url="/categories"
      />
      <div className="w-120 h-45 mt-7 bg-bar_image bg-cover" />
    </main>
  )
}

export default Bar
