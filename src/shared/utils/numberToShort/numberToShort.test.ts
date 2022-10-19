import { describe, expect, test } from 'vitest';
import { numberToShort } from './numberToShort';

describe('nameToShort', () => {
  test('x < 0', () => {
    expect(() => numberToShort(-124)).toThrowError(
      /^Number cannot be negative.$/,
    );
  });

  test('0 < x < 1_000', () => {
    const result = numberToShort(124);
    expect(result).toBe('124');
  });

  test('1_000 < x < 1_000_000', () => {
    const result1 = numberToShort(1_240);
    expect(result1).toBe('1k');

    const result2 = numberToShort(999_999);
    expect(result2).toBe('999k');
  });

  test('1_000_000 < x < 1_000_000_000', () => {
    const result1 = numberToShort(1_240_000);
    expect(result1).toBe('1m');

    const result2 = numberToShort(999_999_999);
    expect(result2).toBe('999m');
  });

  test('1_000_000_000 < x < 1_000_000_000_000', () => {
    const result1 = numberToShort(1_240_000_000);
    expect(result1).toBe('1b');

    const result2 = numberToShort(999_999_999_999);
    expect(result2).toBe('999b');
  });
});
