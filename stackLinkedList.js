/*
Stack is Last In First Out
*/

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class StackLinkedList {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }
    // Add node at the top of the linked list
    push(value) {
        const newNode = new Node(value);

        // If the linked list is empty
        if (!this.top) { // previous code this.top === null
            this.top = newNode;
            this.bottom = this.top;

        } else {
            newNode.next = this.top;
            this.top = newNode;
        }

        this.length++
        return this;
    }

    pop() {

        if (this.isEmpty()) return null

        const poppedNode = this.top;

        if (this.length === 1) {
            this.top = null;
            this.bottom = null;
        } else {
            this.top = this.top.next

        }
        this.length--;
        // Detaching the popped node
        poppedNode.nex = null;
        return poppedNode.value

    }

    peek() {
        return this.top ? this.top : null
        // if (!this.length) {
        //     console.log("Sorry! There is no node in the stack");
        //     return undefined
        // }
        // console.log(this.top);
        // return this.top.value; // Previous code return this.top

    }

    isEmpty() {
        return this.length === 0;
    }

    print() {
        let arr = [];
        let currentNode = this.top
        while (currentNode) {
            arr.push(currentNode.value)
            currentNode = currentNode.next;
        }
        console.log(arr);
    }
    clear() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
        return this;
    }
}

const stackLinkedList = new StackLinkedList();
stackLinkedList.push(1)
stackLinkedList.push(2)
stackLinkedList.push(3)
stackLinkedList.push(4)
// stackLinkedList.peek()

stackLinkedList.print()
console.log(stackLinkedList);
stackLinkedList.clear()
stackLinkedList.print()
// stackLinkedList.pop()
// stackLinkedList.print()

console.log(stackLinkedList);