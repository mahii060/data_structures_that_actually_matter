class Queue {
    constructor() {
        this.items = []
    }

    // O(1)
    enqueue(value) {
        this.items.push(value)
    }

    // O(n)
    dequeue() {
        if (this.isEmpty()) {
            return undefined
        }
        return this.items.shift()
    }

    // O(1) accessing array by index/
    peek() {
        if (this.isEmpty()) {
            return undefined
        }
        return this.items[0]
    }

    isEmpty() {
        return this.items.length === 0
    }

    print() {
        console.log(this.items);
    }
}

const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.print()
console.log(queue.dequeue());
queue.print()
