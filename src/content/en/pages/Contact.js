import Routes from "../../../constants/Routes";

export default {
    PAGE_TITLE: 'Contact me',
    CONTACT_ME_TEXT: `
        Hey there! Thank you for your interest in contacting me! I am currently not open for hiring, but if you wanna get in touch, talk to me about your new awesome project or just say hi, feel free to reach out at <a href="mailto:contact@lazarevicstefan.com">contact@lazarevicstefan.com</a>
    `,
    PAGE_NAVIGATION: {
        BACK_BUTTON_TEXT: '<span class="hide-on-mobile">Back to</span> Experience',
        BACK_BUTTON_LINK: Routes.EXPERIENCE,
        FORWARD_BUTTON_TEXT: '<span class="hide-on-mobile">Back to</span> Home',
        FORWARD_BUTTON_LINK: Routes.INDEX
    },
    SEO: {
        DESCRIPTION: 'Connect with Stefan on social media or start developing your next bussiness idea together.',
        KEYWORDS: 'stefan, lazarevic, web, contact, developer, mail',
    },
    CRITICAL_CSS: `

    `
};
