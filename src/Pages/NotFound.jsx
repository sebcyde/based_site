import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
	return (
		<div className="Page flexCol justify-center">
			<h2>Oops..</h2>
			<p>This page doesn't exist...'</p>

			<Link to="/">
				<p>Return</p>
			</Link>
		</div>
	);
}

export default NotFound;
