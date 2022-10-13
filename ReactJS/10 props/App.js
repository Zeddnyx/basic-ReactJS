import React, {useState} from 'react';
import PropsAll from './PropsAll'
import PropsObject from './PropsObject'
import PropsArray from './PropsArray'

export default function App() {

  const [isinya, setIsinya] = useState([
    {judul: 'props dalam array', isi: 'ini props dalam array'},
    {judul: 'props dalam array 2', isi: 'ini props dalam array2'},
  ])

  return (
  <>
      <div>
        <PropsAll judul="props" isi="ini props" />
      </div>
      <div>
        <PropsObject judul="props object" isi="ini props object" />
      </div>

      <div>
        <PropsArray all={isinya} />
      </div>
  </>
  )
}
