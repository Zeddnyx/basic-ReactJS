export default function Input({ label, id, type, place, register, }) {
  return <div>
    <label htmlFor={id}>{label}</label>
    <input type={type} id={id} placeholder={place} {...register} />
  </div>
}
