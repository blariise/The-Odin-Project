export default class LinkedList {
  #head = null;

  constructor() {
    this.#head = null;
  }

  append(value) {
    const newNode = new Node(value, null);
    if (this.#head == null) {
      this.#head = newNode;
    } else {
      this.tail().setNextNode(newNode);
    }
  }

  prepend(value) {
    const newNode = new Node(value, null);
    if (this.#head == null) {
      this.#head = newNode;
    }
    let oldHead = this.#head;
    newNode.setNextNode(oldHead);
    this.#head = newNode;
  }

  size() {
    let node = this.#head;
    let index = 0;
    while (node !== null) {
      ++index;
      node = node.getNextNode()
    }
    return index;
  }

  head() {
    return this.#head;
  }

  tail() {
    let node = this.#head;
    let tail;
    while (node !== null) {
      tail = node;
      node = node.getNextNode();
    }
    return tail;
  }

  at(index) {
    if (this.size() <= index || index < 0) {
      throw new Error("Out of bound");
    }
    let node = this.#head;
    let i = 0;
    while (i !== index) {
      node = node.getNextNode();
      ++i;
    }
    return node;
  }

  pop() {
    if (this.size() === 0) {
      throw new Error("You cant pop from empty list");
    }
    if (this.size() === 1) {
      this.#head = null;
    } else {
      let secondLastNode = this.at(this.size()-2);
      secondLastNode.setNextNode(null);
    }
  }

  contains(value) {
    let node = this.#head;
    for (let i = 0; i < this.size(); ++i) {
      if (node.getValue() === value) {
        return true;
      }
      node = node.getNextNode();
    }
    return false;
  }

  find(value) {
    let node = this.#head;
    for (let i = 0; i < this.size(); ++i) {
      if (node.getValue() === value) {
        return i;
      }
      node = node.getNextNode();
    }
    return null;
  }

  toString() {
    if (this.size() === 0) {
      return "";
    }
    let node = this.#head;
    let output = "";
    while (node !== null) {
      output += `( ${node.getValue()} ) -> `;
      node = node.getNextNode();
    }
    output += "null";
    return output;
  }

  insertAt(value, index) {
    if (index >= this.size() || index < 0 ) {
      throw new Error("Out of bound");
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      const leftNode = this.at(index-1);
      const rightNode = this.at(index);
      const newNode = new Node(value, rightNode);
      leftNode.setNextNode(newNode);
    }
  }

  removeAt(index) {
    if (index >= this.size() || index < 0 ) {
      throw new Error("Out of bound");
    }
    if (index === 0) {
      this.#head = this.#head.getNextNode();
    } else if (index === this.size() - 1) {
      this.pop();
    } else {
      const leftNode = this.at(index - 1);
      const rightNode = this.at(index + 1);
      leftNode.setNextNode(rightNode);
    }
  }
}

class Node {
  #value = null;
  #nextNode = null;
  constructor(value, nextNode) {
    this.#value = value;
    this.#nextNode = nextNode;
  }

  getValue() {
    return this.#value;
  }

  getNextNode() {
    return this.#nextNode;
  }

  setValue(value) {
    this.#value = value;
  }

  setNextNode(nextNode) {
    this.#nextNode = nextNode;
  }
}

