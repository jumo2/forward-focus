import './App.css';
import React from 'react'
import Contact from './comps/Contact'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import appBarLogo from './assets/FF_NoBack_FullWord.svg'
import analysis from './assets/analysis.svg'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Menu, MenuItem, Paper } from '@material-ui/core';
import { styled } from '@material-ui/core/styles';


function App() {

    const CustomMenuItem = styled(MenuItem)({
        '&:hover': {
            backgroundColor: '#282c34 !important',
            color: 'white'
          },
        background: 'white',
        color: '#282c34',
        padding: '2px',
        height: '5vh',
        width: '20vw'
      });

const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick =(event)=>{
      console.log(event);
  }


    return (
        <div>
            <AppBar position="static" elevation="0">
                <Toolbar className="App">
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleClick}>
                        <MenuIcon />
                    </IconButton>
                    <img className="app-bar-logo" alt="" src={appBarLogo} />
                </Toolbar>
        
            </AppBar>

        <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <CustomMenuItem onClick={handleMenuItemClick}>Home</CustomMenuItem>
        <CustomMenuItem onClick={handleMenuItemClick}>Services</CustomMenuItem>
        <CustomMenuItem onClick={handleMenuItemClick}>About</CustomMenuItem>
        <CustomMenuItem onClick={handleMenuItemClick}>Testimonials</CustomMenuItem>
        <CustomMenuItem onClick={handleMenuItemClick}>Contact</CustomMenuItem>
      </Menu>
            
            <div id="App" maxWidth="md">
                <Container>
                <Grid container spacing={2}>
                    <Grid alignItems="flex-end"
                        item xs={12} sm={12}>
                        <Card className="card-dark" elevation={0}>
                            <CardContent>
                                <Typography variant="h3">Making the Uncommon Common...</Typography>
                                <Typography variant="p">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</Typography>
                            </CardContent>
                            <CardActions className="card-action-custom">
                                <Button className="join-now-button" variant="outlined" color="red">Level Up!</Button>
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
            </div>
            <div className="wave-container" elevation={0}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#282c34" fill-opacity="1" d="M0,224L60,229.3C120,235,240,245,360,250.7C480,256,600,256,720,234.7C840,213,960,171,1080,138.7C1200,107,1320,85,1380,74.7L1440,64L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
            </div>


            {/* Services Section */}
            <div id="services" className="section" style={{ background: "white" }} elevation={0}>
                <Container>
                <Grid
                    container
                    spacing={0}
                    direction="row"
                    justify="space-between"
                    alignItems="center"
                >
                    <Grid justify="center" alignItems="center"
                        item xs={12} sm={6}>
                        <img className="analysis-svg" alt="" src={analysis}></img>
                    </Grid>
                    <Grid direction="column" justify="space-between" alignItems="flex-end"
                        item xs={12} sm={6}>
                        <Paper elevation="0">
                            <Typography variant="h3">Leadership Coaching</Typography>
                            <Typography variant="p" paragraph={true}>Forward Focus offers leaders the support they need to be effective. We help leaders find deeper understanding of themselves and others. They learn to act with intention, building high-trust environments that support belonging and performance.</Typography>
                            <Typography variant="p" paragraph={true}>With Forward Focus, emerging leaders address self-limiting beliefs and push their leadership to the next level. Seasoned leaders can learn to reinvigorate their style to match today’s talent needs.</Typography>
                            <Typography variant="p" paragraph={true}>At Forward Focus, our leadership development program will be tailored to meet the specific needs and goals of your organization. The content can be delivered in the form of: <strong><em style={{color: "red"}}>one on one coaching</em></strong>, <strong><em style={{color: "red"}}>group coaching</em></strong>, <em style={{color: "red"}}><strong>SWOT analysis</strong></em> or a <strong><em style={{color: "red"}}>customized approach</em></strong> to fit your needs and schedule. We will come along side you and be your accountability partner to implement the principles learned to move your organization forward. </Typography>
                        </Paper>
                        <br></br>
                        <Paper elevation="0">
                            <Typography variant="h3">Personal Development</Typography>
                            <Typography variant="p" paragraph={true}>There's nothing worse than rolling through life in the passenger's seat. You wake up, go to work, and drift through each day with no direction or driving force behind anything that you do. Then you drive home, flip through your favorite shows, go to bed, and repeat that same cycle the next day. Weekdays all run together, and you find yourself trying to pass the time and accomplishing nothing until the weekend rolls around so you can relax, unwind, and finally enjoy yourself. But, at some point, the weekends have no meaning either, and you have no real reason to enjoy them and like the weekdays, they all start to run together too. You see people around you moving ahead and you start to wonder what they have that you don't, and what they're doing that you're not.</Typography>
                            <Typography variant="p" paragraph={true}>At Forward Focus we will give you the direction, skills and a mental “toughness” that all successful and happy people have. We will show you that success and happiness is a learned skill and not some magic bullet, an advantage that others have over you or something they are born with.

</Typography>
                        </Paper>
                    </Grid>
                </Grid>



                {/* <Grid container spacing={2}>
                    <Grid justify="flex-end" alignItems="flex-end"
                     item xs={12} sm={4}>
                         <Card  elevation={3}>
                            <CardContent >
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
                <Grid>
                    
                </Grid> */}
                <br></br>
            </Container>
            </div>


            {/* About Section */}

            <div id="about" className="section" style={{ background: "white" }}>
                <Container>
                <Grid
                    container
                    spacing={4}
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                >

                    <Grid direction="column" justify="flex-start" alignItems="center"
                        item xs={12} sm={6}>
                        <Typography variant="h3">I'm John Koller...</Typography>
                        <Typography varient="p" paragraph={true}>I have spent the last 27 years in the Fire Service, moving up the ranks and developing people to make the organization, and the people in it, better than they ever have been. I have a bachelor’s degree in Public Administration and a Master’s Degree in Emergency Management. I also attended the National Fire Academy in their Executive Fire Officer Program which is a four year program in executive leadership.</Typography>
                    <Typography varient="overline" paragraph={true}>Don't get it confused <em> I am not special </em> I am just like you</Typography>
                    <Typography varient="p" paragraph={true}>I have spent the last twenty (20) plus years figuring out how to master mental toughness and develop the skills needed to take complete control of my life and to be successful in anything you do.</Typography>
                    <Typography varient="p" paragraph={true}>I have learned what it takes and my ABSOLUTE OBLIGATION to others is that I teach them now what took me over twenty (20) years to learn on my own. It will take things like confidence, dedication, stamina, determination, courage and a belief in yourself. These are NOT traits you are born with but you can absolutely learn them and how to harness them to improve every facet of your life.</Typography>
                    </Grid>
                    <Grid justify="flex-start" alignItems="center"
                        item xs={12} sm={5}>
                        <img src="https://via.placeholder.com/350" alt=""></img>
                    </Grid>
                </Grid>
                <br></br>
                </Container>
            </div>
                
            <div id="contact" className="wave-footer-container">
                <br></br>
                <Contact />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFF" fill-opacity="1" d="M0,224L60,229.3C120,235,240,245,360,250.7C480,256,600,256,720,234.7C840,213,960,171,1080,138.7C1200,107,1320,85,1380,74.7L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
            </div>

        </div>
    );
}

export default App;
