import {describe, expect, it} from '@jest/globals';
import {sum} from '../index';

describe('Testing sum function', () => {
    it('should rum sum of positive numbers correctly', () => {
        const finalAns = sum(1, 2);
        expect(finalAns).toBe(3);
    });

    it('should return sum of negative number correctly', () => {
        const finalAns = sum(-1, -2);
        expect(finalAns).toBe(-3);
    });
});