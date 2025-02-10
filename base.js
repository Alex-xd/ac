class Base {
  constructor(testCases = []) {
    this.testCases = testCases;
    return new Proxy(this, {
      get(target, prop, receiver) {
        const originalMethod = target[prop];
        if (typeof originalMethod === "function") {
          return function (...args) {
            if (args.length === 0 && target.testCases.length > 0) {
              target.testCases.forEach((testCase) => {
                const [input, expected] = testCase;
                const result = originalMethod.apply(target, [input]);
                const isSuccess = result === expected ? "Success" : "Fail";
                console.log(
                  `${prop}(${input}): ${result} (Expected: ${expected}) - ${isSuccess}`
                );
              });
            } else {
              const result = originalMethod.apply(target, args);
              console.log(`${prop}: ${result}`);
              return result;
            }
          };
        }
        return originalMethod;
      },
    });
  }
}

export default Base;

// Example usage:
// class SubClass extends Base {
//   someMethod(arg) {
//     return `Hello, ${arg}!`;
//   }
// }
// const instance = new SubClass([
//   ["World", "Hello, World!"],
//   ["Copilot", "Hello, Copilot!"]
// ]);
// instance.someMethod(); // This will log: 'someMethod(World): Hello, World! (Expected: Hello, World!) - Success' and 'someMethod(Copilot): Hello, Copilot! (Expected: Hello, Copilot!) - Success'
// instance.someMethod("User"); // This will log: 'someMethod: Hello, User!'
