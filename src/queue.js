const { NotImplementedError } = require('../extensions/index.js');
const { ListNode } = require('../extensions/list-node.js');

class Queue {
  constructor() {
    this.head = null;
    this.length = 0;
  }
  getUnderlyingList() {
    let list;
    if (this.length === 0) {
      list = new ListNode(null);
    } else {
      list = this.head;
    }
    return list;
  }
  enqueue( value ) {
    let node = new ListNode(value);
    if (this.length === 0) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.length++;
  }
  dequeue() {
    let del = this.head;
    this.head = this.head.next;
    return del.value;
  }
}

module.exports = {
  Queue
};