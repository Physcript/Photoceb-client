

import { gql } from '@apollo/client'

export const getPost = gql`
	
	query getPost($limit: Int){ 
		getPost(limit: $limit) {
		_id
		createdAt
		email
		firstName
		image
		postUser {
			_id
			email
			firstName
			createdAt
			image
			}
		}
	}

`