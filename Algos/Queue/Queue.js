// Import our stack data structure to use in this file.
const { Stack } = require("../Stack/Stack");

/**
 * Class to represent a queue using an array to store the queued items.
 * Follows a FIFO (First In First Out) order where new items are added to the
 * back and items are removed from the front.
 */
class Queue {
    constructor() {
        this.items = [];
    }

    /**
     * Adds a new given item to the back of this queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} item The new item to add to the back.
     * @returns {number} The new size of this queue.
     */
    enqueue(item) {
        this.items.push(item);
        return this.size();
    }

    /**
     * Removes and returns the first item of this queue.
     * - Time: O(n) linear, due to having to shift all the remaining items to
     *    the left after removing first elem.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    dequeue() {
        return this.items.shift();
    }

    /**
     * Retrieves the first item without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The first item or undefined if empty.
     */
    front() {
        return this.items[0];
    }

    /**
     * Returns whether or not this queue is empty.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean}
     */
    isEmpty() {
        return this.items.length === 0;
    }

    /**
     * Retrieves the size of this queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {number} The length.
     */
    size() {
        return this.items.length;
    }

    /**
     * Logs the items of this queue.
     * - Time: O(n) linear.
     * - Space: O(n) linear.
     * @returns {string} The same string that is logged.
     */
    print() {
        const str = this.items.join(" ");
        console.log(str);
        return str;
    }
    /**
   * Compares this queue to another given queue to see if they are equal.
   * Avoid indexing the queue items directly via bracket notation, use the
   * queue methods instead for practice.
   * Use no extra array or objects.
   * The queues should be returned to their original order when done.
   * - Time: O(n^2) quadratic, n = queue length. Quadratic due to dequeue on an
   *     array queue being O(n).
   * - Space: O(1) constant.
   * @param {Queue} q2 The queue to be compared against this queue.
   * @returns {boolean} Whether all the items of the two queues are equal and
   *    in the same order.
   */
    // This function compares two queues to check if they are equal.
    compareQueues(q2) {
        // First, check if the sizes of the two queues are different, if so, they can't be equal.
        if (this.size() !== q2.size()) {
            return false;
        }
        // Initialize a variable 'count' to 0 to keep track of the elements processed.
        let count = 0;
        // Initialize a variable 'isEqual' to true, assuming the queues are equal by default.
        let isEqual = true;
        // Get the length of the queue (both queues should have the same size by now).
        const len = this.size();

        // While loop: Check each element in both queues until we process all elements.
        while (count < len) {
            // Dequeue the first element from the first queue.
            const dequeued1 = this.dequeue();
            // Dequeue the first element from the second queue (q2).
            const dequeued2 = q2.dequeue();
            // Compare the dequeued elements from both queues.
            if (dequeued1 !== dequeued2) {
                // If the elements are not equal, set 'isEqual' to false, as the queues are not equal.
                isEqual = false;
            }
            // Add the dequeued elements back to their respective queues so their order is restored.
            this.enqueue(dequeued1);
            q2.enqueue(dequeued2);
            // Increment the 'count' to move to the next element in the queue.
            count++;
        }
        // After processing all elements, 'isEqual' will represent if the queues are equal or not.
        return isEqual;
    }

    /**
   * Determines if the queue is a palindrome (same items forward and backwards).
   * Avoid indexing queue items directly via bracket notation, instead use the
   * queue methods for practice.
   * Use only 1 stack as additional storage, no other arrays or objects.
   * The queue should be returned to its original order when done.
   * - Time: O(n^2) quadratic, n = queue length. Quadratic due to dequeue on an
   *     array queue being O(n).
   * - Space: O(n) from the stack being used to store the items again.
   * @returns {boolean}
   */
    // This function checks if a queue (represented by 'this') is a palindrome.
    isPalindrome() {
        // We assume it's a palindrome by default.
        let isPalin = true;
        // We create an empty stack and get the size of the queue.
        const stack = new Stack(),
            len = this.size();

        // First loop: Reverse the order of the queue's elements and store them in the stack.
        for (let i = 0; i < len; i++) {
            // Dequeue the first element from the queue.
            let dequeued = this.dequeue();
            // Push the dequeued element to the stack.
            stack.push(dequeued);
            // Add the dequeued element back to the queue so its order is restored at the end.
            this.enqueue(dequeued);
        }
        // Second loop: Compare the queue and stack elements to check if they match.
        for (let i = 0; i < len; i++) {
            // Dequeue the first element from the queue.
            let dequeued = this.dequeue();
            // Pop the top element from the stack.
            let popped = stack.pop();

            // If the dequeued element from the queue is not equal to the popped element from the stack,
            // then it means the queue is not a palindrome.
            if (popped !== dequeued) {
                isPalin = false;
            }

            // Add the dequeued element back to the queue so its order is restored at the end.
            this.enqueue(dequeued);
        }

        // Return whether the queue is a palindrome or not.
        return isPalin;
    }

