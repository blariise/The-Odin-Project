import LinkedList from "./linkedList.js";

export default class HashSet {
  loadFactor = 0.75;
  capacity = 16;
  #buckets = new Array(this.capacity);

  constructor(loadFactor = 0.75, capacity = 16) {
    for (let i = 0; i < capacity; ++i) {
      const linkedList = new LinkedList();
      this.#buckets[i] = linkedList;
    }
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; ++i) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }
    return hashCode;
  }

  set(key) {
    const bucketIndex = this.hash(key);
    const bucket = this.#buckets[bucketIndex];

    const nodeIfCollision = this.#checkForCollision(key);
    if (!this.has(key)) {
      const load = this.length() / this.capacity;
      if (load >= this.loadFactor) {
        this.#doubleCapacity();
      }
      bucket.append(key);
    }
  }

  has(key) {
    return this.#checkForCollision(key) ? true : false;
  }

  remove(key) {
    const bucketIndex = this.hash(key);
    const bucket = this.#buckets[bucketIndex];
    
    let node = bucket.head();
    let oldKey;
    let i = 0;
    while (node) {
      oldKey = node.getValue();
      if (oldKey === key) {
        bucket.removeAt(i);
        return true;
      }
      ++i;
      node = node.getNextNode();
    }
    return false;
  }

  length() {
    const buckets = this.#buckets;
    let size = 0;
    for (let bucket of buckets) {
      size += bucket.size();
    }
    return size;
  }

  clear() {
    const buckets = this.#buckets;
    for (let i = 0; i < buckets.length; ++i) {
      const linkedList = new LinkedList();
      buckets[i] = linkedList;
    }
  }

  keys() {
    const allNodes = this.#getNodes();
    let node = allNodes.head();
    let keys = new Array(this.length());

    let i = 0;
    while (node) {
      keys[i] = node.getValue();
      ++i;
      node = node.getNextNode();
    }
    return keys;
  }

  #doubleCapacity() {
    this.capacity *= 2;
    let temp = new Array(this.capacity);
    temp = this.#buckets;
    for (let i = this.capacity / 2; i < this.capacity; ++i) {
      const linkedList = new LinkedList();
      temp[i] = linkedList;
    }
    this.#buckets = temp;
  }

  #checkForCollision(key) {
    const bucketIndex = this.hash(key);
    const bucket = this.#buckets[bucketIndex];

    let node = bucket.head();
    let oldKey;
    while (node) {
      oldKey = node.getValue();
      if (oldKey === key) {
        return node;
      }
      node = node.getNextNode();
    }
    return null;
  }

  #getNodes() {
    const buckets = this.#buckets;
    let output = new LinkedList();
    for (let bucket of buckets) {
      let node = bucket.head();
      let value;
      while (node) {
        value = node.getValue();
        output.append(value);
        node = node.getNextNode();
      }
    }
    return output;
  }

  toString() {
    const buckets = this.#buckets;
    let output = "";

    let i = 0;
    for (let bucket of buckets) {
      output += `Bucket [${i++}]: ${this.#bucketToString(bucket)}\n`;
    }
    return output;
  }

  #bucketToString(bucket) {
    let node = bucket.head();
    let output = "";
    let value;
    let key;

    while (node) {
      key = node.getValue();
      output += `{ "key": ${key} } -> `;
      node = node.getNextNode();
    }
    output += "null";
    return output;
  }
}

