class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    // Add node at the last of the linked list
    // O(1)
    append(value) {
        const newNode = new Node(value)

        // If the linked list is empty;
        if (this.head === null) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            this.tail.next = newNode;
        }

        this.tail = newNode;

        this.length++;

        return this;
    }

    // Add node to the beginning of the linked list
    // O(1)
    prepend(value) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            newNode.next = this.head;
        }

        this.head = newNode;

        this.length++;

        return this;
    }

    // Worst Cast:=> O(n)  Best Case:=>O(1)
    insert(index, value) {
        // Checking if the index is valid

        if (index == null || value == null) {
            console.error("Please provide index & value to insert a node!");
            return;
        }

        if (index < 0 || index > this.length) {
            console.error("Sorry! Can't insert item to the linked list. Index is out of bound");
            return undefined
        }

        // Insert node at the beginning
        if (index === 0) {
            return this.prepend(value);
        }

        // Insert node at the last 
        if (index === this.length) {
            return this.append(value)
        }

        // Insert node in the middle of the linked list
        const prevNode = this._traverseToIndex(index - 1);
        const holdingNode = prevNode.next;

        const newNode = new Node(value)
        prevNode.next = newNode;
        newNode.next = holdingNode;

        this.length++

        return this;

    }

    // Worst Cast:=> O(n)  Best Case:=>O(1)
    remove(index) {
        // Checking index validity
        if (index === undefined) {
            console.error("Please provide an index to remove!");
            return;
        }

        if (index < 0 || index >= this.length) {
            console.log("Sorry! Can't remove item. Index is out of bound");
            return undefined
        }

        // Removing node from the beginning of the linked list
        if (index === 0) {
            this.head = this.head.next;

            if (this.length === 1) {
                this.tail = null;
            }
            this.length--;
            return this
        }

        // Removing node from the middle or the last
        const prevNode = this._traverseToIndex(index - 1);
        const nodeToRemove = prevNode.next;

        prevNode.next = nodeToRemove.next;

        this.length--;
        return this;
    }

    // This method gives me the node of the given index
    _traverseToIndex(index) {
        let count = 0;
        let currentNode = this.head;
        while (count !== index) {
            currentNode = currentNode.next;
            count++;
        }
        return currentNode;
    }
    // O(n)
    print() {
        const arr = [];
        let currentNode = this.head;
        while (currentNode) {
            arr.push(currentNode.value)
            currentNode = currentNode.next;
        }
        console.log(arr);
    }
}

const linkedList = new LinkedList()

linkedList.append(1) // * 0
linkedList.append(2) // * 1
linkedList.append(3) // * 2
linkedList.append(4) // * 3

// linkedList.remove()
// linkedList.insert(4)

// linkedList.prepend(3)
// linkedList.prepend(2)
// linkedList.prepend(1)

// linkedList.insert(2, "ZZ")

linkedList.print()

console.log(linkedList);