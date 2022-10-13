import React from 'react'

export default function Pages({ meme }){
  return (
    <div className='bg-slate-500 rounded'>
      <img src={meme.url} alt={meme.name} />
      <h5 className='p-2'>{meme.name}</h5>
    </div>
  )
}

