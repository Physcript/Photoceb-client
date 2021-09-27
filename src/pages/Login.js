
import { Grid,Label,Form,Button,Container,Icon,Header } from 'semantic-ui-react'

import Loginc from '../components/Loginc'

import 'semantic-ui-css/semantic.min.css'
import './login.css'

const Login = () => {
	return(
		<div className = 'login' >
				<Grid container style = {{ marginTop: '50px' }}>

					<Grid.Row>
						<Grid.Column>
							<Icon name = 'arrow left' /> Back to homescreen			
						</Grid.Column>
					</Grid.Row>
					<Grid.Row >
						
						<Loginc />
						
					</Grid.Row>
				</Grid>	
		</div>
	)
}

export default Login