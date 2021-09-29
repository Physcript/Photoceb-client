
import { gql } from '@apollo/client'


export const USER_INFO_QUERY = gql`
	query {
		checkAuth{
			_id
			firstName,
			lastName
			email,
			verified,
			image
		}
	}
`