    /**
     * Determines whether the sum of the left half of the queue items is equal to
     * the sum of the right half. Avoid indexing the queue items directly via
     * bracket notation, use the queue methods instead for practice.
     * Use no extra array or objects.
     * The queue should be returned to it's original order when done.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {boolean} Whether the sum of the left and right halves are equal.
     */

    isSumOfHalvesEqual() {
        // Get the total number of items in the queue
        const len = this.size();
    
        // If the number of items is odd, the queue can't be split evenly into two halves
        // So we return false immediately
        if (len % 2 !== 0) {
            return false;
        }
    
        // Calculate the size of a half of the queue
        const halfLen = len / 2;
        
        // Initialize counters for the sum of the values in the left half and right half of the queue
        let leftSum = 0;
        let rightSum = 0;
    
        // Initialize a count variable to keep track of how many items we've processed so far
        let count = 0;
    
        // While loop will continue until we've processed all items in the queue
        while (count < len) {
            // Remove the next item from the front of the queue
            const dequeued = this.dequeue();
    
            // If we're still processing the left half of the queue, add the dequeued item to leftSum
            // Otherwise, add the dequeued item to rightSum
            if (count < halfLen) {
                leftSum += dequeued;
            } else {
                rightSum += dequeued;
            }
    
            // Increment the count of items processed
            count++;
    
            // After processing an item, we add it back to the end of the queue
            // This allows us to process the entire queue without losing any items
            this.enqueue(dequeued);
        }
        // After all items have been processed, if the sums of the two halves are equal, return true
        // If the sums are not equal, return false
        return leftSum === rightSum;
    }
    

}
const q1 = new Queue();
const q2 = new Queue();

q1.enqueue(1)
q1.enqueue(2)
q1.enqueue(3);
q1.enqueue(3)
q1.enqueue(2)
q1.enqueue(10);
q1.print(); // 1 2 3 3 2 1
// q1.dequeue()
// q1.print();
console.log(q1.front()) //1
console.log(q1.size()) //6
console.log(q1.isPalindrome()); //true
console.log(q1.isSumOfHalvesEqual()) //true

q2.enqueue(1)
q2.enqueue(3)
q2.enqueue(3)
q2.enqueue(4);
q2.print(); // 1 3 3 4
console.log(q1.compareQueues(q2));

console.log("----Two Stack Below -----");

/* EXTRA: Rebuild the above class using a linked list instead of an array. */
/* 
    In order to maintain an O(1) enqueue time complexity like .push with an array
    We add a tail to our linked list so we can go directly to the last node
*/

class QueueNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedListQueue {
    constructor() {
        // The 'top' points to the first node (front) of the queue, initially null as the queue is empty.
        this.top = null;
        // The 'tail' points to the last node (back) of the queue, initially null as the queue is empty.
        this.tail = null;
        // The 'size' keeps track of the number of nodes in the queue, initially 0 as the queue is empty.
        this.size = 0;
    }

    /**
       * Determines if the queue is empty.
       * - Time: O(1) constant.
       * - Space: O(1) constant.
       * @returns {boolean} Indicates if the queue is empty.
       */
    isEmpty() {
        // The queue is empty if the 'top' points to null (the first node is null).
        return this.top === null;
    }

    /**
     * Adds a given value to the back of the queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} val The value to be added to the back of the queue.
     * @returns {number} The new size of the queue.
     */
    enqueue(val) {
        // Create a new node with the given value.
        const newNode = new QueueNode(val);

        // If the queue is empty, both 'top' and 'tail' should point to the new node.
        if (this.isEmpty()) {
            this.top = newNode;
            this.tail = newNode;
        } else {
            // If the queue is not empty, the current 'tail' node's next should point to the new node,
            // and the 'tail' should be updated to point to the new node (now the new tail).
            this.tail.next = newNode;
            this.tail = newNode;
        }

        // Increment the 'size' of the queue.
        this.size++;
        // Return the new size of the queue.
        return this.size;
    }

    /**
     * Removes and returns the first item from the front of the queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The removed item from the front of the queue or undefined if the queue is empty.
     */
    dequeue() {
        // If the queue is empty, there is nothing to dequeue, return undefined.
        if (this.isEmpty()) {
            return undefined;
        }

        // The 'removedItem' is the 'top' node's data (the data to be removed from the front of the queue).
        const removedItem = this.top.data;

        // Move the 'top' to the next node, effectively removing the first node (front) from the queue.
        this.top = this.top.next;

        // If the queue is now empty (i.e., the 'top' is null), update the 'tail' to also be null.
        if (this.top === null) {
            this.tail = null;
        }

        // Decrement the 'size' of the queue.
        this.size--;
        // Return the removed item from the front of the queue.
        return removedItem;
    }

