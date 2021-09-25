
import { Container,Image,Grid,Menu ,Icon,Message} from 'semantic-ui-react'

import 'semantic-ui-css/semantic.min.css'
import './headers.css'

const Headers = () => {

	return(
		
		<div className = 'nav'>
			<Container className = "center-me">
				<Grid>
					<Grid.Row>
						<Grid.Column width = { 8 } className = 'logo'>
							<img src = "https://res.cloudinary.com/dnnq8kne2/image/upload/v1632544104/1_j4injr.png" />
						</Grid.Column>
						<Grid.Column width = { 8 }  only='tablet computer large monitor'>
							<Menu secondary>
					          <Menu.Item className = 'whites'
					            name = 'Home'
					            position = 'right'
					          />
					          <Menu.Item  className = 'whites'
					            name='About'
					          />
					          <Menu.Item className = 'whites'
					            name='Contact us'
					          />
					          <Menu.Item className = 'whites'
					            name='Register'
					          />
					          <Menu.Item className = 'whites'
					            name='Login'
					          />
					    	</Menu>
						</Grid.Column>
						<Grid.Column only = 'mobile' width = {8}>
							<Menu secondary >
								<Menu.Item position = 'right'>
									<Icon name = 'bars' size = 'large'/>
								</Menu.Item>
							</Menu>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Container>
		</div>
	)
}

export default Headers