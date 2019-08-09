import { Divide } from './functions.js';


describe('functions.js', () => {
    
    describe('Divide()', () => {
        it('should return the divident of numbers passed in', () => {
            // expect
            expect(Divide(1,2)).toBe(0.5);
            expect(Divide(-500,400)).toBe(-1.25);
            expect(Divide(8,8)).toBe(1);
            expect(Divide(8,0)).toBeNan()
        });
    });

});