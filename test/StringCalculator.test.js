const { add, getCalledCount, resetCalledCount }=require('../src/StringCalculator')

test('Jest is working!', () => {
    expect(1).toBe(1);
});

describe('Started writing tests',()=>{
    
    test('Return 0 for empty string', () => {
        expect(add("")).toBe(0)
    });

    test('Return the number itself for single number as input', () => {
        expect(add("1")).toBe(1)
    });

    //test case for 2 or more numbers in the 
    test('Return the sum of all the numbers separated by comma', () => {
        expect(add("1,2")).toBe(3);
        expect(add("1,2,3,4,5")).toBe(15);
    });

    test('Return the sum of all the numbers separated by newline or comma', () => {
        expect(add("1\n2,3")).toBe(6);
    });

    test('Return the sum of all the numbers separated by custom delimiter which is defined after // at the start of the input', () => {
        expect(add("//;\n1;2")).toBe(3);
    });

    test('Return the sum of all the numbers separated by custom delimiter of length>1 which is defined after // at the start of the input', () => {
        expect(add("//[***]\n1***2***3")).toBe(6);
    });

    test('Return the sum of all the numbers separated by multiple custom delimiters which is defined after // at the start of the input', () => {
        expect(add("//[*][%]\n1*2%3")).toBe(6);
    });

    test('Return the sum of all the numbers separated by multiple custom delimiters of length>1 which is defined after // at the start of the input', () => {
        expect(add("//[**][%%]\n1**2%%3")).toBe(6);
    });

    test('throws an error with all negative numbers listed in the message', () => {
        expect(() => add("1,-2,3,-4")).toThrow("negative numbers not allowed -2,-4");
    });

   test('Return number of times add() was called', () => {
        resetCalledCount();
        add("1,2");
        add("3,4");
        add("1,;");
        expect(getCalledCount()).toBe(3);
    });

})