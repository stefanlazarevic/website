import Routes from "../../../constants/Routes";

export default {
    PAGE_TITLE: 'My portfolio',
    PAGE_NAVIGATION: {
        BACK_BUTTON_TEXT: '<span class="hide-on-mobile">Back to</span> About',
        BACK_BUTTON_LINK: Routes.ABOUT,
        FORWARD_BUTTON_TEXT: '<span class="hide-on-mobile">Go to</span> Experience',
        FORWARD_BUTTON_LINK: Routes.EXPERIENCE
    },
    SEO: {
        DESCRIPTION: 'See Stefan\'s list of projects on his portfolio page and start developing your new project with him today.',
        KEYWORDS: 'stefan, lazarevic, web, portfolio, projects, work',
    },
    CRITICAL_CSS: `
        .f{display:-webkit-box;display:-ms-flexbox;display:flex}.f-col-12,.f-col-auto,.f-md-col-6{-ms-flex:0 0 auto;-webkit-box-flex:0;flex:0 0 auto;padding:0 15px}.f-col-auto{-ms-flex-positive:1;-ms-flex-preferred-size:0;-webkit-box-flex:1;flex-basis:0;flex-grow:1}*,:after,:before{-webkit-box-sizing:border-box;box-sizing:border-box}.f-grid{-ms-flex-wrap:wrap;display:-webkit-box;display:-ms-flexbox;display:flex;flex-wrap:wrap;margin:0 auto}.f-dir-col{-ms-flex-direction:column;-webkit-box-direction:normal;flex-direction:column}.f-dir-col{-webkit-box-orient:vertical}.f-justify-center{-ms-flex-pack:center;-webkit-box-pack:center;justify-content:center}.f-align-end{-ms-flex-align:end;-webkit-box-align:end;align-items:flex-end}.f-text-left{text-align:left}.f-text-center{text-align:center}.f-col-12{width:100%}.f-layer-2{z-index:2}.f-no-pad{padding:0}@media (min-width:600px){.f-sm-text-center{text-align:center}.f-grid{max-width:570px}}@media (min-width:900px){.f-md-text-left{text-align:left}.f-md-text-right{text-align:right}.f-md-col-6{width:50%}.f-grid{max-width:820px}}@media (min-width:1200px){.f-grid{max-width:1140px}}@media (min-width:1600px){.f-grid{max-width:1200px}}*,:after,:before{-webkit-box-sizing:border-box;box-sizing:border-box}:focus{outline:none}::-moz-focus-inner{border:0}html{-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}body{margin:0;text-rendering:optimizeLegibility}a{text-decoration:none}ul{list-style:none;margin:0;padding-left:0}img{width:100%}.text--bold{font-weight:700}.text--thin{font-weight:300}.text--gray{color:#cfcfcf}.text--orange{color:#f09f44}body{font-family:Open Sans,sans-serif;font-size:14px;font-weight:400}h1,h2,h4,p{margin:0}h1{font-size:2em;line-height:2em}h2{font-size:1.65em;line-height:1.55em}h4{font-size:1.3em;line-height:1.2em}p{color:rgba(26,26,26,.8);font-size:1.15em;line-height:2.2em}body{background-color:#f5f5f5}.page__title{color:#333348;font-size:3em;font-weight:300;margin-bottom:40px}.logo{display:inline-block;margin-bottom:10px}.logo>a{position:relative}.logo>a:after{background:#f09f44;bottom:-6px;content:"";height:2px;left:0;position:absolute;width:0}.page__header{-webkit-box-shadow:0 1px 2px rgba(0,0,0,.1);background-color:#3d3d57;border-bottom:4px solid #f09f44;box-shadow:0 1px 2px rgba(0,0,0,.1);margin-bottom:40px}#navigation{height:0;overflow:hidden}@media screen and (min-width:900px){#navigation{padding-top:15px}}@media screen and (min-width:600px){#navigation{height:auto}}@media screen and (min-width:600px){.navigation__list{margin-bottom:10px}}.navigation__list li{display:block;list-style:none;margin-left:-15px;margin-right:-15px;text-align:left;vertical-align:middle}.navigation__list li .navigation__link{display:block;padding:10px 15px}@media screen and (min-width:600px){.navigation__list li{display:inline-block;margin-left:-4px}.navigation__list li .navigation__link{padding:5px 20px}}.navigation__link{color:#cfcfcf;padding:2px 12px}.navigation__link.active{color:#f09f44}@media screen and (min-width:900px){.navigation__link{padding:2px 10px}}.hamburger{display:block;float:right;margin-top:18px}.hamburger div{background-color:#fff;height:4px;margin:3px 0;width:25px}@media screen and (min-width:600px){.hamburger{display:none}}.portfolio__container{border-radius:7px;margin-bottom:40px;overflow:hidden}.portfolio__image{-ms-transform:translateY(5px);-webkit-box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);-webkit-transform:translateY(5px);border-top-left-radius:7px;border-top-right-radius:7px;box-shadow:0 4px 8px 0 rgba(0,0,0,.2),0 6px 20px 0 rgba(0,0,0,.19);overflow:hidden;transform:translateY(5px)}@media screen and (min-width:900px){.portfolio__image{margin-top:4em;max-width:80%}}.portfolio__image .image{border-top-left-radius:7px;border-top-right-radius:7px}.portfolio__content{padding:0 15px 20px}.portfolio__title{margin:20px 0}.portfolio__paragraph{font-size:1em;line-height:1.5em;margin-bottom:15px}.portfolio__footer i.fab,.portfolio__footer i.fas{color:#ececec;display:inline-block;font-size:1.5em;margin-left:0;margin-right:10px}[class*=-scheme]{border-radius:7px}.tag{border:1px solid #fff;border-radius:7px;display:inline-block;margin-bottom:15px;margin-right:5px;padding:3px 5px}.d2d-scheme{background-color:#4b505a;color:#fff}.d2d-scheme .portfolio__paragraph{color:#fff}.portfolio-scheme{background-color:#68688e;color:#fff}.portfolio-scheme .portfolio__paragraph{color:#fff}.signature-scheme{background-color:#e4e4e4;color:#333}.signature-scheme .portfolio__paragraph{color:#333}.signature-scheme .tag{border-color:rgba(0,0,0,.75)}i.fab{color:grey;font-size:2.5em;margin:0 10px}i.fa-github{color:#767676}
    `,
    WORK: [
        {
            TITLE: 'Deluxe - Direct to Debut',
            SCHEME_CLASS: 'd2d-scheme',
            LIVE_URL: 'https://www.bydeluxe.com/en/one/',
            GITHUB_URL: '',
            THUMBNAIL_URL: '/img/portfolio/d2d-deluxe-optimized',
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
            THUMBNAIL_URL: '/img/portfolio/my-portfolio-optimized',
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
            THUMBNAIL_URL: '/img/portfolio/signature-creator-optimized',
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
            THUMBNAIL_URL: '/img/portfolio/theautominer-optimized',
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
            THUMBNAIL_URL: '/img/portfolio/threedium-optimized',
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
            THUMBNAIL_URL: '/img/portfolio/jseasy-optimized',
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
            THUMBNAIL_URL: '/img/portfolio/meinunfallauto-optimized',
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
            THUMBNAIL_URL: '/img/portfolio/fudeks-rentacar-optimized',
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
