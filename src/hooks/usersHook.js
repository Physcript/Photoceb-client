
import { useState,useEffect } from 'react'
import { Container,Grid,Icon,Header,Form,Label,Button,Message } from 'semantic-ui-react'
import { Link } from 'react-router-dom'


// pages 
import Loading from '../pages/Loading'

import { CREATE_USER_MUTATION } from '../graphql/mutation/user_mutation' 
import { useMutation } from '@apollo/client'
import { USER_INFO_QUERY } from '../graphql/query/user_query'
import { useQuery } from '@apollo/client'


import 'semantic-ui-css/semantic.min.css'

const useUser = () => {

	let { data,loading,error ,refetch} = useQuery(USER_INFO_QUERY)

	useEffect(() => {
		if(data){
			console.log(data)
		}
	},[data])

	return(
		{data,loading,error,refetch}
	)	
}


const useCreateUser = () => {


	let [registerData, setRegisterData] = useState({
	firstName:'',
	lastName:'',
	email:'',
	password:'',
	confirmPassword:'',
	})

	let [registerError,setRegisterError] = useState({})

	const onChange = (e) => {
		const { name,value } = e.target
		console.log(name,value)
		setRegisterData( (val) => ({ ...val, [name]:value }) ) 
	}

	const [ user, { data, loading, error, called }] = useMutation(CREATE_USER_MUTATION,{
		onCompleted: (val)=> {
			setRegisterData( (e) => ({
				firstName:'',
				lastName:'',
				email:'',
				password:'',
				confirmPassword:''
		}) )
			setRegisterError({})
		},
		onError(e){
			setRegisterError( e.graphQLErrors[0].extensions.errors  ) 
		}
	})

	const registerHandler = (e) => {

		e.preventDefault()
		user({
			variables:{
				firstName: registerData.firstName,
				lastName: registerData.lastName,
				email: registerData.email,
				password: registerData.password,
				confirmPassword: registerData.confirmPassword
			}
		})
	}
	return(


		<Grid.Column width = { 6 }>

							<div className = 'register-form'>
								{ loading ? (<Loading />) : (
								<div className = 'r-form'>
									{ data ? (

									<Message positive>
						    <Message.Header>User Created</Message.Header>
						    <p>
						      Login to your <b>special offers</b> page to see now.
						    </p>
						  	</Message>
										) : '' }
									<Header as = 'h3' className = 'hero-support'>Register</Header>
									<br />
									<div className = 'display-flex-row'>
										<Header as = 'h5' className = 'hero-support' >Firstname</Header>
										<Form.Input  fluid
											name = 'firstName'
											value = { registerData.firstName }
											onChange = { onChange } 
											error = { registerError.firstName }
										/>	
										<Header as = 'h5' className = 'hero-support'>Lastname</Header>
										<Form.Input fluid 
										name = 'lastName'
										value = { registerData.lastName }
										onChange = { onChange } 
											error = { registerError.lastName }
										/>	
										<Header as = 'h5' className = 'hero-support' >Email</Header>
										<Form.Input  fluid	
										name = 'email'
										value = { registerData.email }
										onChange = { onChange }
											error = { registerError.email }
										/>	
										<Header as = 'h5' className = 'hero-support'>Password</Header>
										<Form.Input fluid 
										name = 'password'
										value = { registerData.password }
										onChange = { onChange }
											error = { registerError.password }
										/>	
										<Header as = 'h5' className = 'hero-support'>Confirm Password</Header>
										<Form.Input fluid 
										name = 'confirmPassword'
										value = { registerData.confirmPassword }
										onChange = { onChange }
											error = { registerError.confirmPassword }
										/>
							
									</div>

									<div className = 'grid-2'>
										<button onClick = { registerHandler } >Register</button>
										<Button as = { Link } to = '/'>Cancel</Button>
									</div>
						
								</div>
								) }
							</div>
		</Grid.Column>
	)
}


export {

	useCreateUser,
	useUser
}

