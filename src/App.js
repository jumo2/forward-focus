import './App.css';
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import logo from './assets/FF_NoBack_FF_Only.svg'
import appBarLogo from './assets/FF_NoBack_FullWord.svg'
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
            <AppBar position="static">
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
                <br></br> 
            </Container>

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
        </div>
    );
}

export default App;
