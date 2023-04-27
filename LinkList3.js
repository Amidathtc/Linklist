class Mercado {
    constructor(val) {
      this.value = value;
      this.next = null;
    }
  }
  
  class linkList2 {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    push(val) {
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
        let new1 = this.tail;
        let newTail = new1;
  
        while (new1.next) {
          this.tail = newTail;
          this.tail.next = null;
        }
  
        this.length--;
        return new1;
      }
    }
  }
  
  console.clear();
  let LinkedList = new linkList1();
  console.log(LinkedList.push(36));
  console.log(LinkedList.push(20));
  
  console.log(LinkedList.push([6, 8, 9]));
  console.log(LinkedList.push({ name: "Ayomide" }));
  console.log(LinkedList.push(08));
  console.log("");
  console.log(LinkedList.length);
  
  LinkedList.remove();
  
  console.log("");
  console.log(LinkedList.length);
  