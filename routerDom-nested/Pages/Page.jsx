import { Link, useParams } from 'react-router-dom'

// importan only using children!!!
export default function Page({ children }) {
  const {id} = useParams()

  return <div className='max-w-2xl my-20 mx-auto gap-4 grid grid-cols-1 place-items-center text-center'>
    <Link to='/' className='p-5 bg-gray-400'>Go Back</Link>
    <h1>Page Home</h1>

    <div className='grid grid-cols-2 gap-10'>
      <Link to={`/detail/${id}`}>detail</Link>
      <Link to={`/page/${id}/verydetail`}>Very Detail</Link>

      {children}
    </div>
  </div>
}
