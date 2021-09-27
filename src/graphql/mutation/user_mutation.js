
import { gql } from '@apollo/client'
 

export const CREATE_USER_MUTATION = gql`
	mutation createUser ( 
		$firstName: String
		$lastName: String
		$email: String
		$password: String
		$confirmPassword: String
	){
		createUser(
			firstName: $firstName
			lastName: $lastName
			email: $email
			password: $password
			confirmPassword: $confirmPassword
		)
	}
`

export const LOGIN_USER_MUTATION = gql`
	mutation loginUser($email: String $password: String) {
		loginUser(email:$email password: $password)
	}
`

