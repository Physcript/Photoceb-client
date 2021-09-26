
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