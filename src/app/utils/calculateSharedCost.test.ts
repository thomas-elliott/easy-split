import { calculateSharedCost } from './calculateSharedCost';
import { describe, it, expect } from 'vitest';

describe('calculateSharedCost function', () => {
  it('should correctly calculate shared cost and updated amounts for two people', () => {
    const result = calculateSharedCost('100', '30', '20');

    expect(result.updatedPerson1 + result.updatedPerson2).toBe(100);
    expect(result).toMatchObject({
      updatedPerson1: 55,
      updatedPerson2: 45,
      sharedCost: 25,
    });
  });

  it('should handle string input that can be parsed to a number', () => {
    const result = calculateSharedCost('100.5', '30.2', '19.8');

    expect(result.updatedPerson1 + result.updatedPerson2).toBe(100.5);
    expect(result).toMatchObject({
      updatedPerson1: 55.45,
      updatedPerson2: 45.05,
      sharedCost: 25.25,
    });
  });

  it('should handle zero total cost', () => {
    const result = calculateSharedCost('0', '0', '0');

    expect(result.updatedPerson1 + result.updatedPerson2).toBe(0);
    expect(result).toMatchObject({
      updatedPerson1: 0,
      updatedPerson2: 0,
      sharedCost: 0,
    });
  });

  it('should correctly handle negative numbers for one person', () => {
    const result = calculateSharedCost('100', '-30', '20');

    expect(result.updatedPerson1 + result.updatedPerson2).toBe(100);
    expect(result).toMatchObject({
      updatedPerson1: 25,
      updatedPerson2: 75,
      sharedCost: 55,
    });
  });
});
