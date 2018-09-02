import Routes from "../../../constants/Routes";
import ExperienceCompany from '../static/ExperienceCompany';

export default {
    PAGE_TITLE: 'Experience',
    PAGE_NAVIGATION: {
        BACK_BUTTON_TEXT: 'Back to projects',
        BACK_BUTTON_LINK: Routes.PROJECTS,
        FORWARD_BUTTON_TEXT: 'Go to contact',
        FORWARD_BUTTON_LINK: Routes.CONTACT
    },
    EXPERIENCE: ExperienceCompany,
    CRITICAL_CSS: `
        *,*::before,*::after{-webkit-box-sizing:border-box;box-sizing:border-box}*::-moz-focus-inner{border:0}html{-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}body{margin:0;text-rendering:optimizeLegibility}a{text-decoration:none}ul{list-style:none;padding-left:0;margin:0}.container::before,.row::before,.container::after,.row::after{display:table;content:" "}.container::after,.row::after{clear:both}.container{position:relative;width:100%;padding-left:15px;padding-right:15px}.container{margin-left:auto;margin-right:auto}@media screen and (min-width:480px){.container{max-width:460px}}@media screen and (min-width:576px){.container{max-width:540px}}@media screen and (min-width:768px){.container{max-width:720px}}@media screen and (min-width:992px){.container{max-width:960px}}@media screen and (min-width:1200px){.container{max-width:1090px}}.row{margin-left:-15px;margin-right:-15px}.col-12{position:relative;width:100%;min-height:1px;float:left;padding-left:15px;padding-right:15px;z-index:2}.col-sm-12{position:relative;width:100%;min-height:1px;float:left;padding-left:15px;padding-right:15px;z-index:2}.col-md-3{position:relative;width:100%;min-height:1px;float:left;padding-left:15px;padding-right:15px;z-index:2}.col-md-4{position:relative;width:100%;min-height:1px;float:left;padding-left:15px;padding-right:15px;z-index:2}.col-md-8{position:relative;width:100%;min-height:1px;float:left;padding-left:15px;padding-right:15px;z-index:2}.col-md-9{position:relative;width:100%;min-height:1px;float:left;padding-left:15px;padding-right:15px;z-index:2}.col-12{max-width:100%}@media screen and (min-width:576px){.col-sm-12{max-width:100%}}@media screen and (min-width:768px){.col-md-3{max-width:25%}.col-md-4{max-width:33.33333%}.col-md-8{max-width:66.66667%}.col-md-9{max-width:75%}}.text--bold{font-weight:700}.text--thin{font-weight:300}.text--gray{color:#cfcfcf}.text--orange{color:#f09f44}.text--left{text-align:left}.text--right{text-align:right}.text--center{text-align:center}@media screen and (min-width:576px){.text-sm--center{text-align:center}}@media screen and (min-width:768px){.text-md--left{text-align:left}.text-md--right{text-align:right}}body{font-family:'Open Sans',sans-serif;font-size:14px;font-weight:400}h1,h2,h3,h4,h5,p{margin:0}h1{font-size:2em;line-height:2em}h2{font-size:1.65em;line-height:1.55em}h3{font-size:1.4em;line-height:1.3em}h4{font-size:1.3em;line-height:1.2em}p{font-size:1.15em;line-height:2.2em;color:rgba(26,26,26,0.8)}body{background-color:#f5f5f5}.page__title{color:#333348;font-weight:300;font-size:3em;margin-bottom:40px}#header{padding:10px 0}.logo{margin-bottom:10px}@media screen and (min-width:768px){.logo{margin-bottom:0}}.logo>a{position:relative}.logo>a:after{content:'';background:#f09f44;position:absolute;bottom:-6px;left:0;height:2px;width:0}.page__header{background-color:#3d3d57;border-bottom:4px solid #f09f44;margin-bottom:40px}#navigation{height:0;overflow:hidden}@media screen and (min-width:768px){#navigation{padding-top:15px}}@media screen and (min-width:576px){#navigation{height:auto}}.navigation__list li{display:block;list-style:none;vertical-align:middle;text-align:left;margin-left:-15px;margin-right:-15px}.navigation__list li .navigation__link{display:block;padding:10px 15px}@media screen and (min-width:576px){.navigation__list li{display:inline-block;margin-left:-4px}.navigation__list li .navigation__link{padding:5px 20px}}.navigation__link{color:#cfcfcf;padding:2px 12px}.navigation__link.active{color:#f09f44}@media screen and (min-width:768px){.navigation__link{padding:2px 10px}}.hamburger{display:block;float:right;margin-top:15px}.hamburger div{width:25px;height:4px;background-color:white;margin:3px 0}@media screen and (min-width:576px){.hamburger{display:none}}.company{padding:10px 35px;border:1px solid #ececec;background-color:#fff;margin-bottom:40px}.company__title{position:relative;margin:15px 0 30px}.company__title span:first-child{color:#222;font-size:1.5em;font-weight:500}.company__title span:last-child{font-size:0.8em;font-weight:300;color:#222}.company__subtitle{font-size:1.4em;font-weight:500;margin:25px 0}.company__about,.company__roles{margin-bottom:15px}.company__roles{margin-top:15px}.company-role__description{border-left:2px solid #ececec}.company__role:last-child .company-role__description{border-left:0;padding-left:42px}.company-role__title{font-size:1.2em;font-weight:500;padding-top:0;padding-left:15px;padding-right:0;padding-bottom:30px}.company-role__title:before{content:'';position:relative;display:inline-block;vertical-align:middle;width:10px;height:10px;border-radius:50%;background:#cfcfcf;left:-18px}.company-role__description{padding-top:0;padding-left:40px;padding-right:0;margin-bottom:30px}.fa-external-link-alt{font-size:0.7em;margin:0 5px;color:#f09f44;display:inline-block;vertical-align:middle}
    `
};
