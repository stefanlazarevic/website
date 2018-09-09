import Routes from "../../../constants/Routes";

export default {
    PAGE_TITLE: 'My portfolio',
    PAGE_NAVIGATION: {
        BACK_BUTTON_TEXT: 'Back to about',
        BACK_BUTTON_LINK: Routes.ABOUT,
        FORWARD_BUTTON_TEXT: 'Go to work',
        FORWARD_BUTTON_LINK: Routes.WORK
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
            THUMBNAIL_URL: '/img/portfolio/d2d-deluxe-optimized.png',
            DESCRIPTION: 'Platform that automates movie trailer publication in 86 destination through partner websites and social networks such as Facebook, Youtube and Twitter.',
            TAGS: [
                'Laravel',
                'Angular',
                'Scss',
                'MySql',
                'Apache',
                'Git',
                'Webpack',
                'Docker',
            ]
        },
        {
            TITLE: 'My Portfolio',
            SCHEME_CLASS: 'portfolio-scheme',
            LIVE_URL: '',
            GITHUB_URL: 'https://github.com/stefanlazarevic/website',
            THUMBNAIL_URL: '/img/portfolio/my-portfolio-optimized.png',
            DESCRIPTION: 'Well...',
            TAGS: [
                'React',
                'Express',
                'Sass',
                'Git',
                'Webpack'
            ],
        },
        {
            TITLE: 'Signature creator',
            SCHEME_CLASS: 'signature-scheme',
            LIVE_URL: 'https://stefanlazarevic.github.io/signature-creator/',
            GITHUB_URL: 'https://github.com/stefanlazarevic/signature-creator',
            THUMBNAIL_URL: '/img/portfolio/signature-creator-optimized.png',
            DESCRIPTION: 'Simple custom signature image creator written in pure Javascript.',
            TAGS: [
                'Html',
                'Css',
                'Javascript',
                'Git'
            ],
        },
        {
            TITLE: 'The Autominer - Car Sales Tool',
            SCHEME_CLASS: 'autominer-scheme',
            LIVE_URL: 'https://theautominer.com/',
            GITHUB_URL: '',
            THUMBNAIL_URL: '/img/portfolio/theautominer-optimized.png',
            DESCRIPTION: 'Sales application for the automobile industry. It allows users to target audiences precisely, generate new leads and enhance customer retention. Autominer automatically tracks calls and messages initiated within the app, streamlining analysis and followup.',
            TAGS: [
                'Laravel',
                'Bootstrap',
                'Scss',
                'JQuery',
                'MySql',
                'Gulp',
                'Git',
                'Docker',
            ],
        },
        {
            TITLE: 'Threedium Portfolio',
            SCHEME_CLASS: 'threedium-scheme',
            LIVE_URL: 'https://threedium.co.uk/',
            GITHUB_URL: '',
            THUMBNAIL_URL: '/img/portfolio/threedium-optimized.png',
            DESCRIPTION: 'Portfolio website for 3D advertising company.',
            TAGS: [
                'Laravel',
                'Sass / BEM',
                'ES6',
                'JQuery',
                'Gulp',
                'Vagrant',
            ],
        },
        {
            TITLE: 'JSEasy',
            SCHEME_CLASS: 'jseasy-scheme',
            LIVE_URL: 'https://stefanlazarevic.github.io/jseasy/0.1.0/',
            GITHUB_URL: 'https://github.com/stefanlazarevic/jseasy',
            THUMBNAIL_URL: '/img/portfolio/jseasy-optimized.png',
            DESCRIPTION: 'Collection of functions written in FP style inspired by legendary underscore.js',
            TAGS: [
                'ES6',
                'JSDoc',
                'Jest',
                'Travis',
                'Webpack',
            ],
        },
        {
            TITLE: 'Meinunfallauto',
            SCHEME_CLASS: 'meinunfall-scheme',
            LIVE_URL: 'https://www.meinunfallauto.de/',
            GITHUB_URL: '',
            THUMBNAIL_URL: '/img/portfolio/meinunfallauto-optimized.png',
            DESCRIPTION: 'Meinunfallauto is one of the lead portals about damaged automobiles on Austrian and German market.',
            TAGS: [
                'Laravel',
                'JQuery',
                'Scss',
                'Bootstrap',
                'SEO',
                'MySql',
                'Git',
                'Gulp',
                'Vagrant'
            ],
        },
        {
            TITLE: 'Fudeks - Rent a Car',
            SCHEME_CLASS: 'rentacar-scheme',
            LIVE_URL: 'https://fudeksrentacar.rs/',
            GITHUB_URL: '',
            THUMBNAIL_URL: '/img/portfolio/fudeks-rentacar-optimized.png',
            DESCRIPTION: 'Application that helps users quickly rent a car in capital of Serbia.',
            TAGS: [
                'Laravel',
                'JQuery',
                'Bootstrap',
                'Scss',
                'MySql',
                'Git',
                'Gulp',
                'Vagrant',
                'Bash',
            ],
        }
    ]
};
