import React, {useEffect, useState} from 'react'
import styled from "styled-components";

const api_url = ('https://api.publicapis.org/entries')
function App() {
  const [list, setList] = useState([])
  const [load, setLoad] = useState(true)

  const getData = async ()=>{
    const resp = await fetch(`${api_url}`)
    const json = await resp.json()
    const data = json.entries

    setList(data)
    setLoad(false)

  }
  useEffect(()=>{
    getData()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      {load? (
        <Load>loading...</Load>
      ): (
        list.map((api, i) => {
          return (
            <DivKotak key={i}>
              <h4>Title: {api.API}</h4>
              <h4>desc: {api.Description}</h4>
              <h4>Link: <a href={api.Link}>{api.Link}</a></h4>
              <h4>Cors: {api.Cors}</h4>
            </DivKotak>
          )
        })
      )}
    </>
  )
}

const Load = styled.h3`
  text-align: center;
  top: 100px;
`

const DivKotak = styled.div`
  margin: 10px auto;
  border: 2px solid #826990;
  width: 90%;   
  box-sizing: border-box;
`
export default App;

