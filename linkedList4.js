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
            this.tail = this.head;
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

        // Add node in the middle of the linked list
        const leadingNode = this._traverseToIndex(index - 1);
        const holdingNode = leadingNode.next;

        const newNode = new Node(value);
        leadingNode.next = newNode;
        newNode.next = holdingNode;

        this.length++;

        return this;

    }

    // remove node from any index
    remove(index) {
        if (index < 0 || index >= this.length) {
            console.error("Sorry, Can't remove node, Index is out of bound!")
            return undefined
        }

        // If i want to remove the first node from the linked list
        if (index === 0) {
            this.head = this.head.next;
            // If there is only one node in the linked list.
            if (this.length === 1) {
                this.tail = null;
            }
            this.length--;

            return this;
        }

        // remove from any index or tail
        const leadingNode = this._traverseToIndex(index - 1);
        const nodeToRemove = leadingNode.next;

        leadingNode.next = nodeToRemove.next;

        // If i remove the last node
        if (leadingNode.next === null) {
            this.tail = leadingNode;
        }

        this.length--;
        return this

    }

    // private function
    _traverseToIndex(index) {
        let count = 0;
        let currentNode = this.head;
        while (count !== index - 1) {
            currentNode = currentNode.next;
            count++;
        }
    }

    // Check if the linked list is empty. return true or false
    isEmpty() { }

    // Print the whole linked list
    print() {
        const values = [];
        let current = this.head;
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        console.log(values);
    }
}

const newLinkedList = new LinkedList();

newLinkedList.append(1) // index 5
newLinkedList.append(2) // index 4
newLinkedList.append(3) // index 3

// newLinkedList.remove(3)

newLinkedList.prepend(33) // index 2
newLinkedList.prepend(22) // index 1
newLinkedList.prepend(11) // index 0

newLinkedList.print()

// console.log(newLinkedList);