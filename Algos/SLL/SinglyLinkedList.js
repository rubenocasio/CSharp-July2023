/*

  https://visualgo.net/en
  https://www.geeksforgeeks.org/applications-of-linked-list-data-structure/

*/
// This is the class for our Singly Linked Node
class SLNode {
  // The constructor is built to take 1 parameter; the value of the node we want
  // to create
  constructor(val) {
    // The node's actual value being set to the value passed in through the constructor
    this.value = val;
    // And the pointer that refers to the node next in the sequence after
    // this node. Note it starts as null, because when you first create a node,
    // it is not connected to anything.
    this.next = null;
  }
}

class SLList {
  constructor() {
    // The head marks the beginning of the linked list.
    this.head = null;
    // Note that it's null. This is because when you first create a list, it's empty!
  }
  /**
 * Determines if this list is empty. Write a method that returns a
 * boolean based on whether or not the list is empty.
 * - Time: O(1) constant.
 * - Space: O(1) constant.
 * @returns {boolean}
 */
  isEmpty() {
    // return this.head === null;
    // or
    if (!this.head) {
      // console.log("Yes, this be empty!!")
      return true
    } else {
      return false
    }
  }

  /*
    Write a method that will add to the back of a singly linked list.

    Hint: Essentially, have a runner start at the head, traverse along to the end, 
    then create a new node at the end, and reassign the last node's .next pointer
    to the new node.

    * Creates a new node with the given data and inserts it at the back of
   * this list.
   * - Time: O(n) linear, n = length of list.
   * - Space: O(1) constant.
   * @param {any} data The data to be added to the new node.
   * @returns {SinglyLinkedList} This list.
  */
  addToBack(value) {
    if (this.isEmpty()) {
      this.head = new SLNode(value)
      return this;
    }

    let runner = this.head;

    while (runner.next != null) {
      runner = runner.next
    }

    runner.next = new SLNode(value);

    return this;
  }
  /**
   * BONUS: Creates a new node with the given data and inserts it at the back of
   * this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} data The data to be added to the new node.
   * @param {?SLNode} runner The current node during the traversal of this list
   *    or null when the end of the list has been reached.
   * @returns {SLList} This list.
   */
  addToBackRecursive(data, runner = this.head) {
    //Code goes here
  }

  //****** Tuesday Algo ********

  /**
   * Creates a new node with the given data and inserts that node at the front
   * of this list.
   * - Time: (?).
   * - Space: (?).
   * @param {any} data The data for the new node.
   * @returns {SLList} This list.
   */
  addToFront(value) {
    // Step 1: Let's create our new node
    let newNode = new SLNode(value);

    // Step 2: Assign that new node's .next pointer to be the current head of the list
    newNode.next = this.head;

    // Step 3: And reassign the head of the list to now be the new node.
    this.head = newNode;

    // Step 4: Return the list.
    return this;
  }

  /**
   * Removes the first node of this list.
   * - Time: (?).
   * - Space: (?).
   * @returns {any} The data from the removed node.
   */
  removeHead() {
    // If the list is empty, we can't possibly remove anything
    if (this.isEmpty()) {
      // So let's let it be known and just return the list.
      console.log("List is already empty.");
      return null;
    }
    // Let's hold onto the current head so we can eventually return it
    let removed = this.head;
    // Set the head to the current head's next node
    this.head = removed.next;
    // Chop off the removed node's .next so we can treat it
    // as a stand-alone node
    removed.next = null;

    // and return it.
    return removed;

  }

  // 
  /**BONUS: Calculates the average of this list.
   * - Time: (?).
   * - Space: (?).
   * @returns {number|NaN} The average of the node's data.
   */
  average() {
    if (this.isEmpty()) {
      console.log("List is empty.");
      return 0;
    }

    // We'll use 2 variables to keep track of the sum and number of nodes
    let sum = 0;
    let count = 0;

    // Let's start our runner at the head of the list
    let runner = this.head;

    // And move it until it's null
    while (runner != null) {

      // At each node, we'll add its value to the sum and increment our counter
      sum += runner.value;
      count++;

      // and move the runner down the list
      runner = runner.next;
    }
    // Now that we've touched all of the nodes, lets calculate and return the average.
    return sum / count;
  }

