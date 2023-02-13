import Input from './Input'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

export default function Index(){

  const valid = yup.object().shape({
    username: yup.string().required("username is required!"),
    email: yup.string().required('email is required').email('email is not valid'),
    password: yup.string().required().min(6, "password must be at least 6 characters"),
    passConfirm: yup.string().required().oneOf([yup.ref('password'), "password must be match!"])
  })

  const { handleSubmit, register, formState:{errors} } = useForm({
    resolver: yupResolver(valid),
  })

  const callBackSubmit = data => {
    console.log(data)
  }

  return <div>
  <form onSubmit={handleSubmit(callBackSubmit)}>

    <Input label='Username'
      id='username' type="text" place='name' 
      register={{ ...register('username') }}
    />
    <p>{errors.username?.message}</p>

    <Input label='email'
      id='email' type="email" place='email'
      register={{ ...register('email') }}
    />
    <p>{errors.email?.message}</p>

    <Input label='Password'
      id='password' type="password" place='Password'
      register={{ ...register('password') }}
    />
    <p>{errors.password?.message}</p>

    <Input label='Confirm password'
      id='confirmPass' type="password" place='confirm password' 
      register={{ ...register('passConfirm') }}
    />
    <p>{errors.confirmPass?.message}</p>
    
    <button type="submit">submit</button>

  </form>
  </div>
}
