
import { useEffect,useState } from 'react'
import { Button } from 'semantic-ui-react'

import { useMutation } from '@apollo/client'
import { CREATE_POST_V2_MUTATION } from '../graphql/mutation/post_mutation'

const PostButtonComp = ({dataTest,props}) => {

	const [ post,setPost ] = useState({
		image: ''
	})

	const [ myData , setMyData ] = useState({
		data: undefined,
		loading: undefined,
		error: undefined,
		called: undefined,	
	})


	const [ createPost, { data,loading,error,called }] = useMutation(CREATE_POST_V2_MUTATION,{
		update(result,proxy){

		}
	})

	const postHandler = () => {

		setPost( (e) => ({ ...e,
			image: props
		}))

		createPost({
			variables:{
				image: post.iamge
			}
		})


	}

	useEffect( () => {

		if(data){
			setMyData( e => ({
				data,loading,error,called
			}) )

		}


		dataTest({data,loading,error,called})
		

	},[data,called,loading])

	return (
		<Button style = {{ background:'#0E566C', color: 'white' }} onClick = { postHandler }>Post</Button>
	)
}

export default PostButtonComp