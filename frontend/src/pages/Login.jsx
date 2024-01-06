import { useState } from "react"
import {toast} from 'react-toastify'
import {FaSignInAlt} from 'react-icons/fa'

//Redux
import {useSelector, useDispatch} from 'react-redux'
import {login} from '../features/auth/authSlice'

export default function Login() {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	})

	const { email,password} = formData;


	//Redux
	const dispatch = useDispatch();

	const { user, isLoading, isSuccess, message } = useSelector(
		(state) => state.auth
	);
	//Redux end


	const onChange = e => {
		setFormData((prevState => ({
			...prevState,
			[e.target.name]: e.target.value
		})))
	}

	const onSubmit = (e) => {
		e.preventDefault()

		const userData = {
			email,
			password
		}

		dispatch(login(userData))

	}



  return (
	<>
		<section className="heading">
			<h1>
				<FaSignInAlt/> Login
			</h1>
			<p>Login to get support</p>
			<section className="form">
				<form onSubmit={onSubmit}>
					
					<div className="form-group">
						<input type="email" className="form-control" id="email" value={email} name='email' onChange={onChange} placeholder="Enter your email"/>
					</div>

					<div className="form-group">
						<input type="password" className="form-control" id="password" value={password} name='password' onChange={onChange} placeholder="Enter your password"/>
					</div>

					<div className="form-group">
						<button className="btn btn-block">Submit</button>
					</div>
				</form>
			</section>
		</section>

		
	</>
  )
}