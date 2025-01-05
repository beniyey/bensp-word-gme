import React, { useState } from 'react'
import { User } from '../types'
import { useNavigate } from 'react-router-dom'

function initiateUser(): User {
    return {
        firstName: "",
        lastName: "",
        email: "",
        solved: [],
        languagePairs: [{
            from: "ENG",
            to: "HEB"
        }],
        level: 1,
        streak: "",
        password: ""
    }
}

export default function SignUp() {

    const [user, setUser] = useState<User>(initiateUser)

    const navigate = useNavigate()

    function register() {
        if (localStorage.getItem("users")) {
            const users: User[] = JSON.parse(localStorage.getItem("users") as string)
            if (users.find(element => element.email === user.email)) {
                alert("user already exists...")
                return
            }
            users.push(user)
            localStorage.setItem("users", JSON.stringify(users))
        } else {
            localStorage.setItem("users", JSON.stringify([user]))
        }
        navigate("/game-page")
    }

    return (
        <div className='flex flex-col gap-6'>

            <h1>Please fill the required fields</h1>

            <input onChange={e => setUser({ ...user, firstName: e.target.value })} placeholder='First name' className='rounded-md border text-center border-gray-400' type="text" />
            <input onChange={e => setUser({ ...user, lastName: e.target.value })} placeholder='Last name' className='rounded-md border text-center border-gray-400' type="text" />
            <input onChange={e => setUser({ ...user, email: e.target.value })} placeholder='Email' className='rounded-md border text-center border-gray-400' type="email" />
            <input onChange={e => setUser({ ...user, password: e.target.value })} placeholder='Password' className='rounded-md border text-center border-gray-400' type="password" />

            <button onClick={register}
                className='bg-blue-700 text-white py-4 rounded-md border-2 border-white'
            >Sign up!</button>

        </div>
    )
}
