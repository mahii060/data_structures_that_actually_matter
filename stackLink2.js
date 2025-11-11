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
    push(value) {
        const newNode = new Node(value)
        if (!this.top) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
        return this;
    }


    pop() {
        if (this.isEmpty()) return null

        const poppedNode = this.top;

        if (this.length === 1) {
            this.top = null;
            this.bottom = null;
        } else {
            this.top = this.top.next;
        }
        this.length--;
        poppedNode.next = null;
        return poppedNode.value;
    }

    peek() {
        return this.top ? this.top.value : null
    }

    isEmpty() {
        return !this.length
    }
    clear() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    print() {
        let arr = []
        let currentNode = this.top;
        while (currentNode) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }

        console.log(arr);
    }
}
const stackLinkedList = new StackLinkedList();
stackLinkedList.push(1)
stackLinkedList.push(2)
stackLinkedList.push(3)
stackLinkedList.push(4)
stackLinkedList.push(5)

stackLinkedList.print()
console.log(stackLinkedList);

stackLinkedList.pop()
stackLinkedList.print()
console.log(stackLinkedList);