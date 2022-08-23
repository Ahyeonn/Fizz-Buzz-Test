test('Sanity check', () => {
    expect(2+2).toBe(4)
})

const fb = require('../fizzbuzz')

test('FIZZ', () => {
    expect(fb.FIZZ).toBe('fizz')
})

test('BUZZ', () => {
    expect(fb.BUZZ).toBe('buzz')
})

test('FIZZBUZZ', () => {
    expect(fb.FIZZBUZZ).toBe('fizzbuzz')
})

test('isFizzy', () => {
    const result = fb.isFizzy(3, fb.forFizz)
    expect(result).toBe(true)
})

test('isBuzzy', () => {
    const result = fb.isBuzzy(5, fb.forBuzz)
    expect(result).toBe(true)
})

test('fizzyBuzzy', () => {
    const firstResult = fb.fizzyBuzzy(3, fb.forFizz, fb.forBuzz)
    const secondResult = fb.fizzyBuzzy(5, fb.forFizz, fb.forBuzz)
    const thirdResult = fb.fizzyBuzzy(15, fb.forFizz, fb.forBuzz)

    expect(firstResult).toBe(fb.FIZZ)
    expect(secondResult).toBe(fb.BUZZ)
    expect(thirdResult).toBe(fb.FIZZBUZZ)
})

test('fizzyBuzz', () => {
    const firstResult = fb.fizzBuzz(100, 3, 5)
    expect(firstResult).toEqual({ count: 100, fizz: 27, buzz: 14, fizzBuzz: 6 })
    const secondResult = fb.fizzBuzz(100, 2, 7)
    expect(secondResult).toEqual({ count: 100, fizz: 43, buzz: 7, fizzBuzz: 7 })
})