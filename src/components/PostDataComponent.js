import { useState,useEffect } from 'react'

import { Container,Grid,Button,Label,Header,Form, Image, Icon} from 'semantic-ui-react'

import { useQuery,useMutation } from '@apollo/client'
import { getPost } from '../graphql/query/post_query'



import 'semantic-ui-css/semantic.min.css'
import './post-data-component.css'

const PostDataComponent = ({props}) => {

	const [ user,setUser ] = useState({
		_id: '',
		firstName: '',
		lastName: '',
		email:'',
		verified: '',
		image: '',
	})



	const [ limit, setLimit ] = useState(2)

	const [ post , setPost ] = useState([])


	const pag = (e) => {
		setLimit( limit + 2 )
	}

	const { data,loading,error,called }= useQuery(getPost,{
		variables:{
			limit
		},
		onCompleted: val => {
			window.onscroll = () => {
			
			if( document.documentElement.scrollHeight - document.documentElement.scrollTop === window.innerHeight ) {
				pag()
			}
	}
		}
	})



	useEffect(()=>{

		setUser( (val) => ({ ...val,
			_id: props._id,
			firstName: props.firstName,
			lastName:  props.lastName,
			email: props.email,
			verified: props.verified,
			image:  props.image,
		}) )


		if(data) setPost(data.getPost) 

	},[props,data])

	return(

		<div className = 'posttest'>
			{	post.map( e =>  (

			<Grid className = 'pdc' key = { e._id } >
				<Grid.Row style = {{ padding: 0 }}>
					<Grid.Column tablet = { 16 } computer = { 12 } className = 'centered grid' >

						<div className = 'display-flex-sb'>
							<div className = 'padding-1 gap v-align '>
								<Image src = { e.postUser.image } circular />
								<Label size = 'large' >{e.firstName}</Label>
								<Label size = 'tiny'>10 mins ago</Label>
							</div>
							<div className = 'padding-1 v-align'>
								<Icon name = 'ellipsis vertical'/>
							</div>
						</div>

					</Grid.Column>
				</Grid.Row>

				<Grid.Row style = {{ padding: 0 }}>
					<Grid.Column tablet = { 16 } computer = { 12 }	 className = 'centered grid' >

						<div className = 'padding-1'>

							<Image src = { e.image } />

						</div>

						<div className = 'padding-1 gap display-flex'>
							<Button>Like</Button>
							<Button>Dislike</Button>
						</div>

					</Grid.Column>
				</Grid.Row>
			</Grid>

			) ) }

			<Button onClick = {pag} >t</Button>
		</div>

		
	)
}

export default PostDataComponent