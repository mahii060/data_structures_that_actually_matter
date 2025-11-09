class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    append(value) {
        const newNode = new Node(value)

        // If the linked list is empty
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode; // as there is only one element in the linked list, so head = tail;
        } else {
            // If the linked list is not empty
            this.tail.next = newNode; // add the reference of next node to the first node which was considered tail
            this.tail = newNode; // as there is 2nd node, then put the the 2nd node as tail.

        }

        // As this is class approach, manually increase the value of length;
        this.length++

    }

    prepend(value) {

        const newNode = new Node(value)

        // If the linked list is empty
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode; // as there is only one element in the linked list, so head = tail;
        } else {
            // If the linked list is not empty
            newNode.next = this.head;
            this.head = newNode;


        }

        // As this is class approach, manually increase the value of length;
        this.length++
    }


    insert() { }

    remove() { }

    print() {
        let currentNode = this.head;
        while (currentNode !== null) {
            console.log(currentNode.value);
            currentNode = currentNode.next;
        }
    }
}

const linkedList = new LinkedList();
linkedList.append(1)
linkedList.append(2)
linkedList.append(3)
linkedList.append(4)
linkedList.append(5)
linkedList.append(6)

linkedList.prepend(9)
linkedList.prepend(8)
linkedList.prepend(7)
linkedList.print()

console.log(linkedList);