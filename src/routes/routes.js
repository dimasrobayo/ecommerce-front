import LayoutBasic from '../layouts/LayoutBasic';

//pages
import Home from '../pages/home';
import Error404 from '../pages/error404';

const routes = [
    {
        path: "/",
        layout: LayoutBasic,
        component: Home,
        exact: true,
    },
    {
        layout: LayoutBasic,
        component: Error404,
    }
];

export default routes;