

import { Container,Grid,Icon,Header,Form,Label,Button } from 'semantic-ui-react'
import { useCreateUser } from '../hooks/usersHook'


// pages 
import Loading from './Loading'


import 'semantic-ui-css/semantic.min.css'
import './register.css'

const Register = () => {
	return(
		<div className = 'Register'>
			<Container>
				<div className = 'display-flex'>
					<Icon name = 'arrow left' />
					<p>Back to home screen</p>
				</div>

				<Grid stackable>
					<Grid.Row>
						<Grid.Column width = { 10 } only = 'computer tablet' >
							<div className = 'register-header' >
								<section className = 'register-support'>
									<Header as = 'h3' className = 'hero-support'>Whats on your mind</Header>
									<Header as = 'h1' className = 'hero-header'>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</Header>
								</section>
							</div>
						</Grid.Column>
						{useCreateUser()}
					</Grid.Row>
				</Grid>
			</Container>
		</div>
	)
}

export default Register