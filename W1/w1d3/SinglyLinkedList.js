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
    //Code goes here
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

  /**
   * Creates a new node with the given data and inserts that node at the front
   * of this list.
   * - Time: (?).
   * - Space: (?).
   * @param {any} data The data for the new node.
   * @returns {SLList} This list.
   */
  addToFront(value) {
    //Code goes here
  }

  /**
   * Removes the first node of this list.
   * - Time: (?).
   * - Space: (?).
   * @returns {any} The data from the removed node.
   */
  removeHead() {
    //Code goes here
  }

  // 
  /**BONUS: Calculates the average of this list.
   * - Time: (?).
   * - Space: (?).
   * @returns {number|NaN} The average of the node's data.
   */
  average() {
    //Code goes here
  }

  /**
   * Removes the last node of this list.
   * - Time: O(?).
   * - Space: O(?).
   * @returns {any} The data from the node that was removed.
   */
  removeBack() {
    //Code goes here
  }

  /**
   * Determines whether or not the given search value exists in this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} val The data to search for in the nodes of this list.
   * @returns {boolean}
   */
  contains(val) {
    //Code goes here
  }

  /**
   * Determines whether or not the given search value exists in this list.
   * - Time: O(?).
   * - Space: O(?).
   * @param {any} val The data to search for in the nodes of this list.
   * @param {?ListNode} current The current node during the traversal of this list
   *    or null when the end of the list has been reached.
   * @returns {boolean}
   */
  containsRecursive(val, current = this.head) {
    //Code goes here
  }


  // Here's a gimme: This will print the contents of a singly linked list.
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

// const singleNodeList = new SinglyLinkedList().addToBack([1]);
// const biNodeList = new SinglyLinkedList().addToBack([1, 2]);
// const firstThreeList = new SinglyLinkedList().addToBack([1, 2, 3]);
// const secondThreeList = new SinglyLinkedList().addToBack([4, 5, 6]);
// const unorderedList = new SinglyLinkedList().addToBack([-5, -10, 4, -3, 6, 1, -7, -2,]);
