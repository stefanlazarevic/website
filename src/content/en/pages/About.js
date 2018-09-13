import RoutesExternal from "../../../constants/RoutesExternal";
import RouteTitles from "../../../constants/RouteTitles";
import Routes from "../../../constants/Routes";

export default {
    PAGE_TITLE: 'About',
    ABOUT_ME_TITLE: 'About me',
    ABOUT_ME: `
        I'm Stefan Lazarević, a 23 year old tall and friendly full stack web developer at <a href="${RoutesExternal.SCOPIC_SOFTWARE}" hreflang="en" title="${RouteTitles.SCOPIC_SOFTWARE}" class="link">Scopic Software</a>. I live in Belgrade, Serbia with my family. My spare time I spend with my girlfriend, working out, studying japanese, watchingWestworld and The Walking Dead and improving my programming skills. I have been building websites and web applications since the late 2016 and that became my passion over the years. I am very proud of the work I do and I continuously work to enhance my knowledge and skills in this area. Beside programming I also enjoy traveling around the country and outside exploring new cultures and meeting great people. Although the majority of the year, you will find me behind a computer screen. My life goal is to visit Tokyo, New York and Moscow.
    `,
    BRIEF_HISTORY_TITLE: 'Brief history',
    BRIEF_HISTORY: `
        I started software development while still in high school, after being introduced to programming by a teacher. My first programs were written in C and Java. I attended private courses at <a href="${RoutesExternal.VINCA}"  hreflang="sr-rs" title="${RouteTitles.VINCA}" class="link">Computing School "Vinča"</a> after high school where I learned how to do web programming in java. On friend recommendation I decided to apply for 6 month internship at startup company <a href="${RoutesExternal.YOUTESTME}" hreflang="en" title="${RouteTitles.YOUTESTME}" class="link">YouTestMe</a> after which I stayed for 4 more months as Java Developer and QA semi-automated tester. I love challenging myself and that keeps me pushing forward in developing new skills. I learned PHP and Laravel online by following some of the greatest educators in industry. After YouTestMe, I applied for 3 month internship at another startup company called XSSystems <small><em>(Now <a href="${RoutesExternal.XSSYSTEMS}" hreflang="en" title="${RouteTitles.XSSYSTEMS}" rel="noopener" target="_blank" class="link">Threedium</a>)</em></small> as a PHP/Laravel Developer after which I stayed for 7 more months working as a web developer. I've had opportunity to work with some amazing people who have played key roles in my career. During those 10 months I've learned new programming language, JavaScript. Much of my time has been spent building some amazing applications and exploring new libraries and frameworks. On my family's initiative, I've started traditionally learning computer science at college, where I spent amazing year learning many things and met many great people. I dropped out the college after first year because I realized that I have been making much faster progress by learning through the books, interaction with people and online courses. On the college I've been introduced to Linux which plays key role in my development and also, I've learned new algorithms and data structures which helps me develop high quality software. In the late 2017 I decided to focus more time on learning and not traveling to work, so I started searching for a remote job which I managed to get at <a href="${RoutesExternal.SCOPIC_SOFTWARE}" title="${RouteTitles.SCOPIC_SOFTWARE}" hreflang="en" class="link">Scopic Software</a> where I continued my professional career as a full stack web developer.
    `,
    WEB_DEVELOPMENT_TITLE: 'Web development',
    WEB_DEVELOPMENT: `
        My primary focus as a software developer is on web development, which I've been doing since the late 2016. My first projects were built with HTML, CSS and Java. Since then my toolset changed a lot by discovering new languages, libraries and frameworks. These days I'm doing both server and client side programming using JavaScript and PHP. My server side frameworks of choice are Laravel <small><em>(PHP)</em></small> and Express <small><em>(JavaScript/Node)</em></small>. As for database I am using either MySQL or MongoDB. On the other hand, for the client side, I prefer using React w/ Redux or Angular w/ RxJS. Back in the days, I used to write and maintain JQuery and Vue.js code. Lately I prefer using Typescript for React applications too, which is not mainstream, but I found it highly useful in preventing common type issues. As a developer I value well written code, that's easy to read, and isn't unnecessarily complex. I don't see automated testing as optional, but rather a key part of writing good code. For server side unit testing I am using PHPUnit and on the client side, Jest or Jasmine w/ Karma. I appreciate following industry set coding standards. I make a point of continually learning and improving through attending <a href="${RoutesExternal.MEETUP}" hreflang="en" title="${RouteTitles.MEETUP}" rel="noopener" class="link">meetups</a>, reading books and blogs, watching screencasts, and following industry experts.
    `,
    PAGE_NAVIGATION: {
        BACK_BUTTON_TEXT: '<span class="hide-on-mobile">Back to</span> Home',
        BACK_BUTTON_LINK: Routes.INDEX,
        FORWARD_BUTTON_TEXT: '<span class="hide-on-mobile">Go to</span> Portfolio',
        FORWARD_BUTTON_LINK: Routes.PORTFOLIO
    },
    SEO: {
        DESCRIPTION: 'Read more about who Stefan Lazarevic is and what he does.',
        KEYWORDS: 'stefan, lazarevic, about, web, developer',
    },
    CRITICAL_CSS: `

    `
};
