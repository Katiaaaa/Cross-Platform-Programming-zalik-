import { fractions } from "./fractions";

describe('fractions', ()=>{
    afterEach(()=>{
        jest.restoreAllMocks();
        jest.resetAllMocks();
    })

    fit('Test 1 for sum', ()=>{
        let result = fractions.sum({x1_numerator: 1, x1_denominator: 3, x2_numerator: 1, x2_denominator: 3});
        let res = '6/9';
        expect(result).toBe(res);
    })
    fit('Test 2 for Difference', ()=>{
        let result = fractions.difference({x1_numerator: 2, x1_denominator: 3, x2_numerator: 1, x2_denominator: 3});
        let res = '3/9';
        expect(result).toBe(res);
    })
    fit('Test 3 for product', ()=>{
        let result = fractions.product({x1_numerator: 2, x1_denominator: 5, x2_numerator: 1, x2_denominator: 3});
        let res = '2/15';
        expect(result).toBe(res);
    })
    fit('Test 3 for division', ()=>{
        let result = fractions.division({x1_numerator: 2, x1_denominator: 5, x2_numerator: 1, x2_denominator: 3});
        let res = '6/5';
        expect(result).toBe(res);
    })

    
})