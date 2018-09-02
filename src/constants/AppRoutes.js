import Routes from './Routes';

import IndexPage from '../pages/index/index.page';
import AboutPage from '../pages/about/about.page';
import ExperiencePage from '../pages/experience/experience.page';
import ContactPage from '../pages/contact/contact.page';
import NotFoundPage from '../pages/errors/404.page';

function buildStaticPaths(base) {
    const url = base.split(/\/(.+)/)[1];
    return `/(${url}|${url}.html|${url}.htm)/`;
}

const routes = [
    {
        path: Routes.HOME,
        exact: true,
        component: IndexPage,
    },
    {
        path: buildStaticPaths(Routes.INDEX),
        exact: true,
        component: IndexPage
    },
    {
        path: buildStaticPaths(Routes.ABOUT),
        exact: true,
        component: AboutPage
    },
    {
        path: buildStaticPaths(Routes.EXPERIENCE),
        exact: true,
        component: ExperiencePage
    },
    {
        path: buildStaticPaths(Routes.CONTACT),
        exact: true,
        component: ContactPage
    },
    {
        path: Routes.ALL,
        component: NotFoundPage
    },
];

export default routes;
