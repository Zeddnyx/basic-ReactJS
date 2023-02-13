import { useNavigate } from 'react-router-dom'
export default function() {
  const navi = useNavigate()
  return <div>
    hello this page
  hahahahwh

    <button onClick={() => navi('/about')}>Goto about</button>
    <button onClick={() => navi('/form')}>Goto form</button>
  </div>
}
