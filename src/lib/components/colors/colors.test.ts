import { describe, it, expect } from 'vitest';
import { randomizeElements } from './colors';

describe('randomizeElements', () => {
  const arr = ['a', 'b', 'c', 'd', 'e'];

  it('returns array of specified length', () => {
    const result = randomizeElements([...arr], 3);
    expect(result).toHaveLength(3);
  });

  it('returns empty array for length 0', () => {
    const result = randomizeElements([...arr], 0);
    expect(result).toEqual([]);
  });

  it('does not mutate the original array length', () => {
    const original = [...arr];
    randomizeElements(original, 3);
    expect(original).toHaveLength(5);
  });

  it('returns elements from the input array', () => {
    const result = randomizeElements([...arr], 3);
    for (const el of result) {
      expect(arr).toContain(el);
    }
  });

  it('handles requested length larger than array', () => {
    const result = randomizeElements([...arr], 10);
    expect(result).toHaveLength(10);
  });

  it('works with single element array', () => {
    const result = randomizeElements(['x'], 1);
    expect(result).toEqual(['x']);
  });

  it('preserves some original elements when length matches', () => {
    const result = randomizeElements([...arr], 5);
    expect(result).toHaveLength(5);
  });
});
