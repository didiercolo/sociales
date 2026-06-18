import { describe, it, expect } from 'vitest';
import { cienciasExtraExams } from '../data/cienciasExtraExams';

const VALID_BLOQUES = ['cuerpo-humano', 'biodiversidad', 'energia', 'geofisica'];

describe('cienciasExtraExams', () => {
  it('exports exactly 3 exams', () => {
    expect(cienciasExtraExams).toHaveLength(3);
  });

  it('each exam has exactly 35 questions', () => {
    cienciasExtraExams.forEach((exam, i) => {
      expect(exam, `exam ${i + 1}`).toHaveLength(35);
    });
  });

  it('every question has required fields', () => {
    cienciasExtraExams.flat().forEach((q, i) => {
      expect(q, `question ${i}`).toHaveProperty('stimulus');
      expect(q, `question ${i}`).toHaveProperty('source');
      expect(q, `question ${i}`).toHaveProperty('question');
      expect(q, `question ${i}`).toHaveProperty('options');
      expect(q, `question ${i}`).toHaveProperty('correct');
      expect(q, `question ${i}`).toHaveProperty('mepBloque');
      expect(q.stimulus.length, `question ${i} stimulus`).toBeGreaterThan(0);
      expect(q.source.length, `question ${i} source`).toBeGreaterThan(0);
      expect(q.question.length, `question ${i} question text`).toBeGreaterThan(0);
    });
  });

  it('every question has exactly 3 options', () => {
    cienciasExtraExams.flat().forEach((q, i) => {
      expect(q.options, `question ${i} options`).toHaveLength(3);
      q.options.forEach((opt, j) => {
        expect(opt.length, `question ${i} option ${j}`).toBeGreaterThan(0);
      });
    });
  });

  it('every correct index is a valid option index', () => {
    cienciasExtraExams.flat().forEach((q, i) => {
      expect(q.correct, `question ${i} correct`).toBeGreaterThanOrEqual(0);
      expect(q.correct, `question ${i} correct`).toBeLessThan(q.options.length);
    });
  });

  it('every question uses a valid ciencias mepBloque', () => {
    cienciasExtraExams.flat().forEach((q, i) => {
      expect(VALID_BLOQUES, `question ${i}`).toContain(q.mepBloque);
    });
  });

  it('exams 1 and 2 share no question text (all unique)', () => {
    const exam1Qs = new Set(cienciasExtraExams[0].map(q => q.question));
    cienciasExtraExams[1].forEach((q, i) => {
      expect(exam1Qs.has(q.question), `exam 2 question ${i} is a duplicate of exam 1`).toBe(false);
    });
  });

  it('exam 3 has exactly 5 questions that duplicate exam 1 or exam 2 question text', () => {
    const exam12Qs = new Set([
      ...cienciasExtraExams[0].map(q => q.question),
      ...cienciasExtraExams[1].map(q => q.question),
    ]);
    const duplicates = cienciasExtraExams[2].filter(q => exam12Qs.has(q.question));
    expect(duplicates).toHaveLength(5);
  });
});
