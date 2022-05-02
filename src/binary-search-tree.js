const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
      this.data = data;
      this.left = null;  
      this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.top = null;
  }
  root() {
   // throw new NotImplementedError('Not implemented');
    return this.top;
  }

  add(data) {
    //throw new NotImplementedError('Not implemented');
    let newNode = new Node(data);

    if(this.top === null) {
        this.top = newNode;
    } else {
        this.addNode(this.top, newNode);
    } }
  addNode(node, newNode) {
      if(newNode.data < node.data) {
          if(node.left === null) {
              node.left = newNode;
          } else {
              this.addNode(node.left, newNode);
          }
      } else {
          if(node.right === null) {
              node.right = newNode;
          } else {
              this.addNode(node.right, newNode);
          }
      }
  }
  

  has(data) {
    //throw new NotImplementedError('Not implemented');
    let node = this.top;
    if(node === null) {
      return false;
    } else if(data < this.data) {
      return this.search(this.left, data);
    } else if(data > this.data) {
      return this.search(this.right, data);
    } else {
      return true;
    }return false;
  }
  

  find(data) {
    //throw new NotImplementedError('Not implemented');
    let node = this.top;
    if(node === null) {
      return null;
    } else if(data < this.data) {
      return this.search(this.left, data);
    } else if(data > this.data) {
      return this.search(this.right, data);
    } else {
      return this;
    }return null;
  }

  remove(data) {
    //throw new NotImplementedError('Not implemented');
  }

  min() {
    //throw new NotImplementedError('Not implemented');
    let node = this.top;
    while (node.left !== null) {
      node = node.left
    }
    return node.data
  }

  max() {
    //throw new NotImplementedError('Not implemented');
    let node = this.top;
    while (node.right !== null) {
      node = node.right
    }
    return node.data
  }
}

module.exports = {
  BinarySearchTree
// const tree = new BinarySearchTree();

// tree.add(1);

// tree.add(2);

// tree.add(3);

// tree.add(4);

// tree.add(5);
// console.log(tree.find(4));
};