import React, { useState } from "react";
import api from "../utils/api";

const Register = (props) => {
	const [firstname, setFirstname] = useState("");
	const [lastname, setLastname] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [message, setMessage] = useState(null);

	const handleSubmit = (event) => {
		event.preventDefault();
		setIsLoading(true);
		let body = {
			firstname,
			lastname,
			email,
			password,
		};

		api
			.post("/padawans/register", body)
			.then((response) => {
				setMessage(response.data.message);
			})
			.catch((error) => {
				setIsLoading(false);
				setMessage(error.response.data.message);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};
	return (
		<div className="">
			<h1>hello register</h1>
			{isLoading ? (
				<span>is loading</span>
			) : (
				<form onSubmit={handleSubmit}>
					<div className="">
						<label>Fistname</label>
						<input
							onChange={(event) => setFirstname(event.target.value)}
							type="text"
							required
						/>
					</div>

					<div className="">
						<label>Lastname</label>
						<input
							onChange={(event) => setLastname(event.target.value)}
							type="text"
							required
						/>
					</div>
					<div className="">
						<label>Username</label>
						<input
							onChange={(event) => setEmail(event.target.value)}
							type="text"
							required
						/>
					</div>
					<div className="">
						<label>Password</label>
						<input
							onChange={(event) => setPassword(event.target.value)}
							type="password"
							required
						/>
					</div>
					<br />
					<button type="submit">Inscrire</button>
					<br />
					{message && <span>{message}</span>}
				</form>
			)}
		</div>
	);
};
export default Register;
