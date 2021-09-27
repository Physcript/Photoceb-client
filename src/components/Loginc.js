
import { useState,useEffect } from 'react'
import { useHistory,Link } from 'react-router-dom'

import { useMutation } from '@apollo/client'
import { LOGIN_USER_MUTATION } from '../graphql/mutation/user_mutation'

import Loading from '../pages/Loading'

import { Grid,Label,Form,Button,Container,Icon,Header} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'

const Loginc = () => {
	const history = useHistory()

	const [loginData,setLoginData] = useState({
		email: '',
		password: '',
	})

	const [loginError,setLoginError] = useState({})

	const onChange = (e) => {
		const { name,value } = e.target
		setLoginData( (val) => ({ ...val, [name]:value }) )
	}

	const [login,{ data,error,loading }] = useMutation(LOGIN_USER_MUTATION,{
		update(proxy,result){
			setLoginError('')
			localStorage.setItem('token',result.data.loginUser)
			history.push('/home')

		},
		onError(error){
			setLoginError(error.graphQLErrors[0].extensions.errors)
		}
	})


	const loginHandler = () => {
		login({
			variables:{
				email: loginData.email,
				password: loginData.password
			}
		})
	}




	return(
		<Grid.Column width = { 8 } className = 'centered column'>
			<div className  = 'Login'>
				<Grid>
					<Grid.Row>
							<Grid.Column width = {16} className  = 'centered column' >
								<Header as = 'h1' className = 'hero-header'>Login</Header>
							</Grid.Column>
					</Grid.Row>
					<Grid.Row>
							<Grid.Column width = {14} className  = 'centered column' >
								{ loading ? <Loading /> : (
								<div className = 'display-flex-row gap'>

									<div>
										{ loginError.title ? <Label color = 'red'> {loginError.title} </Label> : '' }
									</div>

									<Form.Input placeholder = 'Email' fluid 
										name = 'email'
										value = { loginData.email }
										onChange = { onChange }
									/>
									<Form.Input placeholder = 'Password' fluid type = 'password'
										name = 'password'
										value = { loginData.password }
										onChange = { onChange }
									/>
									<label>Register Here</label>
									<label>Forgot Password</label>
									<Button primary onClick = { loginHandler } >Register</Button>
								</div>
								)}
							</Grid.Column>
					</Grid.Row>
				</Grid>
			</div>
		</Grid.Column>	
						
	)
}

export default Loginc