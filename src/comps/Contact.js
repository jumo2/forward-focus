import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import logo from '../assets/FF_NoBack_FF_Only.svg'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import {useState} from "react";


const useStyles = makeStyles((theme) => ({

    root: {
        '& .MuiInput-input':{
            textColor: 'white',
            color: 'white'
        },
        '& label.Mui-focused': {
            color: 'red',
        },
        '& label':{
            color: 'white',
            borderBottomColor: 'white',
        },

        '& .MuiInput-underline:after': {
            borderBottomColor: 'white',
            color:'white',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: 'red',
            },
        },
            '& > *': {
                margin: theme.spacing(1),
                textColor: 'white',
                fullWidth: 'true',
                color: 'white',
                border: 'red'
                //backgroundColor: '#fcfcfb',
            },
        },
        input: {
            color: "red",
            border: '1px solid #FFF',
        }
    }));


function Contact() {
    const classes = useStyles();
    const [contactInfo, setContactInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        message: "",
    });

    const handleChange = (event) => {
        setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
        console.log(contactInfo)
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(contactInfo)
        setContactInfo({
            firstName: "",
        lastName: "",
        email: "",
        message: "",
        })


    }



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
                    <img className="Logo" src={logo} alt=""></img>
                </Grid>
                <Grid style={{ color: "white" }} direction="column" justify="flex-end" alignItems="flex-start"
                    item xs={12} sm={6}>
                    <br></br>
                    <Typography variant="h3" >Are you ready to LEVEL UP?</Typography>
                    <br></br>
                    <form className={classes.root} autoComplete="off">
                        <TextField  name= "firstName" id="firstName" label="First Name:" fullWidth="true" value={contactInfo.firstName} onChange={handleChange}/>
                        <TextField  name= "lastName" id="lastName" label="Last Name:" fullWidth="true" value={contactInfo.lastName} onChange={handleChange}/>
                        <TextField name= "email" id="email" label="Email Address:" fullWidth="true"  type="email" value={contactInfo.email} onChange={handleChange}/>
                        <TextField name="message" id="message " label="Message..." fullWidth="true" multiline="true" value={contactInfo.message} onChange={handleChange}/>
                        
                    </form>
                    <Button className="join-now-button" style={{margin: "10px"}}variant="outlined" color="red" onClick={handleSubmit}>Submit</Button>
                </Grid>
            </Grid>
        </Container>
        </div>
    )
}


export default Contact;
