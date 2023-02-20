import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

export default function Home() {
  const [datas, setDatas] = useState([])

  const user = async () => {
    const res = await fetch('https://dummyjson.com/users')
    const data = await res.json()
    setDatas(data.users)
  }

  useEffect(() => {
    user()
  }, [])

  return <div className='grid grid-cols-2 max-w-xl gap-5 mx-auto mt-10'>
  {datas.map((list, index) => {
    return <Link to={`/detail/${list.id}`} key={index} className='w-60 h-20 p-2 bg-blue-700'>
      <p>{list.username}</p>
      <p>{list.email}</p>
      <p>{list.company.department}</p>
    </Link>
  })}
  </div>
}
