
import { gql } from '@apollo/client'

export const CREATE_POST_MUTATION = gql`
	
	mutation createPost( $image: Upload ){
		createPost(image: $image){
			url
			public_id
		}
	}
	`

