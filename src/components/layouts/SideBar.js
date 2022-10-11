import MuiDrawer from '@mui/material/Drawer';
import { Box, Divider, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, styled, Typography } from '@mui/material';
import { ChevronLeft } from '@mui/icons-material';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import routes from '../../Routes'

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);

const SideBar = ({open, setOpen}) => {
  const navigate =  useNavigate()

  return (
    <>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <Typography variant='h6' textAlign='center'>IRHAM Module </Typography>
          <IconButton onClick={()=>setOpen(false)}>
            <ChevronLeft />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {routes.map((route) => (
            <ListItem onClick={()=>navigate(route.route)} key={route.key} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
                selected={window.location.pathname === route.route}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {route.icon}
                </ListItemIcon>
                <ListItemText primary={route.name} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Routes>
          {routes.map(route =>(
            
            <Route key={route.key} path={route.route} element={route.component} />
            ))
          }
          <Route path="*" element={<Navigate to="/home" />} />
        </Routes>

      </Box>
    </>
  )
}

export default SideBar