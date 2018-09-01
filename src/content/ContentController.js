import enContent from './en/Content';

export default {
    getContentForLanguage: language => {
        switch (language) {
            case 'en': return enContent;
            default: return enContent;
        }
    }
}
