// import Career from './Career';

export default interface IContent {
    INDEX: {
        INTRODUCTION: string,
        ACTION_BUTTON: string,
    },
    ABOUT: {
        TITLE: string,
        PARAGRAPH_ONE: string,
        SUBTITLE_ONE: string,
        PARAGRAPH_TWO: string,
        SUBTITLE_TWO: string,
        PARAGRAPH_THREE: string,
        BACK_TEXT: string,
        NEXT_TEXT: string,
    },
    PROJECTS: {
        TITLE: string,
        BACK_TEXT: string,
        NEXT_TEXT: string,
    },
    EXPERIENCE: {
        TITLE: string,
        BACK_TEXT: string,
        NEXT_TEXT: string,
    },
    COURSES: {
        TITLE: string,
        BACK_TEXT: string,
        NEXT_TEXT: string,
    },
    NAVIGATION: {
        ABOUT: string,
        CONTACT: string,
        COURSES: string,
        EXPERIENCE: string,
        PROJECTS: string,
    },
    CONTACT: {
        TITLE: string,
        PARAGRAPH_ONE: string,
        BACK_TEXT: string,
        NEXT_TEXT: string,
    },
    CAREER: any[],
};
