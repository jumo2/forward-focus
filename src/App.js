import './App.css';
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import logo from './assets/FF_NoBack_FF_Only.svg'
import appBarLogo from './assets/FF_NoBack_FullWord.svg'
import wave from './assets/Wave.svg'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';


function App() {
    return (
        <div>
            <AppBar position="static" elevation="0">
                <Toolbar className="App">
                    <IconButton edge="start" color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <img src={appBarLogo} />
                </Toolbar>
            </AppBar>
            <Container maxWidth="md" className="App">
                <Grid container spacing={2}>
                    <Grid justify="flex-end" alignItems="flex-end"
                     item xs={12} sm={12}>
                        <Card className="card-dark" elevation={0}>
                            <CardContent>
                                <h1>Helping individuals put their future in <em style={{color: "red"}}>focus</em>.</h1>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p> 
                            </CardContent>
                            <CardActions className="card-action-custom">
                                <Button className="join-now-button" variant="outlined" color="red">Join Now</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    {/* <Grid
                        direction="row"
                        justify="flex-end"
                        alignItems="flex-end"
                        item xs={12} sm={6}>
                        <img className="Logo" src={logo}></img>
                    </Grid>*/}
                </Grid>
                
            </Container>
            <div  className="wave-container">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#282c34" fill-opacity="1" d="M0,224L60,229.3C120,235,240,245,360,250.7C480,256,600,256,720,234.7C840,213,960,171,1080,138.7C1200,107,1320,85,1380,74.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
            </div>


            {/* Services Section */}
            <Container style={{background: "white"}}>
                
                <Grid container spacing={2}>
                    <Grid justify="flex-end" alignItems="flex-end"
                     item xs={12} sm={4}>
                         <Card  elevation={3}>
                            <CardContent>
                                <h2>Leadership Coaching</h2>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                            </CardContent>
                         </Card>
                     </Grid>
                                         <Grid justify="flex-end" alignItems="flex-end"
                     item xs={12} sm={4}>
                         <Card  elevation={3}>
                            <CardContent>
                               <h2>Youth Mentorship</h2>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                            </CardContent>
                         </Card>
                     </Grid>
                                         <Grid justify="flex-end" alignItems="flex-end"
                     item xs={12} sm={4}>
                         <Card  elevation={3}>
                            <CardContent>
                                <h2>Adult Mentorship</h2>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                            </CardContent>
                         </Card>
                     </Grid>
                </Grid>               
            </Container>

        <div className="wave-footer-container">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#273036" fill-opacity="1" d="M0,224L60,229.3C120,235,240,245,360,250.7C480,256,600,256,720,234.7C840,213,960,171,1080,138.7C1200,107,1320,85,1380,74.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
        </div>

        </div>
    );
}

export default App;
