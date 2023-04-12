import { useState } from "react"
import { toast } from "react-toastify"

import { FaUser } from "react-icons/fa"

function Register() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password2: ""
    })

    const {name, email, password, password2} = formData

    const onChange = (e) => {
        setFormData( prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        if(password !== password2) {
            toast.error("Passwords do not match")
        }
    }

  return (
    <>
        <section className="flex flex-col items-center">
            <h1 className="flex items-center text-3xl gap-x-4">
                <FaUser /> Register
            </h1>
            <p className="text-2xl text-gray-500">Please create an Account</p>
        </section>

        <section className="flex flex-col items-center w-2/4 mx-auto my-10">
            <form className="space-y-4 items-center w-full" onSubmit={onSubmit}>
                <div>
                    <input type="text" id="name" value={name} name="name" onChange={onChange} placeholder="Enter your name" required/>
                </div>

                <div>
                    <input type="email" id="email" value={email} name="email" onChange={onChange} placeholder="Enter your email" required/>
                </div>

                <div>
                    <input type="password" id="password" value={password} name="password" onChange={onChange} placeholder="Enter your password" required/>
                </div>

                <div>
                    <input type="password" id="password2" value={password2} name="password2" onChange={onChange} placeholder="Confirm password" required/>
                </div>

                <div>
                    <button className="btn-full">
                        Submit
                    </button>
                </div>
            </form>
        </section>
    </>
  )
}
export default Register