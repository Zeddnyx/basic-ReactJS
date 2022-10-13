export default function PropsArray({ all }) {
return (
<>
  {all.map((isiArray) => {
  return (
    <>
      <h1>{isiArray.judul}</h1> 
      <h1>{isiArray.isi}</h1> 
    </>
  )
  })}
</>
)
}
