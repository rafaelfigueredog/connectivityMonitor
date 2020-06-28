import React, { useState } from 'react';
import { ThemeProvider, createMuiTheme, makeStyles  } from '@material-ui/core/styles';
import Switch from "@material-ui/core/Switch";
import Header from './components/Header'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop: '60px', 
  },
}));


export default function App() {

  const [darkMode, setdarkMode] = useState(false)
  const classes = useStyles(); 
  const themeSettings = createMuiTheme({
    palette: {
      primary: {main: '#0d47a1'},
      secondary: {main: '#e65100'},
      typography: {fontFamily: 'Bitter'}, 
      type: darkMode === false ? 'light' : 'dark'
    }
  });

  const handleThemeChange = () => {
    setdarkMode(!darkMode);
  };


  return (
    <div className={classes.root}>
      <ThemeProvider theme={themeSettings}>
          <Header />
          <Switch checked={darkMode} onChange={handleThemeChange} />
      </ThemeProvider>
    </div>
  );
}


