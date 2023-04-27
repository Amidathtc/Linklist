class Node {
    constructor(val) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    list(val) {
      let Node = new Node(val);
  
      if (!this.head) {
        this.head = node;
        this.tail = this.head;
      } else {
        this.tail.next = node;
        this.tail = node;
      }
      this.length++;
      return this;
    }
    remove() {
      if (!this.head) {
        return undefined;
      } else {
        let current = this.tail;
        let newTail = current;
  
        while (new1.next) {
          this.tail = newTail;
          this.tail.next = null;
        }
  
        this.length--;
        return current;
      }
    }
  }
  
  console.clear();
  let newList = new LinkedList();
  console.log(LinkedList.push(299));
  console.log(LinkedList.push(200));
  
  console.log(LinkedList.push([6, 8, 9]));
  console.log(LinkedList.push({ name: " Faith" }));
  console.log(LinkedList.push(08));
  console.log("");
  console.log(LinkedList.length);
  
  LinkedList.remove();
  
  console.log("");
  console.log(LinkedList.length);
  