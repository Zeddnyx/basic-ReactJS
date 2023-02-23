import { useParams } from 'react-router-dom'
import Page from './Page'

export default function Detail() {
  const {id} = useParams()
  console.log(id)

  return <Page>
    <div className='col-span-2 text-start'>
      {id}
      <h1>hi this example router nested</h1>
    </div>
  </Page>
  
}
