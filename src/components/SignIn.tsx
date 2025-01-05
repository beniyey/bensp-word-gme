import React, { useState } from 'react'
import { User } from '../types'
import { useNavigate } from 'react-router-dom'

type Credentials = {
  email: string,
  password: string
}

export default function SignIn() {

  const navigate = useNavigate()
  const [credentials, setCredentials] = useState<Credentials>({ email: "", password: "" })

  function login() {
    const users: User[] = JSON.parse(localStorage.getItem("users") as string)
    const user: User | undefined = users.find(el => el.email === credentials.email && el.password === credentials.password)

    if (user) {
      navigate("/game-page")
    } else {
      alert("user not found...")
    }
  }

  return (
    <div className='flex flex-col gap-6'>

      <h1>Please fill the required fields</h1>

      <input onChange={e => setCredentials({ ...credentials, email: e.target.value })} placeholder='Email' className='rounded-md border text-center border-gray-400' type="email" />
      <input onChange={e => setCredentials({ ...credentials, password: e.target.value })} placeholder='Password' className='rounded-md border text-center border-gray-400' type="password" />

      <button onClick={login}
        className='bg-blue-700 text-white py-4 rounded-md border-2 border-white'
      >Sign in!</button>

    </div>
  )
}
