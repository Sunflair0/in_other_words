import React, { useState } from 'react'
import { Button, Alert } from 'react-bootstrap'
import { AuthContext } from "../contexts/AuthContext"
import { Link, useHistory } from 'react-router-dom'

export default function Splash_Search() {
	const [error, setError] = useState("")
	const { currentUser, logout } = AuthContext("")
	const history = useHistory()


	async function handleLogout() {
		setError('')

		try {
			await logout()
			history.push('/login')
		} catch {
			setError('Failed to Log Out')
		}
	}

	return (
		<>
			<div>
				In Other Words
			</div>
			<div className="logForm">
				{error && <Alert variant="danger">{error}</Alert>}
				<strong>Email:</strong> {currentUser.email}
				<Link to="/chest_fav" className="btn btn-primary">Treasure Chest</Link>
				<div className="tagMess w-100">
					<Button variant="link" onClick={handleLogout}>Log Out</Button>
				</div>
			</div>



			<div className="pinkbar"></div>
		</>
	)
}