import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Page from './Page'

export default function Detail() {
  const {id} = useParams()
  const [datas, setDatas] = useState([])

  const api = async () => {
    const res =  await fetch(`https://dummyjson.com/users/${id}`)
    const data = await res.json()
    setDatas(data)
  }

  useEffect(() => {
    api()
  }, [])

  return <Page>
    <div className='m-10 col-span-2 text-start'>
      <p>{id}</p>
      <p>name: {datas.firstName}</p>
      <p>lastname: {datas.lastName}</p>
      <p>age: {datas.age}</p>
      <p>email: {datas.email}</p>
    </div>
  </Page>
  
}
