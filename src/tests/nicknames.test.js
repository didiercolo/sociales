import { describe, it, expect } from 'vitest';
import predefinedNicknames from '../data/nicknames';

describe('nicknames data', () => {
  it('should be an array of strings', () => {
    expect(Array.isArray(predefinedNicknames)).toBe(true);
    expect(predefinedNicknames.length).toBeGreaterThan(0);
    predefinedNicknames.forEach(nickname => {
      expect(typeof nickname).toBe('string');
    });
  });

  it('should not contain empty strings', () => {
    predefinedNicknames.forEach(nickname => {
      expect(nickname.trim().length).toBeGreaterThan(0);
    });
  });

  it('should contain unique nicknames', () => {
    const uniqueNicknames = new Set(predefinedNicknames);
    expect(uniqueNicknames.size).toBe(predefinedNicknames.length);
  });
});
