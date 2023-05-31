const sayHello = require('./hello');

test('sayHello function returns "Hello, World!"', () => {
  expect(sayHello()).toBe("Hello, World!");
});
