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
    prepend(value) {
        const newNode = new Node(value);
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head; // first create link with the newNode.next to this.head
            this.head = newNode; // then set the newNode as the this.head
        }

        this.length++;

        return this;
    }

    // insert node at any index 
    insert(index, value) {
        // Checking valid index
        if (index < 0 || index > this.length) {
            console.error("Index is out of reach")
            return undefined;
        }

        // Checking if the index is 0 which is add node at the beginning
        if (index === 0) {
            return this.prepend(value);
        }

        // If the index is equal to length that means node will be added at the last of the linked list.
        if (index === this.length) {
            return this.append(value)
        }
    }

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

newLinkedList.prepend(33)
newLinkedList.prepend(22)
newLinkedList.prepend(11)

console.log(newLinkedList);