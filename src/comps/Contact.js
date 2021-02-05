import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import logo from '../assets/FF_NoBack_FF_Only.svg'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
    root: {
        '& label.Mui-focused': {
            color: 'red',
        },
        '& label':{
            color: 'white',
            borderBottomColor: 'white',
        },

        '& .MuiInput-underline:after': {
            borderBottomColor: 'white',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'red',
            },
        },
            '& > *': {
                margin: theme.spacing(1),
                textColor: '#fcfcfb',
                fullWidth: 'true',
                color: 'white',
                border: 'red'
                //backgroundColor: '#fcfcfb',
            },
        },
        input: {
            color: "white",
            border: '1px solid #FFF',
        }
    }));




function Contact() {
    const classes = useStyles();
    return (
        <div>
        <Container className="section-dark" >
            <Grid
                container
                spacing={5}
                direction="row"
                justify="center"
                alignItems="flex-start"
            >
                <Grid direction="column" justify="flex-end" alignItems="center"
                    item xs={12} sm={6}>
                    <br></br>
                    <img className="Logo" src={logo}></img>
                </Grid>
                <Grid style={{ color: "white" }} direction="column" justify="flex-end" alignItems="flex-start"
                    item xs={12} sm={6}>
                    <br></br>
                    <Typography variant="h3" >Connect with Me</Typography>
                    <br></br>
                    <form className={classes.root} noValidate autoComplete="off">
                        <TextField color="white" id="firstName" label="First Name:" fullWidth="true" />
                        <TextField id="lastName" label="Last Name:" fullWidth="true" />
                        <TextField id="email" label="Email Address:" fullWidth="true" />
                        <TextField id="message " label="Message..." fullWidth="true" multiline="true" />
                        
                    </form>
                    <Button className="join-now-button" style={{margin: "10px"}}variant="outlined" color="red">Submit</Button>
                </Grid>
            </Grid>
        </Container>
        </div>
    )
}


export default Contact;