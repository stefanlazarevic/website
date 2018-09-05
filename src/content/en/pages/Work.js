import Routes from "../../../constants/Routes";

export default {
    PAGE_TITLE: 'My work',
    PAGE_NAVIGATION: {
        BACK_BUTTON_TEXT: 'Back to about',
        BACK_BUTTON_LINK: Routes.ABOUT,
        FORWARD_BUTTON_TEXT: 'Go to experience',
        FORWARD_BUTTON_LINK: Routes.EXPERIENCE
    },
    SEO: {
        DESCRIPTION: '',
        KEYWORDS: '',
    },
    WORK: [
        {
            TITLE: 'Deluxe - Direct to Debut',
            SCHEME_CLASS: 'd2d-scheme',
            LIVE_URL: 'https://www.bydeluxe.com/en/one/',
            GITHUB_URL: '',
            THUMBNAIL_URL: '/img/portfolio/d2d-deluxe.png',
            DESCRIPTION: ''
        },
        {
            TITLE: 'My Portfolio',
            SCHEME_CLASS: 'portfolio-scheme',
            LIVE_URL: '',
            GITHUB_URL: 'https://github.com/stefanlazarevic/website',
            THUMBNAIL_URL: '/img/portfolio/my-portfolio.png',
            DESCRIPTION: ''
        },
        {
            TITLE: 'Signature creator',
            SCHEME_CLASS: 'signature-scheme',
            LIVE_URL: 'https://stefanlazarevic.github.io/signature-creator/',
            GITHUB_URL: 'https://github.com/stefanlazarevic/signature-creator',
            THUMBNAIL_URL: '/img/portfolio/signature-creator.png',
            DESCRIPTION: ''
        },
        {
            TITLE: 'The Autominer - Car Sales Tool',
            SCHEME_CLASS: 'autominer-scheme',
            LIVE_URL: 'https://theautominer.com/',
            GITHUB_URL: '',
            THUMBNAIL_URL: '/img/portfolio/theautominer.png',
            DESCRIPTION: ''
        },
        {
            TITLE: 'Threedium Portfolio',
            SCHEME_CLASS: 'threedium-scheme',
            LIVE_URL: 'https://threedium.co.uk/',
            GITHUB_URL: '',
            THUMBNAIL_URL: '/img/portfolio/threedium.png',
            DESCRIPTION: ''
        },
        {
            TITLE: 'JSEasy',
            SCHEME_CLASS: 'jseasy-scheme',
            LIVE_URL: 'https://stefanlazarevic.github.io/jseasy/0.1.0/',
            GITHUB_URL: 'https://github.com/stefanlazarevic/jseasy',
            THUMBNAIL_URL: '/img/portfolio/jseasy.png',
            DESCRIPTION: ''
        },
        {
            TITLE: 'Meinunfallauto',
            SCHEME_CLASS: 'meinunfall-scheme',
            LIVE_URL: 'https://www.meinunfallauto.de/',
            GITHUB_URL: '',
            THUMBNAIL_URL: '/img/portfolio/meinunfallauto.png',
            DESCRIPTION: ''
        },
        {
            TITLE: 'Fudeks - Rent a Car',
            SCHEME_CLASS: 'rentacar-scheme',
            LIVE_URL: 'https://fudeksrentacar.rs/',
            GITHUB_URL: '',
            THUMBNAIL_URL: '/img/portfolio/fudeks-rentacar.png',
            DESCRIPTION: ''
        }
    ]
};
