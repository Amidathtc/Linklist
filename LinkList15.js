  
class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  class Linked {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
   Listed(val) {
      let Node = new Node(val);
  
      if (!this.head) {
        this.head = Node;
        this.tail = this.head;
      } else {
        this.tail.next = Node;
        this.tail = Node;
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
  console.log(LinkedList.push(40));
  console.log(LinkedList.push(20));
  
  console.log(LinkedList.push([6, 8, 5]));
  console.log(LinkedList.push({ name: " Wasilat" }));
  console.log(LinkedList.push(40));
  console.log("");
  console.log(LinkedList.length);
  
  LinkedList.remove();
  
  console.log("");
  console.log(LinkedList.length);
  