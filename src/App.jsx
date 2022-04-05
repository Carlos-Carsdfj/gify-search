import { useState } from 'react'
import ResizeObserver from "react-resize-observer"
import SearchBox from './components/SearchBox'
import { Grid } from '@giphy/react-components'
import { GiphyFetch } from '@giphy/js-fetch-api'
function App() {
  const [gifs, setGifs] = useState('dog')
  const [width, setWidth] = useState(window.innerWidth)
  const gf = new GiphyFetch( import.meta.env.VITE_API_KEY)

 
  
  const fetchGifs = (offset) => gf.search(gifs, { sort: 'relevant', lang: 'es',offset,limit: 10, type: 'gifs' })// gifs / stickers / text / videos
  return (
    <div className="  flex flex-col items-center justify-center w-full" >
      <h1 className='font-medium leading-tight text-5xl mt-0 mb-2 text-blue-600'>Gify Search</h1>
      <SearchBox  setGifs={setGifs} titleSearch={'type and have fun'} />
      <hr className="my-6 "/>
      <Grid
        key={gifs}
        fetchGifs={fetchGifs}
        width={width}
        columns={Math.floor((width /1000)*3)}
        gutter={6}
      />
      <ResizeObserver
        onResize={({ width }) => {
          setWidth(width);
        }}
      />
    </div>
  )
}

export default App
