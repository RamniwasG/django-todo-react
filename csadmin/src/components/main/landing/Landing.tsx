import { Button } from 'reactstrap';
import React from 'react';
import './../../../App.css';

function Landing(props: any) {
	return (
		<div className="App">
			<header className="App-header">
				Welcome to CloudScouts Admin App<br />
				<h1>click here to go on <Button type="button" color="primary" onClick={() => props.history.push("/login")}>Login</Button> page</h1>
			</header>
		</div>
	);
}

export default Landing;
