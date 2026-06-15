import { describe, it, expect } from 'vitest';
import { lessonsData } from '../data/lessonsData';
import { subjectConfig } from '../data/subjectConfig';

describe('lessonsData structure', () => {
  const subjects = ['sociales', 'ciencias', 'espanol', 'matematicas'];

  it.each(subjects)('%s has a bloques array', (subject) => {
    expect(Array.isArray(lessonsData[subject].bloques)).toBe(true);
    expect(lessonsData[subject].bloques.length).toBeGreaterThan(0);
  });

  it.each(subjects)('%s has a lessons array', (subject) => {
    expect(Array.isArray(lessonsData[subject].lessons)).toBe(true);
  });

  it.each(subjects)('every %s lesson has id (string), title, mepBloque, sections[]', (subject) => {
    for (const lesson of lessonsData[subject].lessons) {
      expect(typeof lesson.id).toBe('string');
      expect(lesson.id.length).toBeGreaterThan(0);
      expect(typeof lesson.title).toBe('string');
      expect(typeof lesson.mepBloque).toBe('string');
      expect(Array.isArray(lesson.sections)).toBe(true);
    }
  });

  it.each(subjects)('every %s lesson.mepBloque is a valid bloque id for that subject', (subject) => {
    const validIds = subjectConfig[subject].bloques.map(b => b.id);
    for (const lesson of lessonsData[subject].lessons) {
      expect(validIds).toContain(lesson.mepBloque);
    }
  });

  it('lesson ids are unique within each subject', () => {
    for (const subject of subjects) {
      const ids = lessonsData[subject].lessons.map(l => l.id);
      expect(new Set(ids).size).toBe(ids.length);
    }
  });

  it('sociales has at least 10 lessons', () => {
    expect(lessonsData.sociales.lessons.length).toBeGreaterThanOrEqual(10);
  });
});
