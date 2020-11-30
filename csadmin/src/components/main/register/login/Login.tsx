// import React, { Component } from "react";

// export interface LoginFormStateProps {
// 	isLoggedIn: boolean;
// }

// export interface LoginFormActionProps {
// 	isLoggedIn: boolean;
// }

// interface LoginFormState {
// 	loggedIn: boolean;
// 	username: string;
// 	password: string;
// }

// type LoginFormProps = LoginFormStateProps & LoginFormActionProps;

// class LoginForm extends Component<LoginFormProps, LoginFormState> {
// 	constructor(props: any) {
// 		super(props);
// 		this.state = {
// 			loggedIn: false,
// 			username: "",
// 			password: ""
// 		}
// 	}

// 	render() {
// 		return (
// 			<h3>Login Form</h3>
// 		)
// 	}
// }

// export default LoginForm;

import React from 'react';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Checkbox, makeStyles } from '@material-ui/core';
import { Form, Formik, useField } from 'formik';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import IconButton from '@material-ui/core/IconButton';
// import * as yup from 'yup';
// import IntlMessages from './../../../../IntlMessages';
// import { formattedMessage } from 'react-intl';
import Box from '@material-ui/core/Box';
import { grey } from '@material-ui/core/colors';
// import {Fonts} from '../../../shared/constants/AppEnums';
// import AppAnimate from '../../../@crema/core/AppAnimate';
import './login.scss'

const useStyles = makeStyles((theme) => ({
	logo: {
		height: 24,
	},
	textField: {
		width: '100%',
	},
	card: {
		maxWidth: 576,
		width: '100%',
		textAlign: 'center',
		padding: 24,
		overflow: 'hidden',
		boxShadow:
			'0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
		[theme.breakpoints.up('lg')]: {
			padding: 32,
		},
		[theme.breakpoints.up('xl')]: {
			padding: '48px 64px',
		},
	},
	form: {
		textAlign: 'left',
		marginBottom: 12,
		[theme.breakpoints.up('xl')]: {
			marginBottom: 32,
		},
	},
	button: {
		width: '100%',
		height: 44,
	},
	iconColor: {
		color: theme.palette.text.primary,
	},
	pointer: {
		cursor: 'pointer',
	},
}));
const MyTextField = (props: any) => {
	const [field, meta] = useField(props);
	const errorText = meta.error && meta.touched ? meta.error : '';
	return (
		<TextField
			{...props}
			{...field}
			helperText={errorText}
			error={!!errorText}
		/>
	);
};

// const validationSchema = yup.object({
//   email: yup
//     .string()
//     .email("") //(<IntlMessages id='validation.emailFormat' />)
//     .required("true"), //(<IntlMessages id='validation.emailRequired' />),
//   password: yup
//     .string()
//     .required() //(<IntlMessages id='validation.passwordRequired' />),
// });

const Signin = (props: any) => {
	const classes = useStyles(props);
	// const {messages} = formattedMessage();
	return (
		<div className="LoginContainer">
			<Box
				pb={0}
				py={{ xl: 8 }}
				display='flex'
				flex={1}
				flexDirection='column'
				alignItems='center'
				justifyContent='center'>
				<Card className={classes.card}>
					<Box
						mb={{ xs: 5, xl: 8 }}
						display='flex'
						alignItems='center'
						justifyContent='center'>
						<Box mb={1.5} fontWeight="bold" fontSize={20}>
							Login
						</Box>
					</Box>

					<Formik
						validateOnChange={true}
						initialValues={{
							email: '',
							password: '',
						}}
						// validationSchema={validationSchema}
						onSubmit={(data, { setSubmitting, resetForm }) => {
							resetForm();
						}}>
						{({ isSubmitting }) => (
							<Form className={classes.form} noValidate autoComplete='off'>
								<Box mb={{ xs: 3, xl: 8 }}>
									<MyTextField
										placeholder="enter your email"
										label="Username"
										name='email'
										variant='outlined'
										className={classes.textField}
									/>
								</Box>

								<Box mb={{ xs: 3, xl: 8 }}>
									<MyTextField
										type='password'
										placeholder="enter your password"
										label="password"
										name='password'
										variant='outlined'
										className={classes.textField}
									/>
								</Box>

								<Box
									mb={{ xs: 3, xl: 8 }}
									display='flex'
									flexDirection={{ xs: 'column', sm: 'row' }}
									alignItems={{ sm: 'center' }}>
									<Box display='flex' flexDirection='row' alignItems='center'>
										<Box ml={-1.5}>
											<Checkbox />
										</Box>
										<Box component='span' fontSize={14}>
											Remember me
										</Box>
									</Box>
									<Box
										component='span'
										ml={{ sm: 'auto' }}
										color='primary.main'
										mt={{ xs: 2, sm: 0 }}
										fontWeight="bold"
										fontSize={14}
										className={classes.pointer}>
											Forgot Password
									</Box>
								</Box>
								<Button
									variant='contained'
									color='primary'
									type='submit'
									disabled={isSubmitting}
									className={classes.button}>
										Login
								</Button>
							</Form>
						)}
					</Formik>

					<Box
						mb={{ xs: 2, xl: 4 }}
						display='flex'
						flexDirection={{ xs: 'column', sm: 'row' }}
						justifyContent={{ sm: 'center' }}
						alignItems={{ sm: 'center' }}>
						<Box component='span' mr={4} color={grey[600]} fontSize={14}>
							Login with
						</Box>
						<Box display='inline-block'>
							<IconButton>
								<FacebookIcon className={classes.iconColor} />
							</IconButton>
							<IconButton>
								<GitHubIcon className={classes.iconColor} />
							</IconButton>
							<IconButton>
								<TwitterIcon className={classes.iconColor} />
							</IconButton>
						</Box>
					</Box>

					<Box color={grey[700]} fontSize={14} fontWeight="bold">
						<Box component='span' mr={2}>
							don't have account
						</Box>
						<Box
							component='span'
							color='primary.main'
							className={classes.pointer}>
							Sign Up
						</Box>
					</Box>
				</Card>
			</Box>
		</div>
	);
};

export default Signin;
