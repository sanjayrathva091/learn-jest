# learn-jest

Jest is a popular testing framework for JavaScript applications, particularly for React applications. Jest is an open-source project maintained by Facebook and has a rich set of features for testing your code.

This readme file will guide you through the process of learning Jest. You'll learn the basics of how to set up Jest, write tests, and run them. By the end of this guide, you'll be able to write tests for your JavaScript applications using Jest.

## Getting started

To get started with Jest, you'll need to have Node.js installed on your machine. If you don't have Node.js installed, you can download it from the official website.

Once you have Node.js installed, you can install Jest using npm, which comes with Node.js. Run the following command in your terminal:

`npm install --save-dev jest`

This will install Jest as a dev dependency in your project.

## Writing your first test

To write a test with Jest, you'll need to create a file with a name that ends in .test.js or .spec.js. This tells Jest that the file contains tests. In this example, we'll create a file called sum.test.js that tests a function called sum.

```
function sum(a, b) {
  return a + b;
}
module.exports = sum;
To test this function, create a file called sum.test.js and add the following code:
```

```
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

In this test, we're using the test function provided by Jest to create a new test. The first argument is a description of the test, and the second argument is a function that contains the test code. We're using the expect function to make an assertion about the output of the sum function.

To run the test, run the following command in your terminal:

`npx jest`

This will run all tests in your project. In this case, it will run the sum test and output the result:

```
PASS  ./sum.test.js
✓ adds 1 + 2 to equal 3 (4ms)
```

## Matchers

Jest provides a variety of matchers that you can use to make assertions about your code. Here are some common matchers:

```
expect(value).toBe(otherValue): Tests for strict equality (===)
expect(value).toEqual(otherValue): Tests for deep equality
expect(value).toBeTruthy(): Tests if a value is truthy
expect(value).toBeFalsy(): Tests if a value is falsy
expect(value).toBeNull(): Tests if a value is null
expect(value).toBeUndefined(): Tests if a value is undefined
expect(value).toBeDefined(): Tests if a value is not undefined
expect(value).toContain(item): Tests if an array or string contains an item
expect(value).toBeInstanceOf(constructor): Tests if a value is an instance of a constructor function
```
