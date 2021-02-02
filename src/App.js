import './App.css';
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import logo from './assets/FF_NoBack.svg'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography'

function App() {
  return (
      <div>
          <AppBar position="static">
  <Toolbar className="App">
    <IconButton edge="start"  color="inherit" aria-label="menu">
        <MenuIcon/>
    </IconButton>
  </Toolbar>
</AppBar>
    <Container maxWidth="xl" className="App"> 
        <img className="Logo" src={logo}></img>
    </Container>
    </div>
  );
}

export default App;
