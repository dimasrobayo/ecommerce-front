import LayoutBasic from '../layouts/LayoutBasic';

//pages
import Home from '../pages/home';
import Shopping from '../pages/shopping';
import Error404 from '../pages/error404';

const routes = [
    {
        path: "/",
        layout: LayoutBasic,
        component: Home,
        exact: true,
    },
    {
        path: "/shopping",
        layout: LayoutBasic,
        component: Shopping,
        exact: true,
    },
    {
        layout: LayoutBasic,
        component: Error404,
    }
];

export default routes;