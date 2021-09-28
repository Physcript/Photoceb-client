
import { useState,useEffect } from 'react'
import { useCreatePost } from '../hooks/usePostHook'

import { Container,Grid,Button,Label,Header,Form } from 'semantic-ui-react'

import HomeHeader from '../components/HomeHeader'
import PostComponent from '../components/PostComponent'
 

// import { useMutation } from '@apollo/client'
// import { CREATE_POST_MUTATION } from '../graphql/mutation/post_mutation'

import 'semantic-ui-css/semantic.min.css'
import './dash.css'

const Dash = () => {
	

	const [ imageData, setImageData ] = useState({})

	const fileHandler = (e) => {
		const file = e.target.files[0]
		setImageData(file)
	}

	useEffect( () => {
		
	},[])
	
	return(
		<div className = 'Dash'>
			<Container>
				<HomeHeader />
				<PostComponent />
			</Container>
		</div>
	)
}

export default Dash