  //****** Wednesday *******

  /**
   * Removes the last node of this list.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {any} The data from the node that was removed.
   */
  removeBack() {
    // First step: Is the list empty?
    if (this.isEmpty()) {
      console.log("List is empty.");
      return null;
    }
    // Second step: Is the list only one element long? 
    // If so, just set the head to null
    else if (this.head.next == null) {
      let temp = this.head;
      this.head = null;
      return temp;
    }
    //If either of those conditions weren't met, let's get down to business
    else {
      // We'll need 2 iterators. Let's call them runner and walker

      // walker will start at the head, and runner at the 2nd node
      let walker = this.head;
      let runner = this.head.next;

      // And let's iterate so that runner reachest the last node,
      // with walker remaining 1 node behind
      while (runner.next != null) {
        // move walker to the runner
        walker = runner;
        // and move runner to the next node
        runner = runner.next;
      }
      // If we've broken out of the loop, then runner is the last node,
      // and walker is the second to last node.

      // Set walker.next to null, which essentially lops runner off 
      walker.next = null;
      // and return the runner (previously the final node)
      return runner;
    }
  }

  /**
   * Determines whether or not the given search value exists in this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} val The data to search for in the nodes of this list.
   * @returns {boolean}
   */
  contains(value) {
    // Basically what we want to do here is run through each node
    // and check for a matching value.
    // So let's create our runner
    let runner = this.head;
    while (runner != null) {
      // We'll check if the runner's value matches the value requested
      if (runner.value == value) {
        // if they match, the list contains that value!
        return true;
      }
      // Otherwise let's progress down the list
      runner = runner.next;
    }
    // if we checked every node in the list and never found the value,
    // then the list clearly doesn't contain that value.
    return false;
  }

  /**
   * EXTRA Determines whether or not the given search value exists in this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} val The data to search for in the nodes of this list.
   * @param {ListNode?} current The current node during the traversal of this list
   *    or null when the end of the list has been reached.
   * @returns {boolean}
   */
  containsRecursive(val, current = this.head) {
    //Code goes here
  }

  /*
   * EXTRA
   * Recursively finds the maximum integer data of the nodes in this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {ListNode} runner The start or current node during traversal, or null
   *    when the end of the list is reached.
   * @param {ListNode} maxNode Keeps track of the node that contains the current
   *    max integer as it's data.
   * @returns {?number} The max int or null if none.
   */
  recursiveMax(runner = this.head, maxNode = this.head) { }

  //****** Thursday *******

  /**
   * Retrieves the data of the second to last node in this list.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {any} The data of the second to last node or null if there is no
   *    second to last node.
   */
  secondToLast() {
    if (!this.head || !this.head.next) {
      return null;
    }

    // There are at least 2 nodes since the above return hasn't happened.
    let runner = this.head;

    while (runner.next.next) {
      runner = runner.next;
    }
    return runner.data;
  }

  /**
   * Removes the node that has the matching given val as it's data.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} val The value to compare to the node's data to find the
   *    node to be removed.
   * @returns {boolean} Indicates if a node was removed or not.
   */
  removeVal(val) {
    if (this.isEmpty()) {
      return false;
    }

    if (this.head.data === val) {
      this.removeHead();
      return true;
    }

    let runner = this.head;

    while (runner.next) {
      if (runner.next.data === val) {
        runner.next = runner.next.next;
        return true;
      }
      runner = runner.next;
    }
    return false;
  }

  // EXTRA
  /**
   * Inserts a new node before a node that has the given value as its data.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} newVal The value to use for the new node that is being added.
   * @param {any} targetVal The value to use to find the node that the newVal
   *    should be inserted in front of.
   * @returns {boolean} To indicate whether the node was pre-pended or not.
   */
  prepend(newVal, targetVal) { }

