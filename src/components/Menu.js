import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GiphyContext } from "../shared/GiphyContext";

function Menu() {
	const { user, clearState } = useContext(GiphyContext);
	return (
		<nav className="menu">
			{!user.username && (
				<>
					<NavLink className="link" to="/login" activeClassName="active">
						Login
					</NavLink>
					<NavLink className="link" to="/signup" activeClassName="active">
						Signup
					</NavLink>
				</>
			)}
			{user.username && (
				<>
					<NavLink className="link" to="/search" activeClassName="active">
						Search
					</NavLink>
					<NavLink className="link" to="/chest" activeClassName="active">
						Favorites
					</NavLink>
					<button className="link" onClick={clearState}>
						Logout
					</button>
				</>
			)}
		</nav>
	);
}

export default Menu;