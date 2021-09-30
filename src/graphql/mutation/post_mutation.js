
import { gql } from '@apollo/client'

export const CREATE_POST_MUTATION = gql`
	
	mutation createPost( $image: Upload ){
		createPost(image: $image){
			url
			public_id
		}
	}
	`

export const DELETE_POST_IMAGE_MUTATION = gql`
	mutation deleteCreatePost( $public_id:String ){
		deleteCreatePost( public_id: $public_id )
	}
`


export const CREATE_POST_V2_MUTATION = gql`
	mutation create_post( $image: String ){
		create_post( image: $image ){
			_id
			firstName
			email
			createdAt
			user
		}
	}
`