const add=require('../src/StringCalculator')

test('Jest is working!', () => {
    expect(1).toBe(1);
});

describe('Started writing tests',()=>{
    
    test('Return 0 for empty string', () => {
        expect(add("")).toBe(0)
    });

})