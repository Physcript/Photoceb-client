
import { useState,useEffect } from 'react'
import { useCreatePost } from '../hooks/usePostHook'

import { Container,Grid,Button,Label,Header,Form } from 'semantic-ui-react'

import HomeHeader from '../components/HomeHeader'
import PostComponent from '../components/PostComponent'
 

// import { useMutation } from '@apollo/client'
// import { CREATE_POST_MUTATION } from '../graphql/mutation/post_mutation'

import { useMutation,useQuery } from '@apollo/client'
import { USER_INFO_QUERY } from '../graphql/query/user_query'

// hooks
import { useUser } from '../hooks/usersHook'

import 'semantic-ui-css/semantic.min.css'
import './dash.css'

const Dash = () => {
	
	const [ user, setUser ] = useState ({
		_id: '',
		firstName: '',
		lastName: '',
		email:'',
		verified: '',
		image: '',
	})

	const { data, loading, error, refetch } = useUser()


	useEffect( () => {
		if(data){
			setUser( (val) => ({
				...val,
				firstName: data.checkAuth.firstName,
				lastName: data.checkAuth.lastName,
				email: data.checkAuth.email,
				_id: data.checkAuth._id,
				image:  ( data.checkAuth.image ? data.checkAuth.image : 'https://res.cloudinary.com/dnnq8kne2/image/upload/c_scale,h_30,w_30/v1632408683/ucgxnbq2q0re1suhd6kp.jpg' ),
				verified:  data.checkAuth.verified
			}))
		}
	},[data])
	
	return(
		<div className = 'dash'>
				<HomeHeader props = { user }/>
				<Grid>
					<Grid.Row>
						<Grid.Column computer = { 12 } tablet = { 12 } mobile = {16}>

							<Grid>
								<Grid.Row>

									<Grid.Column className = 'column centered padding-1' computer = {5} tablet = {7} mobile = {12}  >
										<PostComponent props = { user }  />
									</Grid.Column>
								</Grid.Row>
							</Grid>

						</Grid.Column>
						<Grid.Column width = { 4 } className = '' only = 'computer tablet wide'>
						Left Panel
						</Grid.Column>
					</Grid.Row>
				</Grid>
		</div>
	)
}

export default Dash