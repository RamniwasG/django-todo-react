import React, { Component } from "react";

export interface LoginFormStateProps {
	isLoggedIn: boolean;
}

export interface LoginFormActionProps {
	isLoggedIn: boolean;
}

interface LoginFormState {
	loggedIn: boolean;
	username: string;
	password: string;
}

type LoginFormProps = LoginFormStateProps & LoginFormActionProps;

class LoginForm extends Component<LoginFormProps, LoginFormState> {
	constructor(props: any) {
		super(props);
		this.state = {
			loggedIn: false,
			username: "",
			password: ""
		}
	}

	render() {
		return (
			<h3>Login Form</h3>
		)
	}
}

export default LoginForm;