class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class QueueLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(value) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head; // which is best practice. this.tail = this.head || newNode
        } else {
            this.tail.next = newNode;
            this.tail = newNode
        }
        this.length++;
        return this
    }

    dequeue() {
        // Checking if there is node in the queue
        if (this.isEmpty()) return null

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
        }
        this.length--;
        return this;
    }
    peek() {
        return this.head ? this.head : null
    }

    isEmpty() {
        return this.length === 0
    }

    print() {
        let arr = [];
        let currentNode = this.head;
        while (currentNode) {
            arr.push(currentNode.value)
            currentNode = currentNode.next;
        }
        console.log(arr);
    }
}
const queueLinkedList = new QueueLinkedList()
queueLinkedList.enqueue(1)
queueLinkedList.enqueue(2)
queueLinkedList.enqueue(3)
queueLinkedList.enqueue(4)
queueLinkedList.enqueue(5)
queueLinkedList.print()
console.log(queueLinkedList);

queueLinkedList.dequeue()
queueLinkedList.dequeue()
queueLinkedList.dequeue()
queueLinkedList.print()
console.log(queueLinkedList);