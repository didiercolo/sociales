import { describe, it, expect } from 'vitest';
import { socialesExtraExams } from '../data/socialesExtraExams';

describe('socialesExtraExams', () => {
  it('exports exactly 3 exams', () => {
    expect(socialesExtraExams).toHaveLength(3);
  });

  it('each exam has exactly 35 questions', () => {
    socialesExtraExams.forEach((exam, i) => {
      expect(exam, `exam ${i + 1}`).toHaveLength(35);
    });
  });

  it('every question has required fields', () => {
    socialesExtraExams.flat().forEach((q, i) => {
      expect(q, `question ${i}`).toHaveProperty('stimulus');
      expect(q, `question ${i}`).toHaveProperty('source');
      expect(q, `question ${i}`).toHaveProperty('question');
      expect(q, `question ${i}`).toHaveProperty('options');
      expect(q, `question ${i}`).toHaveProperty('correct');
      expect(q, `question ${i}`).toHaveProperty('mepBloque');
    });
  });

  it('every question has exactly 3 options', () => {
    socialesExtraExams.flat().forEach((q, i) => {
      expect(q.options, `question ${i} options`).toHaveLength(3);
    });
  });

  it('every correct index is a valid option index', () => {
    socialesExtraExams.flat().forEach((q, i) => {
      expect(q.correct, `question ${i} correct`).toBeGreaterThanOrEqual(0);
      expect(q.correct, `question ${i} correct`).toBeLessThan(q.options.length);
    });
  });

  it('all questions use mepBloque "geografia-historia"', () => {
    socialesExtraExams.flat().forEach((q, i) => {
      expect(q.mepBloque, `question ${i}`).toBe('geografia-historia');
    });
  });

  it('exams 1 and 2 share no question text (all unique)', () => {
    const exam1Qs = new Set(socialesExtraExams[0].map(q => q.question));
    socialesExtraExams[1].forEach((q, i) => {
      expect(exam1Qs.has(q.question), `exam 2 question ${i} is a duplicate of exam 1`).toBe(false);
    });
  });

  it('exam 3 has exactly 5 questions that duplicate exam 1 or exam 2 question text', () => {
    const exam12Qs = new Set([
      ...socialesExtraExams[0].map(q => q.question),
      ...socialesExtraExams[1].map(q => q.question),
    ]);
    const duplicates = socialesExtraExams[2].filter(q => exam12Qs.has(q.question));
    expect(duplicates).toHaveLength(5);
  });
});
