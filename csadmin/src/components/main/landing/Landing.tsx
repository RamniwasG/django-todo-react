import { Button } from 'reactstrap';
import React from 'react';
import './../../../App.css';

function Landing(props: any) {

	function handleOnClick() {
		props.history.push("/login");
	}

	return (
		<div className="App">
			<header className="App-header">
				Welcome to CloudScouts Admin App<br />
				<h1>click here to go on <Button type="button" color="primary" onClick={handleOnClick}>Login</Button> page</h1>
		</header>
		</div>
	);
}

export default Landing;
