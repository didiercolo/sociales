import { subjectConfig } from './subjectConfig';
import { socialesLessons } from './lessons/sociales';
import { cienciasLessons } from './lessons/ciencias';
import { espanolLessons } from './lessons/espanol';
import { matematicasLessons } from './lessons/matematicas';
import { sonnyLanguageArtsLesson } from './lessons/sonnyLanguageArts';

export const lessonsData = {
    sociales: {
        bloques: subjectConfig.sociales.bloques,
        lessons: socialesLessons,
    },
    ciencias: {
        bloques: subjectConfig.ciencias.bloques,
        lessons: cienciasLessons,
    },
    espanol: {
        bloques: subjectConfig.espanol.bloques,
        lessons: espanolLessons,
    },
    matematicas: {
        bloques: subjectConfig.matematicas.bloques,
        lessons: matematicasLessons,
    },
    // ponytail: sonny-only subject; no subjectConfig entry, so /language-arts redirects home.
    'language-arts': {
        bloques: [],
        lessons: [sonnyLanguageArtsLesson],
    },
};
