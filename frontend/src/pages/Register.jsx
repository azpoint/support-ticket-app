import { useState } from "react";
import { toast } from "react-toastify";
import { FaUser } from "react-icons/fa";
//Redux
import { useSelector, useDispatch } from "react-redux";
import { register } from "../features/auth/authSlice";

export default function Register() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
		password2: "",
	});

	const { name, email, password, password2 } = formData;

	//Redux
	const dispatch = useDispatch();

	const { user, isLoading, isSuccess, message } = useSelector(
		(state) => state.auth
	);
	//Redux end

	const onChange = (e) => {
		setFormData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const onSubmit = (e) => {
		e.preventDefault();

		if (password !== password2) {
			toast.error("Passwords don't match");
		} else {
			const userData = {
				name,
				email,
				password,
			};

			dispatch(register(userData));
		}
	};

	return (
		<>
			<section className="heading">
				<h1>
					<FaUser /> Register {user}
				</h1>
				<p>Please create an account</p>
				<section className="form">
					<form onSubmit={onSubmit}>
						<div className="form-group">
							<input
								type="text"
								className="form-control"
								id="name"
								value={name}
								name="name"
								onChange={onChange}
								placeholder="Enter your name"
							/>
						</div>

						<div className="form-group">
							<input
								type="email"
								className="form-control"
								id="email"
								value={email}
								name="email"
								onChange={onChange}
								placeholder="Enter your email"
							/>
						</div>

						<div className="form-group">
							<input
								type="password"
								className="form-control"
								id="password"
								value={password}
								name="password"
								onChange={onChange}
								placeholder="Enter your password"
							/>
						</div>

						<div className="form-group">
							<input
								type="password"
								className="form-control"
								id="password2"
								value={password2}
								name="password2"
								onChange={onChange}
								placeholder="Confirm password"
							/>
						</div>

						<div className="form-group">
							<button className="btn btn-block">Submit</button>
						</div>
					</form>
				</section>
			</section>
		</>
	);
}
