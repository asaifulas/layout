import { Dashboard } from '@mui/icons-material';
import React from 'react'
import Home from './components/pages/home'

const Routes = [
    {
        type: "collapse",
        name: "Home",
        key: "home",
        icon: <Dashboard/>,
        route: "/home",
        component: <Home/>
    }
];

export default Routes