    /**
     * Retrieves the first item from the front of the queue without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The first item from the front of the queue or undefined if the queue is empty.
     */
    front() {
        // If the queue is empty, there is nothing at the front to retrieve, return undefined.
        if (this.isEmpty()) {
            return undefined;
        }

        // The 'frontItem' is the 'top' node's data (the data at the front of the queue).
        const frontItem = this.top.data;
        // Return the first item from the front of the queue.
        return frontItem;
    }

    /**
     * Determines if the given item is in the queue.
     * - Time: O(n) linear, where n is the number of nodes in the queue (the size of the queue).
     * - Space: O(1) constant.
     * @param {any} searchVal The item to search for in the queue.
     * @returns {boolean} Indicates if the item is found in the queue.
     */
    contains(searchVal) {
        // Start from the 'top' node (front) of the queue.
        let currentNode = this.top;

        // Traverse through the queue nodes until the end (null is reached).
        while (currentNode !== null) {
            // If the current node's data matches the search value, return true (item is found in the queue).
            if (currentNode.data === searchVal) {
                return true;
            }
            // Move to the next node in the queue.
            currentNode = currentNode.next;
        }

        // The item was not found in the queue, return false.
        return false;
    }

    /**
     * Logs the items of this queue.
     * - Time: O(n) linear, where n is the number of nodes in the queue (the size of the queue).
     * - Space: O(n) linear, as the items are being stored in an array to be logged.
     * @returns {string} The same string that is logged.
     */
    print() {
        if (this.isEmpty()) {
            console.log("Queue is empty.");
            return "Queue is empty.";
        }

        let currentNode = this.top;
        const items = [];

        while (currentNode !== null) {
            items.push(currentNode.data);
            currentNode = currentNode.next;
        }

        const str = items.join(" ");
        console.log(str);
        return str;
    }

}
const llq1 = new LinkedListQueue();
const llq2 = new LinkedListQueue();
const llq3 = new LinkedListQueue();

// console.log(llq1.isEmpty())
// llq1.enqueue(1)
// llq1.enqueue(2)
// llq1.enqueue(3)
// llq1.enqueue(4)
// llq1.enqueue(5)
// llq1.print()
// console.log(llq1.dequeue())
// console.log(llq1.dequeue())
// console.log(llq1.dequeue())
// console.log(llq1.dequeue())
// console.log(llq1.dequeue())
// console.log(llq1.dequeue())
// llq1.print()
// llq1.enqueue(1)
// llq1.enqueue(2)
// llq1.enqueue(3)
// llq1.enqueue(4)
// llq1.enqueue(5000)
// console.log(llq1.front())
// console.log(llq1.contains(500))

/**
 * Class to represent a Queue but is implemented using two stacks to store the
 * queued items without using any other objects or arrays to store the items.
 * Retains the FIFO (First in First Out) ordering when adding / removing items.
 */
class TwoStackQueue {
    constructor() {
        this.stack1 = new Stack();
        this.stack2 = new Stack();
    }

    /**
     * Adds a new item to the back of the queue.
     * - Time: O(?).
     * - Space: O(?).
     * @param {any} item To be added.
     * @returns {number} The new number of items in the queue.
     */
    enqueue(item) {
        this.stack1.push(item);
        return this.stack1.size();
    }

    /**
     * Removes the next item in the line / queue.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {any} The removed item.
     */
    dequeue() {
        // if both stacks are empty, we can't dequeue an item
        if (this.stack1.isEmpty() && this.stack2.isEmpty()) {
            throw new Error('Queue is empty');
        }

        // if stack2 is empty and stack1 is not, we transfer all elements from stack1 to stack2.
        // the elements are now in reverse order in stack2, so we can pop and return the top element
        if (this.stack2.isEmpty()) {
            while (!this.stack1.isEmpty()) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.pop();
    }

}

const two1 = new TwoStackQueue();
const two2 = new TwoStackQueue();

two1.enqueue(1);
two1.enqueue(2);
two1.enqueue(3);
two1.enqueue(4);
two1.enqueue(5);
two1.enqueue(6);

console.log(two1.dequeue())
console.log(two1.dequeue())
console.log(two1)

// two2.enqueue(1);
// two2.enqueue(2);
// two2.enqueue(3);
// two2.enqueue(4);
// two2.enqueue(5);
// two2.enqueue(6);