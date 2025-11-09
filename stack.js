class Stack {
    constructor() {
        this.items = []
    }

    // O(1)
    push(value) {
        this.items.push(value)
    }

    // O(1)
    pop() {
        if (this.isEmpty()) {
            return undefined
        }
        return this.items.pop()
    }
    // O(1)
    peek() {
        if (this.isEmpty()) {
            return undefined
        }
        return this.items[(this.items.length - 1)]
    }

    isEmpty() {
        return this.items.length === 0
    }

    print() {
        console.log(this.items);
    }
}

const stack = new Stack();


stack.push(3);
stack.push(5);
stack.push(20);
stack.push(38);

console.log(stack.pop());
console.log(stack.peek());
stack.print()