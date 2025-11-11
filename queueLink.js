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
            this.tail = newNode; // which is best practice. this.tail = this.head || newNode
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

        const dequeuedNode = this.head;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
        }
        this.length--;

        // detach the dequeued node
        dequeuedNode.next = null
        return dequeuedNode.value;
    }
    peek() {
        return this.head ? this.head.value : null
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

console.log(queueLinkedList.dequeue());
// queueLinkedList.dequeue()
// queueLinkedList.print()
// console.log(queueLinkedList);