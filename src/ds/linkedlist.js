function CreateNode(value, next = null) {
  return {
    value,
    next
  };
}

function CreateLL() {
  return {
    head: null,
    tail: null,
    length: 0,
    // unshift
    prepend(item) {
      const node = CreateNode(item);
      if (!this.head) {
        this.head = node;
        this.tail = node;
        this.length++;
      }
      node.next = this.head;
      this.head = node;
      this.lenght++;
      return node;
    },
    // push
    push(item) {
      const node = CreateNode(item);
      if (!this.head) {
        this.head = node;
        this.tail = node;
        this.length++;
        return node;
      }
      this.tail.next = node;
      this.tail = node;
      this.length++;
      return node;
    },
    // pop
    pop() {
      if (!this.head) {
        return null;
      }
      const node = this.tail;
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
        this.length--;
        return node;
      }

      // get to the penultimate item
      // set next of penultimate to null
      // set tail as penultimate
      // return penultimate
      let current = this.head;
      let penultimate;
      while (current) {
        if (current.next === this.tail) {
          penultimate = current;
          break;
        }
        current = current.next;
      }
      penultimate.next = null;
      this.tail = penultimate;
      this.length--;
      return node;
    },
    get(index) {
      if (index < 0 || index >= this.length) {
        return null;
      }
      if (index === 0) {
        return this.head;
      }
      let current = this.head;
      let ctr = 0;
      while (ctr < index) {
        current = current.next;
        ctr++;
      }
      return current;
    },
    delete(index) {
      if (index < 0 || index >= this.length) {
        return null;
      }
      if (index === 0) {
        const deleted = this.head;
        this.head = this.head.next;
        this.length--;
        return deleted;
      }
      let current = this.head;
      let prev;
      let ctr = 0;
      while (ctr < index) {
        prev = current;
        current = current.next;
        ctr++;
      }
      const deleted = current;
      prev.next = current.next;
      // if its the last item being deleted...
      if (prev.next === null) {
        this.tail = prev;
      }
      this.length--;
      return deleted;
    },
    isEmpty() {
      return this.length === 0;
    },
    print() {
      let items = [];
      let current = this.head;
      while (current) {
        items.push(current.value);
        current = current.next;
      }
      console.log(items.join(" => "));
    }
  };
}

// Consume / Test Linked List
function test() {
  let list = CreateLL();
  const arr = ["a", "b", "c", "d", "e", "f"];
  arr.map(val => list.push(val));
  console.clear();
  console.log("Single Linked List");
  console.log("=============================");
  list.print();
  console.log(`is empty => `, list.isEmpty());
  console.log(`Popped => ${list.pop().value}`);
  list.print();
  console.log(`2nd item in the list =>  ${list.get(1).value}`);
  console.log(`Deleted 2nd item => ${list.delete(1).value}`);
  list.print();
  console.log(`2nd item in the list =>  ${list.get(1).value}`);
  console.log(`Pushed => ${list.push("g").value}`);
  console.log(`Prepended => ${list.prepend("Q").value}`);
  list.print();
}

test();

const LinkedList = {
  CreateLL,
  test
};

module.exports = LinkedList;
