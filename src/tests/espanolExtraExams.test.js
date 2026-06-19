import { describe, it, expect } from 'vitest';
import { espanolExtraExams } from '../data/espanolExtraExams';

describe('espanolExtraExams', () => {
  it('exports exactly 3 exams', () => {
    expect(espanolExtraExams).toHaveLength(3);
  });

  it('each exam has exactly 35 questions', () => {
    espanolExtraExams.forEach((exam, i) => {
      expect(exam, `exam ${i + 1}`).toHaveLength(35);
    });
  });

  it('every question has required fields', () => {
    espanolExtraExams.flat().forEach((q, i) => {
      expect(q, `question ${i}`).toHaveProperty('stimulus');
      expect(q, `question ${i}`).toHaveProperty('question');
      expect(q, `question ${i}`).toHaveProperty('options');
      expect(q, `question ${i}`).toHaveProperty('correct');
      expect(q, `question ${i}`).toHaveProperty('mepBloque');
      expect(q.stimulus.length, `question ${i} stimulus`).toBeGreaterThan(0);
      expect(q.question.length, `question ${i} question text`).toBeGreaterThan(0);
    });
  });

  it('every question has exactly 3 options', () => {
    espanolExtraExams.flat().forEach((q, i) => {
      expect(q.options, `question ${i} options`).toHaveLength(3);
      q.options.forEach((opt, j) => {
        expect(opt.length, `question ${i} option ${j}`).toBeGreaterThan(0);
      });
    });
  });

  it('every correct index is a valid option index', () => {
    espanolExtraExams.flat().forEach((q, i) => {
      expect(q.correct, `question ${i} correct`).toBeGreaterThanOrEqual(0);
      expect(q.correct, `question ${i} correct`).toBeLessThan(q.options.length);
    });
  });

  it('every question uses the comprension-lectora mepBloque', () => {
    espanolExtraExams.flat().forEach((q, i) => {
      expect(q.mepBloque, `question ${i}`).toBe('comprension-lectora');
    });
  });

  // Uniqueness is checked by `stimulus`, not `question` text — the source
  // markdown reuses a small set of stock question prompts (e.g. "¿Cuál es la
  // idea fundamental del texto anterior?") across many distinct stimuli within
  // the same bloque, so question text is not a unique identifier here.
  it('exams 1 and 2 share no stimulus (all unique)', () => {
    const exam1Stimuli = new Set(espanolExtraExams[0].map(q => q.stimulus));
    espanolExtraExams[1].forEach((q, i) => {
      expect(exam1Stimuli.has(q.stimulus), `exam 2 question ${i} is a duplicate of exam 1`).toBe(false);
    });
  });

  it('exam 3 has exactly 5 questions that duplicate exam 1 or exam 2 by stimulus', () => {
    const exam12Stimuli = new Set([
      ...espanolExtraExams[0].map(q => q.stimulus),
      ...espanolExtraExams[1].map(q => q.stimulus),
    ]);
    const duplicates = espanolExtraExams[2].filter(q => exam12Stimuli.has(q.stimulus));
    expect(duplicates).toHaveLength(5);
  });
});
