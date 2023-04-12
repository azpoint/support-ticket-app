import { useState } from "react"
// import { toast } from "react-toastify"

import { FaSignInAlt } from "react-icons/fa"

function Login() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const {email, password} = formData

    const onChange = (e) => {
        setFormData( prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()

        
    }

  return (
    <>
        <section className="flex flex-col items-center">
            <h1 className="flex items-center text-3xl gap-x-4">
                <FaSignInAlt /> Login
            </h1>
            <p className="text-2xl text-gray-500">Please log in to get support</p>
        </section>

        <section className="flex flex-col items-center w-2/4 mx-auto my-10">
            <form className="space-y-4 items-center w-full" onSubmit={onSubmit}>
                

                <div>
                    <input type="email" id="email" value={email} name="email" onChange={onChange} placeholder="Enter your email" required/>
                </div>

                <div>
                    <input type="password" id="password" value={password} name="password" onChange={onChange} placeholder="Enter your password" required/>
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
export default Login