class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null; // No first node yet
        this.tail = null; // No last node yet
        this.length = 0; // No node in total
    }

    // Add node at the last of the linked list
    append(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode; // as i'm appending so tail.next moved to newNode.
            this.tail = newNode
        }
        this.length++;

        return this
    }

    // Add node at the beginning of the linked list
    prepend() { }

    // insert node at any index 
    insert() { }

    // remove node from any index
    remove() { }

    // Check if the linked list is empty. return true or false
    isEmpty() { }

    // Print the whole linked list
    print() { }
}

const newLinkedList = new LinkedList();

newLinkedList.append(1)
newLinkedList.append(2)
newLinkedList.append(3)
console.log(newLinkedList);