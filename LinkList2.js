class Mercado {
    constructor (val) {
     this.val = val;
     this.next = null;
    } 
  }
  
  class linkList3 {
      constructor () {
          this.head = null;
          this.tail = null;
          this.length = 0;
      }
      push(val) {
      let push = new Node(val);
  
      if(!this.head) {
          this.head = push;
          this.tail = this.head;
      } else {
          this.tail = push
          this.tail.next = push;
  
          this.length++;
          return this;
      } }
      remove() {
          if (!this.head) {
              return undefined;
          } else {
              let new3 =  this.tail;
              let newtail = new3;
  
              while(new2.next) {
              this.tail = newtail;
              this.tail.next = null;
              }
  
              this.length--;
              return new2;
          }
      }
      }
  
  // console.clear();
  // let LinkedList = new linkList();
  // console.log(LinkedList.push(12 ));
  // console.log(LinkedList.push(10));
  
  // console.log(LinkedList.push([6,7,10]));
  // console.log(LinkedList.push({name: "ayomide"}));
  // console.log(LinkedList.push(09));
  // console.log("");
  // console.log(LinkedList.length);
  
  // LinkedList.remove();
  
  // console.log("");
  // console.log(LinkedList.length);
  
  
  
  
  