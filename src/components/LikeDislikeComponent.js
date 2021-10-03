
import { useEffect,useState } from 'react'

import { Button } from 'semantic-ui-react'
import { useMutation,useQuery } from '@apollo/client'
import { CREATE_LIKE_MUTATION,CREATE_DISLIKE_MUTATION } from '../graphql/mutation/post_mutation'


import useCountLikeDislikeHook from '../hooks/useCountLikeDislikeHook'

	
const LikeDislikeComponent = ({props}) => {


	const [ post,setPost ] = useState(props)

	const [likeMutation , { data: likeData ,loading: likeLoading ,error: likeError } ] = useMutation(CREATE_LIKE_MUTATION)
	const [dislikeMutation, { data: dislikeData , loading: dislikeLoading, error: dislikeError } ] = useMutation(CREATE_DISLIKE_MUTATION)

	const likeHandler = (e) => {

		likeMutation({
			variables: {
				postId: post._id
			}
		})
		refetch()

	}

	const dislikeHandler = (e) => {

		dislikeMutation({
			variables:{
				postId: post._id
			}
		})
		refetch()

	}

	console.log(useCountLikeDislikeHook(post))

	const [ counts,setCounts ] = useState({})

	const { data,loading,error,refetch } = useCountLikeDislikeHook(post)

	useEffect(() => {
		
		setCounts( {data} )
		refetch()
		console.log(`refetch`)

	},[dislikeData,likeData,data])

	return(
		<div className = 'padding-1 gap display-flex'>
			<Button onClick = { likeHandler } >Like { counts.data ? counts.data.getCountLikeDislike.countLike : '' }  </Button>
			<Button onClick = { dislikeHandler }>Dislike { counts.data ? counts.data.getCountLikeDislike.countDislike : '' } </Button>
		</div>
	)
}

export default LikeDislikeComponent