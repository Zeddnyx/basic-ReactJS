import React, { useEffect, useState} from 'react';
import Pages from './Pages'

const API = "https://api.imgflip.com/get_memes"
export default function App(){

  const [datas, setDatas] = useState([])

  const getData = async () => {
    const api = await fetch(`${API}`)
    const data = await api.json()

    setDatas(data.data.memes)
  }
  useEffect(() => {
    getData()
  // eslint-disable-next-line
  }, [])

  return (
    <div className='grid grid-cols-2 p-2 gap-2'>
      {datas.map(( data ) => {
        return (
            <Pages meme={data} key={data.id} />
            //  jangan di bungkus ntar error suruh masukin key di detiap child
        )
      })}
    </div>
  )
}
