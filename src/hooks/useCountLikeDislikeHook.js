

import { useState,useEffect } from 'react'

import { useQuery } from '@apollo/client'
import { getCountLikeDislike } from '../graphql/query/post_query'

const useCountLikeDislikeHook = (props) => {


	const {data,loading,error,refetch} = useQuery( getCountLikeDislike,{
		variables:{
			postId: props._id
		}
	}) 


	useEffect(()=>{



	},[data])

	return(
		
		{ data,loading,error,refetch }

	)

}

export default useCountLikeDislikeHook