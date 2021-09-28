import { useState,useEffect } from 'react'

import { useCreatePost } from '../hooks/usePostHook'
import { useMutation } from '@apollo/client'
import { CREATE_POST_MUTATION } from '../graphql/mutation/post_mutation'


const PostComponent = () => {


	const [image,setImage] = useState('')

	const [ getUrl, { data, error,loading } ] = useMutation(CREATE_POST_MUTATION)

	const fileHandler = (e) => {
		const file = e.target.files[0]
		console.log(file)
		getUrl({variables: {image: file}  })
	}

	useEffect( () => {
		if(data){
			setImage(data.createPost)
		}
	},[data]) 

	return (
		<div>
			<input type = 'file'
				onChange = { fileHandler } 
			/>

			<img src= { image } />
		</div>
	)
}

export default PostComponent 