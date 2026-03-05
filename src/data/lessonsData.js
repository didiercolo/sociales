import { grade4Lessons } from './lessons/grade4';
import { grade5Lessons } from './lessons/grade5';
import { grade6Lessons } from './lessons/grade6';
import { cienciasGrade6Lessons } from './lessons/cienciasGrade6';
import { resumenLessons } from './lessons/resumen';
import { espanolGrade6Lessons } from './lessons/espanolGrade6';

export const lessonsData = {
    sociales: {
        4: grade4Lessons,
        5: grade5Lessons,
        6: grade6Lessons,
        resumen: resumenLessons
    },
    ciencias: {
        4: [],
        5: [],
        6: cienciasGrade6Lessons
    },
    espanol: {
        4: [],
        5: [],
        6: espanolGrade6Lessons
    }
};
