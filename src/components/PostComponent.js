import React , { useState,useEffect } from 'react'

import { Container,Grid,Image,Icon,Button,Input,Modal,Loader,Dimmer,Segment } from 'semantic-ui-react'

import defaultImage from './default.png'

import { useCreatePost, useDeletePostImage } from '../hooks/usePostHook'
import { useMutation,useQuery } from '@apollo/client'
import { CREATE_POST_MUTATION,DELETE_POST_IMAGE_MUTATION } from '../graphql/mutation/post_mutation'
import { USER_INFO_QUERY } from '../graphql/query/user_query'


import  PostDataComponent from './PostDataComponent'

import PostButtonComp from './PostButtonComp'

import 'semantic-ui-css/semantic.min.css'
import './post-components.css'


function modelReducer(state,action){
	switch(action.type){
		case 'close':
			return { open: false }
		case 'open':
			return { open: true, size: 'tiny' }
		default:
			return console.log('error')
	}
}


const PostComponent = ({props}) => {


	const [ state , dispatch ] = React.useReducer( modelReducer, {
		open: false
	})
	const { open, size } = state

	const [ user,setUser ] = useState({})

	const [image,setImage] = useState({})

	const [ getUrl, { data, error,loading } ] = useMutation(CREATE_POST_MUTATION)
	const [ deleteImage ] = useMutation(DELETE_POST_IMAGE_MUTATION, {
		update(proxy,result){

			console.log(result)
		}
	})


	const [postUpdate,setPostUpdate] = useState({

	})	


	const fileHandler = (e) => {
		const file = e.target.files[0]
			if(file){
				getUrl({variables: {image: file}  })
			}
	}

	const onCloseModal = () => {

			deleteImage({
				variables:{
					public_id: image.public_id
				}
			})

			if(!loading){
				dispatch({ type: 'close' })
			}
	
	} 

	const onPostModal = (val) => {
		const { data: postData, loading: postLoading, error: postError} = val


		if(postData){
			dispatch({ type: 'close' })
		}

		setPostUpdate( val )
	}


	useEffect( () => {
		if(data){
			setImage(data.createPost)
		}
		if(props){
			setUser( props )
		}

	},[data,props]) 

	return (
		<div className = 'Post-Components'>

			<div>
				<Input 
					type='file' label='Upload' accept='.jpg'  size = 'mini' fluid
					onChange = { fileHandler }
					onClick = { () => { dispatch({type: 'open' }) }  }
				/>
			</div>
			<Modal
		        size={size}
		        open={open}
		        onClose={ onCloseModal }
		    >
		    <div  className = 'post-modal display-flex-column gap'>
		    	<div className = 'display-flex v-align-only'>
		    		<Image src = { user.image } circular />
		    		<p>{ user.firstName }</p>
		    	</div>
		    	<div>
		    		<Segment className = 'image-modal'>
		    			{ loading ? (
			    		<Dimmer active>

			    			<Loader active inline='centered' className = 'padding-1' />


			    		</Dimmer>
			    		) : (
			    		<Image src = { image.url } fluid />
			    		) }


		    		</Segment>
		    	</div>
		    	<div className = 'display-flex'>
		    		<PostButtonComp dataTest = { val => onPostModal(val) } props = { image.url }  />
		    		<Button style = {{ background:'#0E566C', color: 'white' }} onClick = { onCloseModal } >Cancel</Button>
		    	</div>
		    </div>
		    </Modal>
		</div>

	)
}

export default PostComponent 