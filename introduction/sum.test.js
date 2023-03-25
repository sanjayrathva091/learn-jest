const sum = require('./sum');

/*

test('two plus two is four', () => {
    expect(2 + 2).toBe(4);
});

*/

/* toBe uses Object.is to test exact equality. If you want to check the value of an object, 
* use toEqual:
* toEqual recursively checks every field of an object or array.
* note: toEqual ignores object keys with undefined properties, undefined array items, 
* array sparseness, or object type mismatch. To take these into account use toStrictEqual instead.
**/

/*

test('object assignment', () => {
    const data = { one: 1 };
    data['two'] = 2;

    expect(data).toEqual({ one: 1, two: 2 });
});

*/

/*

test('adding positive numbers is not zero', () => {
    for (let a = 1; a <= 10; a++) {
        for (let b = 1; b <= 10; b++) {
            expect(a + b).not.toBe(0);
        }
    }
});

*/

/**
 * Truthiness
 * `toBeNull` matches only null
 * `toBeUndefined` matches only undefined
 * `toBeDefined` is the opposite of toBeUndefined
 * `toBeTruthy` matches anything that an if statement treats as true
 * `toBeFalsy` matches anything that an if statement treats as false
 */

/*

test('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
});

*/


test('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
});