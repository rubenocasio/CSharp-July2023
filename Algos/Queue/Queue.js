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
}
const q1 = new Queue();
const q2 = new Queue();

q1.enqueue(1)
q1.enqueue(3)
q1.enqueue(3);
q1.print();
q1.dequeue()
q1.print();
console.log(q1.front())
console.log(q1.size())

// q2.enqueue(1)
// q2.enqueue(3)
// q2.enqueue(3)
// q2.enqueue(4);
// q2.print();

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
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {boolean} Indicates if the list is empty.
     */
    isEmpty() { }

    /**
     * Adds a given val to the back of the queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} val
     * @returns {number} The new size of the queue.
     */
    enqueue(val) { }

    /**
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The removed item.
     */
    dequeue() { }

    /**
     * Retrieves the first item without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The first item.
     */
    front() { }

    /**
     * Determines if the given item is in the queue.
     * - Time: O(n) linear.
     * - Space: O(1) constant.
     * @param {any} searchVal
     * @returns {boolean}
     */
    contains(searchVal) { }
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