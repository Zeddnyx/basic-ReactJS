import { Link, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Detail() {
  const {id} = useParams()
  const [datas, setDatas] = useState([])

  const api = async () => {
    const res =  await fetch(`https://dummyjson.com/users/${id}`)
    const data = await res.json()
    setDatas(data)
    console.log(datas)
  }

  useEffect(() => {
    api()
  }, [])

  return <div>
    <Link to='/' className='m-10 p-5 bg-gray-400'>Go Back</Link>

    <div className='m-10'>
    
      <p>name: {datas.firstName}</p>
      <p>lastname: {datas.lastName}</p>
      <p>age: {datas.age}</p>
      <p>email: {datas.email}</p>

    </div>
  </div>
  
}
