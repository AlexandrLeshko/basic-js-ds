const { NotImplementedError } = require('../extensions/index.js');
const { ListNode } = require('../extensions/list-node.js');

class Queue {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  getUnderlyingList() {
    let underlyingList;
    (this.length === 0) ? underlyingList = new ListNode(null) : underlyingList = this.head;
    return underlyingList;
  }
  enqueue(value) {
    let newListNode = new ListNode(value);
    if (this.length === 0) {
      this.head = newListNode;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = newListNode;
    }
    this.length++;
  }
  dequeue() {
    let deletedNode = this.head;
    this.head = this.head.next;
    this.length--;
    return deletedNode.value;
  }
}

module.exports = {
  Queue
};