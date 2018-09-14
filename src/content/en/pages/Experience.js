import Routes from "../../../constants/Routes";
import ExperienceCompany from '../static/ExperienceCompany';

export default {
    PAGE_TITLE: 'My Experience',
    PAGE_NAVIGATION: {
        BACK_BUTTON_TEXT: '<span class="hide-on-mobile">Back to</span> Portfolio',
        BACK_BUTTON_LINK: Routes.PORTFOLIO,
        FORWARD_BUTTON_TEXT: '<span class="hide-on-mobile">Go to</span> Contact',
        FORWARD_BUTTON_LINK: Routes.CONTACT
    },
    SEO: {
        DESCRIPTION: 'What my skills are and how I gained them over the years of working in IT industry.',
        KEYWORDS: 'stefan, lazarevic, developer',
    },
    EXPERIENCE: ExperienceCompany,
    CRITICAL_CSS: `

    `
};
