// Stateful vs stateless


// Here function is stateless, cause it doesn't store any previous information.
let count = 0;
const counter = (amount) => {
    count = count + amount;
    return count
}
// console.log(counter(3));
// console.log(counter(5));


// Here object is stateful, cause it remembers previous value;
const counter2 = {
    count: 0,

    add(amount) {
        this.count = this.count + amount
    },

    print() {
        console.log(this.count);
    }
}

// counter2.add(2)
// counter2.add(3)

// counter2.print()


const arr = [1, 2, 3, 4, 5, 6, 8, 9, 7, 0, 45]
const lastItem = arr[(arr.length - 1)]
// const out = arr.pop();
console.log(lastItem);