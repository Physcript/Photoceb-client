

import { Container,Grid,Icon,Header,Form,Label,Button } from 'semantic-ui-react'

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
						<Grid.Column width = { 6 }>
							<div className = 'register-form'>

								<div className = 'r-form'>
									<Header as = 'h3' className = 'hero-support'>Register</Header>
									<br />
									<div className = 'display-flex-row'>
										<Header as = 'h5' className = 'hero-support' >Firstname</Header>
										<Form.Input  fluid	/>	
										<Header as = 'h5' className = 'hero-support'>Lastname</Header>
										<Form.Input fluid />	
										<Header as = 'h5' className = 'hero-support' >Email</Header>
										<Form.Input  fluid	/>	
										<Header as = 'h5' className = 'hero-support'>Password</Header>
										<Form.Input fluid />	
										<Header as = 'h5' className = 'hero-support'>Confirm Password</Header>
										<Form.Input fluid />
										
											
									</div>

									<div className = 'grid-2'>
										<button>Register</button>
										<button>Cancel</button>
									</div>
								</div>

							</div>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
		</div>
	)
}

export default Register