  //****** Friday *******
  /**
   * Concatenates the nodes of a given list onto the back of this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {SinglyLinkedList} addList An instance of a different list whose
   *    whose nodes will be added to the back of this list.
   * @returns {SinglyLinkedList} This list with the added nodes.
   */
  concat(list) {
    if (this.isEmpty()) {
      this.head = list.head;
      list.head = null;
      return this;
    }

    let runner = this.head;
    while (runner.next != null) {
      runner = runner.next;
    }
    runner.next = list.head;
    list.head = null;
    return this;
  }

  /**
   * Finds the node with the smallest data and moves that node to the front of
   * this list.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {SinglyLinkedList} This list.
   */
  moveMinToFront() {
    if (this.isEmpty()) {
      return this;
    }
    let min = this.head;
    let minPrev = null;
    let runner = this.head.next;
    while (runner.next != null) {
      if (runner.next.value < min.value) {
        min = runner.next;
        minPrev = runner;
      }
      runner = runner.next;
    }

    if (min != this.head) {
      minPrev.next = min.next;
      min.next = this.head;
      this.head = min;
    }

    return this;
  }

  // EXTRA
  /**
   * Splits this list into two lists where the 2nd list starts with the node
   * that has the given value.
   * splitOnVal(5) for the list (1=>3=>5=>2=>4) will change list to (1=>3)
   * and the return value will be a new list containing (5=>2=>4)
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} val The value in the node that the list should be split on.
   * @returns {SinglyLinkedList} The split list containing the nodes that are
   *    no longer in this list.
   */
  splitOnVal(val) {
    if (this.isEmpty()) {
      return null;
    }

    let runner = this.head;

    if (this.head.value == val) {
      let newList = new SLList();
      newList.head = this.head;
      this.head = null;
      return newList;
    }

    while (runner.next != null) {
      if (runner.next.value == val) {
        let newList = new SLList();
        newList.head = runner.next;
        runner.next = null;
        return newList;
      }
      runner = runner.next;
    }

    return null;
  }

  /**
 * Reverses this list in-place without using any extra lists.
 * - Time: (?).
 * - Space: (?).
 * @returns {SinglyLinkedList} This list.
 */
  reverse() { }

  /**
   * Determines whether the list has a loop in it which would result in
   * infinitely traversing unless otherwise avoided. A loop is when a node's
   * next points to a node that is behind it.
   * - Time: (?).
   * - Space: (?).
   * @returns {boolean} Whether the list has a loop or not.
   */
  hasLoop() { }

  /**
   * Removes all the nodes that have a negative integer as their data.
   * - Time: (?).
   * - Space: (?).
   * @returns {SinglyLinkedList} This list after the negatives are removed.
   */
  removeNegatives() { }

  //Here's a gimme: This will print the contents of a singly linked list.
  printList() {
    if (this.isEmpty()) {
      console.log("This list is empty");
      return this;
    }
    let toPrint = "";
    let runner = this.head;
    while (runner != null) {
      toPrint += `${runner.value} -> `;
      runner = runner.next;
    }
    console.log(toPrint);
    return this;
  }

}

/******************************************************************* 
Multiple test lists already constructed to test your methods on.
Below commented code depends on insertAtBack method to be completed,
after completing it, uncomment the code.
*/
let myList = new SLList();

myList.addToBack(1).addToBack(2).addToBack(3).addToBack(4).addToBack(5).addToBack(-8).addToBack(-6);
myList.printList()

myList.addToFront(60).addToFront(75).addToFront(23).addToFront(11).addToFront(88).addToFront(55).addToFront(45).addToFront(25)
myList.printList()

myList.removeHead()
myList.printList()

console.log(myList.average())

myList.removeBack()
myList.printList()

console.log(myList.contains(60))
myList.secondToLast()
myList.removeVal(60)
myList.printList()