
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

import './loading.css'

const Loading = () => {
	return (
		<div className = 'loading'>
			<Loader active inline='centered' />
		</div>
	)
}

export default Loading