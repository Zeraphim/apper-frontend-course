/*

In a previous exercise, we wrote a queue from scratch. For your homework, try implementing a stack from scratch. Whereas a queue follows FIFO, a stack follows Last In, First Out (LIFO). Methods we’ll need are `push`, `pop`,  and `check`. Make the `push` function accept an array as an input, where it only accepts the strings within that array. Name this file **`2-stack.js`**.

*/

const stack = new Stack()
stack.push("Milk")
stack.push("Eggs")
stack.check()  // [“Milk”, “Eggs”]
stack.pop()
stack.check()  // [“Milk”]
stack.pop()
stack.check()  // []
stack.push(["Ice Cream", 10, [], "Cellphone"])
stack.check()  // ["Ice Cream", "Cellphone"]
stack.pop()
stack.check()  // [“Cellphone”]
stack.pop()
stack.check()  // []
stack.pop()    // “Stack is currently empty.”