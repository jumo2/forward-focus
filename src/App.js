import './App.css';
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import logo from './assets/Ff_Everywhere.svg'
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
            <Container maxWidth="xl" className="App">
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <Card className="card-dark" elevation={0}>
                            <CardContent>
                                <h1>Helping individuals achieve their goals...</h1>
                                <p>We can help you by developing a customize plan that will <em>focus</em> on moving your <em>forward</em> in your journey</p>
                            </CardContent>
                            <CardActions className="card-action-custom">
                                <Button className="join-now-button" variant="outlined" color="red">Join Now</Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid
                        direction="row"
                        justify="flex-start"
                        alignItems="flex-start"
                        item xs={12} sm={6}>
                        <img className="Logo" src={logo}></img>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
}

export default App;
