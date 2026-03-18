import { describe, it, expect } from 'vitest';
import { lessonsData } from '../data/lessonsData';

describe('lessonsData structure', () => {
  it('should have sociales, ciencias, and espanol categories', () => {
    expect(lessonsData).toHaveProperty('sociales');
    expect(lessonsData).toHaveProperty('ciencias');
    expect(lessonsData).toHaveProperty('espanol');
  });

  it('should have grades 4, 5, and 6 for sociales', () => {
    expect(lessonsData.sociales).toHaveProperty('4');
    expect(lessonsData.sociales).toHaveProperty('5');
    expect(lessonsData.sociales).toHaveProperty('6');
    expect(lessonsData.sociales).toHaveProperty('resumen');
  });

  it('should have expected properties in lesson objects', () => {
    const sampleLesson = lessonsData.sociales[6][0];
    expect(sampleLesson).toHaveProperty('id');
    expect(sampleLesson).toHaveProperty('title');
    // Some lessons might not have all properties, but let's check common ones
    if (sampleLesson.questions) {
      expect(Array.isArray(sampleLesson.questions)).toBe(true);
    }
  });
});
