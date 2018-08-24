// tslint:disable:object-literal-sort-keys

import RoutesExternal from '../../constants/RoutesExternal';
import RouteTitles from '../../constants/RouteTitles';
// import Content from '../../interfaces/Content';

const Content = {
    ABOUT: {
        PARAGRAPH_ONE: `
        I'm Stefan Lazarević, a 23 year old tall and friendly full stack web developer at <a href="${RoutesExternal.SCOPIC_SOFTWARE}" hreflang="en" title="${RouteTitles.SCOPIC_SOFTWARE}" class="link">Scopic Software</a>. I live in Belgrade, Serbia with my family. My spare time I spend with my girlfriend, working out, studying japanese, watching <a href="${RoutesExternal.WEST_WORLD}" hreflang="en" title="${RouteTitles.WEST_WORLD}" class="link">Westworld</a> and <a href="${RoutesExternal.WALKING_DEAD}" hreflang="en" title="${RouteTitles.WALKING_DEAD}" class="link">The Walking Dead</a> and improving my programming skills. I have been building websites and web applications since the late 2016 and that became my passion over the years. I am very proud of the work I do and I continuously work to enhance my knowledge and skills in this area. Beside programming I also enjoy traveling around the country and outside exploring new cultures and meeting great people. Although the majority of the year, you will find me behind a computer screen. My life goal is to visit Tokyo, New York and Moscow.
        `,
        PARAGRAPH_THREE: `
        My primary focus as a software developer is on web development, which I've been doing since the late 2016. My first projects were built with HTML, CSS and Java. Since then my toolset changed a lot by discovering new languages, libraries and frameworks. These days I'm doing both server and client side programming using JavaScript and PHP. My server side frameworks of choice are Laravel <small><em>(PHP)</em></small> and Express <small><em>(JavaScript/Node)</em></small>. As for database I am using either MySQL or MongoDB. On the other hand, for the client side, I prefer using React w/ Redux or Angular w/ RxJS. Back in the days, I used to write and maintain JQuery and Vue.js code. Lately I prefer using Typescript for React applications too, which is not mainstream, but I found it highly useful in preventing common type issues. As a developer I value well written code, that's easy to read, and isn't unnecessarily complex. I don't see automated testing as optional, but rather a key part of writing good code. For server side unit testing I am using PHPUnit and on the client side, Jest or Jasmine w/ Karma. I appreciate following industry set coding standards. I make a point of continually learning and improving through attending <a href="${RoutesExternal.MEETUP}" hreflang="en" title="${RouteTitles.MEETUP}" rel="noopener" class="link">meetups</a>, reading books and blogs, watching screencasts, and following industry experts.
        `,
        PARAGRAPH_TWO: `
        I started software development while still in high school, after being introduced to programming by a teacher. My first programs were written in C and Java. I attended private courses at <a href="${RoutesExternal.VINCA}" hreflang="rs-RS" title="${RouteTitles.VINCA}" class="link">Computing School "Vinča"</a> after high school where I learned how to do web programming in java. On friend recommendation I decided to apply for 6 month internship at startup company <a href="${RoutesExternal.YOUTESTME}" hreflang="en" title="${RouteTitles.YOUTESTME}" class="link">YouTestMe</a> after which I stayed for 4 more months as Java Developer and QA semi-automated tester. I love challenging myself and that keeps me pushing forward in developing new skills. I learned PHP and Laravel online by following some of the greatest educators in industry. After YouTestMe, I applied for 3 month internship at another startup company called XSSystems <small><em>(Now <a href="${RoutesExternal.XSSYSTEMS}" hreflang="en" title="${RouteTitles.XSSYSTEMS}" rel="noopener" target="_blank" class="link">Threedium</a>)</em></small> as a PHP/Laravel Developer after which I stayed for 7 more months working as a web developer. I've had opportunity to work with some amazing people who have played key roles in my career. During those 10 months I've learned new programming language, JavaScript. Much of my time has been spent building some amazing applications and exploring new libraries and frameworks. On my family's initiative, I've started traditionally learning computer science at college, where I spent amazing year learning many things and met many great people. I dropped out the college after first year because I realized that I have been making much faster progress by learning through the books, interaction with people and online courses. On the college I've been introduced to Linux which plays key role in my development and also, I've learned new algorithms and data structures which helps me develop high quality software. In the late 2017 I decided to focus more time on learning and not traveling to work, so I started searching for a remote job which I managed to get at <a href="${RoutesExternal.SCOPIC_SOFTWARE}" title="${RouteTitles.SCOPIC_SOFTWARE}" hreflang="en" class="link">Scopic Software</a> where I continued my professional career as a full stack web developer.
        `,
        SUBTITLE_ONE: 'Brief history',
        SUBTITLE_TWO: 'Web development',
        TITLE: 'About me',
        BACK_TEXT: 'Back to home',
        NEXT_TEXT: 'See my projects',
    },
    CONTACT: {
        PARAGRAPH_ONE: `
            Hey there! Thank you for your interest in contacting me! I am currently not open for hiring, but if you wanna get in touch, talk to me about your new awesome project or just say hi, feel free to reach out at <a href="mailto:stefanlazarevic.contact@gmail.com" class="text--orange">stefanlazarevic.contact@gmail.com</a>
        `,
        TITLE: 'Contact me',
        BACK_TEXT: 'Back to courses',
        NEXT_TEXT: 'Back to begining',
    },
    COURSES: {
        TITLE: '',
        BACK_TEXT: 'Back to where I worked',
        NEXT_TEXT: 'Go to contact',
    },
    EXPERIENCE: {
        TITLE: 'Experience',
        BACK_TEXT: 'Back to my projects',
        NEXT_TEXT: 'See my courses',
    },
    INDEX: {
        ACTION_BUTTON: 'More about me',
        INTRODUCTION: `
            Hello! My name is Stefan Lazarević. Welcome to my website! I am a web developer based in Belgrade, Serbia. I help organizations develop custom web-based software, as well as build beautiful marketing and portfolio websites. I'm currently full-time employed as web developer at <a href="${RoutesExternal.SCOPIC_SOFTWARE}" title="${RouteTitles.SCOPIC_SOFTWARE}" class="text--white">Scopic Software</a>. During the last two years I've been working on various project to polish my skills in web development on both frontend and backend. My favourite language is JavaScript but I also love to develop in PHP.
        `,
    },
    NAVIGATION: {
        ABOUT: 'About',
        CONTACT: 'Contact',
        COURSES: 'Courses',
        EXPERIENCE: 'Experience',
        PROJECTS: 'Projects',
    },
    PROJECTS: {
        TITLE: '',
        BACK_TEXT: 'Read again about me',
        NEXT_TEXT: 'See where I worked',
    },
    CAREER: [
        {
            TITLE: 'Scopic Software',
            START_DATE: new Date('2017'),
            END_DATE: new Date(),
            ABOUT: `
                Scopic Software is the world’s largest virtual company. Founded in 2006, we have grown consistently by delivering innovative, cutting-edge software products for our clients and creating an empowering environment for our employees.
            `,
            ROLES: [
                {
                    TITLE: 'Web Developer',
                    DESCRIPTION: ''
                }
            ]
        },
        {
            TITLE: 'XSSystems',
            START_DATE: new Date('2016'),
            END_DATE: new Date('2017'),
            ABOUT: `
                XSSystems was a Digital marketing startup company that was founded in 2013.
            `,
            ROLES: [
                {
                    TITLE: 'Web Developer',
                    DESCRIPTION: `
                    I worked on various e-commerce applications and portfolio websites, both static and dynamic, and time spent working as a web developer had the most impact on my professional career, I've learned how to create custom grid system without frameworks, how to convert PSD templates into interactive websites, how to create my own gulp workbuild, ES6 syntax, babel and browserify, how to optimize website for speed, and how to write SEO friendly html. I also had a chance to explore and use Vue.js with Laravel for the first time.
                    `,
                },
                {
                    TITLE: 'PHP/Laravel Internship',
                    DESCRIPTION: `
                    During my internship time at XSSystems I worked on rent a car application for Fudeks. By working on this project I've learned how to write sass, how to use bootstrap and create responsive pages and learned some of intermediate css.I've also learned a new language which in which I'm investing my time now mastering and that is JavaScript, after JavaScript I've got introduced to JQuery and JQuery UI.
                    `,
                }
            ]
        },
        {
            TITLE: 'Youtestme.inc',
            START_DATE: new Date('2015'),
            END_DATE: new Date('2016'),
            ABOUT: `

            `,
            ROLES: [
                {
                    TITLE: 'Java Developer & Quality Assurance',
                    DESCRIPTION: '',
                },
                {
                    TITLE: 'Internship',
                    DESCRIPTION: ''
                }
            ]
        },
        {
            TITLE: 'Computing School "Vinca"',
            START_DATE: new Date('2015'),
            END_DATE: new Date('2015'),
            ABOUT: `
            Computing school "Vinca" is private computing school that is a part of Institute of Nuclear Sciences "Vinča" that exists for over 30 years. Computing school "Vinca" is publicly approved by Ministries of Education, Science and Technological in Serbia and for more than 15 years, they are active members of the Microsoft partner network, Microsoft Authorized Educational Partner, Autodesk Authorized Training Center and Certiport Testing Center.
            `,
            ROLES: [
                {
                    TITLE: 'Java Web Programming',
                    DESCRIPTION: `
                    During this course, I've learned about concepts of web programming,  HTTP, Cache, Cookies etc. I've got introduced to concepts of MVC pattern and I've learned about threads and how to do multi-threading programming. I've got introduced to sql language and wrote my first sql scripts. I also learned about database relations, Servlets, JSP and wrote my first lines of code in HTML and CSS.
                    `,
                    RESOURCES: [
                        {
                            LABEL: 'Certificate',
                            LINK: 'https://www.slideshare.net/StefanLazarevi/java-web-71015764',
                            DOWNLOAD: false,
                        }
                    ]
                },
                {
                    TITLE: 'Java Introduction',
                    DESCRIPTION: `
                        During this course, I've learned concepts of OO programming backed with practical experience. I've learned data types and basic data structures such as Single linked lists, Double linked list, arrays etc. and some of the basic search algorithms such as Linear search and Binary search. I've also learned how to build console and desktop applications such as applets, memory game, guess a number, lotto etc. using Java 7, Java AWT and Java Swing.
                    `,
                    RESOURCES: [
                        {
                            LABEL: 'Certificate',
                            LINK: 'https://www.slideshare.net/StefanLazarevi/java-intro-71015706',
                            DOWNLOAD: false,
                        }
                    ]
                }
            ]
        }
    ]
};

export default Content;
