
import { useEffect,useState } from 'react'



import { Button,Icon } from 'semantic-ui-react'
import { useMutation,useQuery } from '@apollo/client'
import { CREATE_LIKE_MUTATION,CREATE_DISLIKE_MUTATION } from '../graphql/mutation/post_mutation'
import { GET_INFO_LIKE_BUTTON_QUERY } from '../graphql/query/post_query'


import useCountLikeDislikeHook from '../hooks/useCountLikeDislikeHook'

import 'semantic-ui-css/semantic.min.css'

const LikeDislikeComponent = ({props}) => {


	const [ post,setPost ] = useState(props)

	const [ statusButton,setStatusButton ] = useState({
		like: false,
		dislike: false,
	})

	const [likeMutation , { data: likeData ,loading: likeLoading ,error: likeError } ] = useMutation(CREATE_LIKE_MUTATION)
	const [dislikeMutation, { data: dislikeData , loading: dislikeLoading, error: dislikeError } ] = useMutation(CREATE_DISLIKE_MUTATION)
	const likeHandler = (e) => {
		e.preventDefault()
		likeMutation({
			variables: {
				postId: post._id
			}
		})
		refetch()

	}

	const dislikeHandler = (e) => {
		e.preventDefault()
		dislikeMutation({
			variables:{
				postId: post._id
			}
		})
		refetch()

	}


	const [ counts,setCounts ] = useState({})

	const { data,loading,error,refetch } = useCountLikeDislikeHook(post)

	const { data: dataInfo, loading: loadingInfo, error:errorInfo, refetch: refetchInfo } = useQuery(GET_INFO_LIKE_BUTTON_QUERY,{
		variables: {
			postId: post._id
		}
	})

	const chkLike = () => {

		if(statusButton.dataInfo.getLikeInfo.like){

			return 'heart red'

		}
		return 'heart'

	}

	const chkDislike = () => {

		if(statusButton.dataInfo.getLikeInfo.dislike){

			return 'thumbs down red'

		}
		return 'thumbs down'

	}

	useEffect(() => {
		
		setCounts( {data} )
		setStatusButton( {dataInfo} )
		refetch()
		refetchInfo()

	},[dislikeData,likeData,data,dataInfo])

	return(
		<div className = 'padding-1 gap display-flex'>
			<Button onClick = { likeHandler } > Like { counts.data ? counts.data.getCountLikeDislike.countLike : '' } 
				<span style = {{ paddingLeft: '5px' }}></span>
				<Icon name = { statusButton.dataInfo ? (
					chkLike()
				) : ''} /></Button>
			<Button onClick = { dislikeHandler }>Dislike { counts.data ? counts.data.getCountLikeDislike.countDislike : '' } 
				<span style = {{ paddingLeft: '5px' }}></span>
				<Icon name = { statusButton.dataInfo ? (
					chkDislike()
				): '' } /> </Button>
		</div>
	)
}

export default LikeDislikeComponent