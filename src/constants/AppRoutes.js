import Routes from './Routes';

import IndexPage from '../pages/index/index.page';
import AboutPage from '../pages/about/about.page';
import ExperiencePage from '../pages/experience/experience.page';
import ContactPage from '../pages/contact/contact.page';
import NotFoundPage from '../pages/errors/404.page';

const routes = [
    {
        path: Routes.INDEX,
        exact: true,
        component: IndexPage
    },
    {
        path: Routes.ABOUT,
        exact: true,
        component: AboutPage
    },
    {
        path: Routes.EXPERIENCE,
        exact: true,
        component: ExperiencePage
    },
    {
        path: Routes.CONTACT,
        exact: true,
        component: ContactPage
    },
    {
        path: Routes.ALL,
        component: NotFoundPage
    },
];

export default routes;
