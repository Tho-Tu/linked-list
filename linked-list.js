function linkedList() {
  const append = (value) => {
    let newNode = node(value, null);
    tail.nextNode = newNode;
  };

  const prepend = (value) => {
    let newNode = node(value, head().nextNode);
    head().nextNode = newNode;
  };

  const size = () => {
    let sum = 0;

    traverseLinkedList(head());

    function traverseLinkedList(node) {
      if (node.nextNode !== null) {
        sum += 1;
        traverseLinkedList(node.nextNode);
      }
    }

    return sum;
  };

  const head = () => {
    let headNode = node();
    return headNode;
  };

  const tail = () => {
    traverseLinkedList(head());
    function traverseLinkedList(node) {
      if (node.nextNode === null) {
        node.nextNode;
      } else {
        traverseLinkedList(node.nextNode);
      }
    }
  };

  const at = (index) => {
    let checkIndex = 0;

    traverseLinkedList(head());
    function traverseLinkedList(node) {
      if (checkIndex === index) {
        return node;
      } else {
        checkIndex += 1;
        traverseLinkedList(node.nextNode);
      }
    }
  };

  const pop = () => {
    traverseLinkedList(head());
    function traverseLinkedList(node) {
      if (node.nextNode.nextNode === null) {
        node.nextNode = null;
      }
    }
  };

  const contains = (value) => {
    traverseLinkedList(head());
    function traverseLinkedList(node) {
      if (node.value === value) {
        return true;
      } else {
        traverseLinkedList(node.nextNode);
      }
    }
  };

  const find = (value) => {
    //
  };

  const toString = () => {
    //
  };

  return {
    append,
    prepend,
    size,
    head,
    tail,
    at,
    pop,
    contains,
    find,
    toString,
  };
}

function node(value = null, nextNode = null) {
  return { value, nextNode };
}
