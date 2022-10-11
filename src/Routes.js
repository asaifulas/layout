import { Dashboard, SupportAgent, TableChart } from '@mui/icons-material';
import ContactUs from './components/pages/contactUs';
import Home from './components/pages/home'
import DeviceData from './components/pages/table';

const Routes = [
    {
        type: "collapse",
        name: "Home",
        key: "home",
        icon: <Dashboard/>,
        route: "/home",
        component: <Home/>
    },
    {
        type: "collapse",
        name: "Device List",
        key: "device",
        icon: <TableChart/>,
        route: "/devices",
        component: <DeviceData/>
    },
    {
        type: "collapse",
        name: "Contact Us",
        key: "contact",
        icon: <SupportAgent/>,
        route: "/contact-us",
        component: <ContactUs/>
    }
];

export default Routes