import React, { useRef, useState } from 'react'
import { Card, Form, Button, Alert } from 'react-bootstrap'
import { AuthContext } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'


export default function ForgotPassword() {
	const emailRef = useRef()
	const { resetPassword } = AuthContext()
	const [error, setError] = useState('')
	const [message, setMessage] = useState('')
	const [loading, setLoading] = useState(false)

	async function handleSubmit(e) {
		e.preventDefault()

		try {
			setMessage('')
			setError('')
			setLoading(true)
			await resetPassword(emailRef.current.value)
			setMessage('Check your inbox for further instructions')
		} catch {
			setError('Failed to reset password. Please try again.')
		}
		setLoading(false)
	}

	return (
		<>
			<Card>
				<Card.Body>
					<h2 className="logintop mt-2 text-center">Password Reset</h2>
					{error && <Alert variant="danger">{error}</Alert>}
					{message && <Alert variant="success">{message}</Alert>}
					<Form onSubmit={handleSubmit}>
						<Form.Group id="email">
							<Form.Label>Email</Form.Label>
							<Form.Control type="email" ref={emailRef} required /></Form.Group>

						<Button disabled={loading} className="w-100 mt-5" type="submit">Reset Password</Button>
					</Form>
					<div className="w-100 text-center mt-3">

						<Link to="/login">Login</Link></div>
				</Card.Body>
			</Card>

			<div className="logForm">
				<div className="tagMess w-100">Need to Create an account? <Link to="/signup">Sign Up</Link>
				</div>
			</div>
		</>

	)
}