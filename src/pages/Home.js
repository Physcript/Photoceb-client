

import { Container,Image,Grid,Menu ,Icon,Message , Header, Segment, Label} from 'semantic-ui-react'

import Headers from '../components/Headers'

import('semantic-ui-css/semantic.min.css')
import('./home.css')

const Home = () => {
    return(


        <div className = 'Home'>
         <Headers/>
            <Container>
                <Grid stackable>
                    <Grid.Row>
                        <Grid.Column width = {8} >
                            <div className = 'display-flex'>
                                <Header className = 'hero-header' as = 'h1'>POPULAR</Header>
                                <Header className = 'hero-support' as = 'h3'>TODAY</Header>
                            </div>
                            <Image src = 'https://res.cloudinary.com/dnnq8kne2/image/upload/v1632551276/tim-mossholder-hOF1bWoet_Q-unsplash_b6jrle.jpg'/>
                            
                            <div className = 'display-flex-sb stackable'>
                                <div className = 'display-flex'>
                                    <p>Like: 122</p>
                                    <p>Coment: 122</p>
                                </div>
                                <div>
                                   <p>Published by: Aaron</p>
                                </div>
                            </div>

                        </Grid.Column>

                        <Grid.Column width = {1} >
                   
                        </Grid.Column>


                        <Grid.Column width = {7}>
                            <section className = 'section-home' >
                                <Header className = '' as = 'h3'className = 'hero-support'>PHOTOCEB IS HERE FOR YOU</Header>
                                <p>We design this website for you to become instant celebrity so you wont feel alone.  People may Like or dislike your photo regarding on your image. In a week you can be more popular in your place and you become famous in no time, so come and join us.</p>
                            </section>

                            <section className = 'section-home'>
                                <Header className = '' as = 'h3'className = 'hero-support' >BE A CELEBRITY IN NO TIME</Header>
                            </section>

                            <section className = 'section-home'>
                                <Grid>
                                    <Grid.Row>
                                        <Grid.Column width = {7}>
                                            <Image src = "https://res.cloudinary.com/dnnq8kne2/image/upload/c_scale,h_273,w_250/v1632553293/matheus-ferrero-W7b3eDUb_2I-unsplash_thskca.jpg" />
                                            <div className = 'display-flex-sb'>
                                                Followers: 512
                                            </div>
                                        </Grid.Column>
                                        <Grid.Column width = {7}>
                                            <Image src = "https://res.cloudinary.com/dnnq8kne2/image/upload/c_scale,h_273,w_250/v1632553281/charles-deluvio-Mv9hjnEUHR4-unsplash_zgkn1z.jpg" />
                                            <div className = 'display-flex-sb'>
                                                Followers: 412
                                            </div>
                                        </Grid.Column>
                                       
                                    </Grid.Row>
                                </Grid>
                            </section>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Container>
        </div>
    )
}

export default Home