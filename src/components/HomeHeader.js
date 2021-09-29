
import { useState,useEffect } from 'react'

import { Container,Grid,Button,Label,Header,Form,Image,Menu,Icon } from 'semantic-ui-react'
import { Link,useHistory } from 'react-router-dom'

import { useUser } from '../hooks/usersHook'

import 'semantic-ui-css/semantic.min.css'

 
const HomeHeader = () => {
	const history = useHistory()

	const [ user,setUser ] = useState ({
		_id: '',
		firstName: '',
		lastName: '',
		email:'',
		verified: '',
	})

	const { data,loading,error,refetch } = useUser()


	useEffect(()=>{
		if(data){
			refetch()
			setUser( (val) => ({
				...val,
				_id: data.checkAuth._id,
				firstName: data.checkAuth.firstName,
				lastName: data.checkAuth.lastName,
				email: data.checkAuth.email,
				verified: data.checkAuth.verified
			}))

		}
	},[data,Link])

	return(
		<div className = 'HomeHeader'>
			<Grid>
				<Grid.Row className = 'middle aligned row' >
					<Grid.Column computer = { 1 } mobile = { 3 } tablet = { 3 }  className = 'v-align' >
						<Image className = 'logo-fix' src = 'https://res.cloudinary.com/dnnq8kne2/image/upload/v1632819279/Group_622_njxi5v.png' /> 
					</Grid.Column>
					<Grid.Column computer = { 4 } wide = { 4 } mobile = { 5 } >
						<Form.Input fluid size = 'small' style = {{ padding: '10px' }}  placeholder = 'Search user..'/>
					</Grid.Column>

					<Grid.Column className = 'right floated' tablet = { 3 } mobile = { 3 } computer = { 1 }>
						<Image className = 'floated right' src = { user.image ? user.image : 'https://res.cloudinary.com/dnnq8kne2/image/upload/c_scale,h_30,w_30/v1632408683/ucgxnbq2q0re1suhd6kp.jpg' } circular />
					</Grid.Column>
					<Grid.Column>
						{ user.firstName }
					</Grid.Column>	
					<Grid.Column computer = {5} wide = {5} only = 'computer wide'>
							<ul className = 'ul-default' >
								<li>Home	</li>
								<li>Notification </li>
								<li>Setting </li>
								<li>Logout</li>
							</ul>
					</Grid.Column>
					<Grid.Column textAlign = 'right' only = 'mobile tablet' mobile = { 3 } >
						<Icon name = 'bars' />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</div>
	)
}
export default HomeHeader