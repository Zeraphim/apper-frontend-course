/*

In a previous exercise, we wrote a queue from scratch. For your homework, try implementing a stack from scratch. Whereas a queue follows FIFO, a stack follows Last In, First Out (LIFO). Methods we’ll need are `push`, `pop`,  and `check`. Make the `push` function accept an array as an input, where it only accepts the strings within that array. Name this file **`2-stack.js`**.

*/

class Stack {
    // Constructor, also accepts a list in instantiation of the object as initial items
    constructor(arr = []) {
      this.items = arr;
    }

    push(element) {
        // Check if the element is an array
        if (Array.isArray(element)) {
            // Filter the array to include only strings then push to items
            const filteredElements = element.filter(item => typeof item === 'string');
            for (const item of filteredElements) {
                this.items.push(item);
            }
        // If not an array, push the element directly to items
        } else {
            this.items.push(element);
        }
    }

    pop() {
        // If length of items is zero then print a message.
        if (this.items.length === 0) {
            console.log("Stack is currently empty. 😒");
            return;
        }
        // If there's something to remove in array then remove the last element
        return this.items.pop();
    }

    // Prints the items
    check() {
        console.log(this.items);
    }
}

const stack = new Stack()
stack.push("Milk 🥛")
stack.push("Eggs 🥚")
stack.check()  // [“Milk”, “Eggs”]
stack.pop()
stack.check()  // [“Milk”]
stack.pop()
stack.check()  // []
stack.push(["Ice Cream 🍦", 10, [], "Cellphone 📱"])
stack.check()  // ["Ice Cream", "Cellphone"]
stack.pop()
stack.check()  // [“Ice Cream”]
stack.pop()
stack.check()  // []
stack.pop()    // “Stack is currently empty.”