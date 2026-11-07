import { describe, expect, it } from 'vitest';
import { CLOUD_MOODS } from '../../src/gsap-effects';

describe('cloud moods', () => {
    it('makes an overcast sky fuller, bigger and slower than a partly cloudy one', () => {
        const { partly, overcast } = CLOUD_MOODS;
        expect(overcast.count).toBeGreaterThan(partly.count);
        expect(overcast.size).toBeGreaterThan(partly.size);
        expect(overcast.speed).toBeLessThan(partly.speed);
    });
});
