import Stream from './Stream'

import { streams } from '../utils/costants'

function Bar() {

  return (
    <main className="container mx-auto w-288 flex-col items-center py-17">
      <div className="grid grid-flow-row grid-cols-2 bg-orange">
        {streams.map((stream) => {
          return <Stream key={stream.id} />
        })}
      </div>
    </main>
  )
}

export default Bar
