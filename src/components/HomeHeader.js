
import { Container,Grid,Button,Label,Header,Form,Image,Menu,Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import 'semantic-ui-css/semantic.min.css'

 
const HomeHeader = () => {
	return(
		<div className = 'HomeHeader'>
			<Grid>
				<Grid.Row className = 'middle aligned row' >
					<Grid.Column computer = { 1 } mobile = { 3 } tablet = { 3 }  className = 'v-align' >
						<img  className = 'logo-fix' src = 'https://res.cloudinary.com/dnnq8kne2/image/upload/v1632819279/Group_622_njxi5v.png' /> 
					</Grid.Column>
					<Grid.Column computer = { 4 } wide = { 4 } mobile = { 5 } >
						<Form.Input fluid size = 'small' style = {{ padding: '10px' }}  placeholder = 'Search user..'/>
					</Grid.Column>

					<Grid.Column className = 'right floated' tablet = { 3 } mobile = { 3 } computer = { 1 }>
						<Image className = 'floated right' src = 'https://res.cloudinary.com/dnnq8kne2/image/upload/c_scale,h_30,w_30/v1632553281/charles-deluvio-Mv9hjnEUHR4-unsplash_zgkn1z.jpg' circular />
					</Grid.Column>
					<Grid.Column>
						John
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