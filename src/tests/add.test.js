const add = (a, b) => a + b;
const generateGreetings = (name) => `Hello ${name}`;

test('should add two numbers', () => {
    const result = add(3, 4);
    expect(result).toBe(7);
});

test('should print greetings', () => {
    expect(generateGreetings('Alex')).toBe('Hello Alex');
})

test('should print hello', () => {
    expect(add(1,2)).toBe(3);
    console.log('done');
});