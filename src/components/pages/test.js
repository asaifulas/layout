import MuiAppBar from '@mui/material/AppBar';
import SideBar from '../layouts/SideBar'
import { Box, createTheme, CssBaseline, IconButton, styled, ThemeProvider, Toolbar, Tooltip, Typography } from '@mui/material';
import { useMemo, useState } from 'react';
import { Brightness4, Brightness7, Home, Menu } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';


const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));


const Test = () => {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(true)

  const darkTheme = useMemo(()=>createTheme({
    palette:{
      mode:dark? 'dark' : 'light'
    }
  }))

  const navigate =  useNavigate()

  return (
    <ThemeProvider theme={darkTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="fixed" open={open}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={()=>setOpen(true)}
              edge="start"
              sx={{
                marginRight: 5,
                ...(open && { display: 'none' }),
              }}
            >
              <Menu />
            </IconButton>
            <Tooltip title='Go back to Homepage'>
              <IconButton sx={{mr:1}} onClick={()=>navigate('/test')}>
                <Home/>
              </IconButton>
            </Tooltip>
            <Typography variant="h6" noWrap component="div" sx={{flexGrow:1}}>
              Dashboard
            </Typography>
            <IconButton onClick={()=>setDark(!dark)}>
              {dark ? <Brightness7/> : <Brightness4/>}
            </IconButton>
          </Toolbar>
        </AppBar>
        <SideBar {...{open, setOpen}}/>
        
      </Box>
    </ThemeProvider>
  );
}

export default Test
