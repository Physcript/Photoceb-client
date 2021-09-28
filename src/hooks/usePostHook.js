
import { useState,useEffect } from 'react'

import { useMutation } from '@apollo/client'
import { CREATE_POST_MUTATION } from '../graphql/mutation/post_mutation'


export const useCreatePost = ( image ) => {
	
	const [ uploadImage , { data,loading,error } ] = useMutation(CREATE_POST_MUTATION)

	useEffect( () => { 

		const url = async ( image ) => {
			const myImage = await image

			await uploadImage({
				image: myImage
			})

		}

		url()

	},[ data ])

	return (
		<> data </>
	)
}


