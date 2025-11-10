class Node {
    constructor(value) {
        this.value = value; // Holds the data 
        this.next = null; // reference to the next node
    }
}

class LinkedList {
    constructor() {
        this.head = null; // No first node yet
        this.tail = null; // No last node yet
        this.length = 0; //  No nodes in total
    }

    // Add node at the last in the linked list
    append(value) {

        const newNode = new Node(value)
        // If the linked list is empty
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode; // as there is only one node in the list, so head and the tail is the same.
        } else {
            // If the linked list is not empty
            this.tail.next = newNode; // there was only one node first time. As now there is a another node, so this node is the next of the tail node.
            this.tail = newNode; // as this is the new node in the linked list, so it is the tail node. 
        }
        this.length++;

        return this // this allows method chaining
    }

    // add node at the first in the linked list
    prepend(value) {
        const newNode = new Node(value)
        // If the linked list is empty
        if (this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        }
        // If the linked list is not empty means if there is any node in the linked list
        else {
            // # Important notice :-> Always link first then set he head

            newNode.next = this.head; // this is the existing node which was acting as the head. as now there is new node at the beginning so the new node becomes the head and existing (immediate past) node becomes the new node's next.

            this.head = newNode; // the prepended node which comes at the beginning at the linked list becomes the head
        }
        this.length++;

        return this // returning this allows method chaining
    }

    insert(index, value) {

        // index can't be less than 0 and index can't be bigger than length. index starts from 0 so it can't be less than 0. 
        // Invalid index check
        if (index < 0 || index > this.length) {
            console.error("Index is out of bound!")
            return undefined
        }

        // If index 0, that means node will be added at the beginning of the linked list which is prepend().
        if (index === 0) {
            return this.prepend(value)
        }

        // If the index === length, which means node will be added at the last of the linked list which is append(). Let's say 3 node is there. Index is counted from 0, total index is 0,1,2. Now if the index is 3 which is length that means node will be added at the last of the linked list as the tail.
        if (index === this.length) {
            return this.append(value)
        }

        // If the index is in the middle
        // Find the leading node
        const leadingNode = this._traverseToIndex(index - 1);
        const holdingNode = leadingNode.next; // The immediate node next to leading node;

        const newNode = new Node(value)
        leadingNode.next = newNode;
        newNode.next = holdingNode;

        this.length++;
    }

    remove(index) {
        // when i want to remove the first node
        // 1. bounds check
        if (index < 0 || index >= this.length) {
            console.error('Index out of bounds');
            return undefined;
        }

        // 2. remove head (index === 0)
        if (index === 0) {
            const nodeToRemove = this.head;
            this.head = this.head.next;        // move head forward
            // if list had only one node, update tail as well
            if (this.length === 1) {
                this.tail = null;
            }
            this.length--;
            return nodeToRemove;               // optional: return removed node
        }

        // 3. remove from middle or tail
        const leadingNode = this._traverseToIndex(index - 1); // guaranteed valid because of bounds check
        const nodeToRemove = leadingNode.next;                // the node we will remove

        // link over the nodeToRemove
        leadingNode.next = nodeToRemove.next;

        // if we removed the last node, update tail
        if (leadingNode.next === null) {
            this.tail = leadingNode;
        }

        this.length--;
        return nodeToRemove;


        // // If i want to remove from the middle
        // const leadingNode = this._traverseToIndex(index - 1);
        // // The node i want to remove 
        // const nodeToRemove = leadingNode.next;

        // // the node i want to place at leadingNode's next যেটা রিমুভ করতে চাই (needToRemove) সেটার next কে leadingNode এর next এর মধ্যে সেট করে দিলেই হয়ে যাবে। 

        // leadingNode.next = nodeToRemove.next;

        // // removing node from the last of the linked list
        // if (leadingNode.next === null) {
        //     this.tail = leadingNode;
        //     this.length--
        // }

    }

    //private helper method
    _traverseToIndex(index) {
        let count = 0;
        let currentNode = this.head; // why head => starting point. Start from the first node (head)
        while (count !== index) { // count will be running till the leading node (index -1).Keep going until you reach the target index
            currentNode = currentNode.next; // How next can be the leading node. Move to next node.
            count++;
        }
        return currentNode
    }

    print() {
        const arr = []
        let currentNode = this.head;

        while (currentNode !== null) {
            arr.push(currentNode.value)
            currentNode = currentNode.next;
        }
        console.log(arr.join(" -> ", "-> null"));
    }
}
const linkedList = new LinkedList();
// linkedList.append("A") // *0
// linkedList.append("B") // *0
// linkedList.append("C") // *2
linkedList.append("D") // *0

linkedList.print()

linkedList.remove(0)
// linkedList.remove(1)

linkedList.print()