import React, { useRef, useState } from 'react'
import { Card, Form, Button, Alert } from 'react-bootstrap'
import { useContext } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'


export default function Login() {
	const emailRef = useRef()
	const passwordRef = useRef()
	const { login } = useContext()
	const [error, setError] = useState('')
	const [loading, setLoading] = useState(false)
	const history = useHistory()

	async function handleSubmit(e) {
		e.preventDefault()

		try {
			setError('')
			setLoading(true)
			await login(emailRef.current.value.passwordRef.current.value)
			history.push("/")
		} catch {
			setError('Failed to sign in. Try again.')
		}
		setLoading(false)
	}

	return (
		<>
			<Card>
				<Card.Body>
					<h2 className="logintop mt-2 text-center">Log In</h2>
					{error && <Alert variant="danger">{error}</Alert>}
					<Form onSubmit={handleSubmit}>
						<Form.Group id="email">
							<Form.Label>Email</Form.Label>
							<Form.Control type="email" ref={emailRef} required /></Form.Group>
						<Form.Group id="password">
							<Form.Label>Password</Form.Label>
							<Form.Control type="password" ref={passwordRef} required />
						</Form.Group>
						<Button disabled={loading} className="w-100 mt-5" type="submit">Log In</Button>

					</Form>
					<div className="w-100 text-center mt-3">

						<Link to="/forgotpassword">Forgot Password?</Link></div>
				</Card.Body>
			</Card>

			
				<div className="tagMess w-100">Need to Create an account? <Link to="/signup">Sign Up</Link>
				<div className="logForm"></div>
			</div>
		</>

	)
}