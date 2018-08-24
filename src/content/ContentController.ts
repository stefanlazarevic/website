import Content from '../interfaces/Content';

import { Language } from '../types/Language';
import enContent from './en/Content';

export default {
    getContentForLanguage: (language: Language): Content => {
        switch (language) {
            case 'en': return enContent;
            default: return enContent;
        }
    }
}
