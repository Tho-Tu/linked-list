let ll = linkedList();

function linkedList() {
  const head = (() => {
    return node("head");
  })();

  const append = (value) => {
    tail().nextNode = node(value, null);
  };

  const prepend = (value) => {
    let newNode = node(value, head.nextNode);
    head.nextNode = newNode;
  };

  const size = () => {
    let sum = 1;

    traverseLinkedList(head);

    function traverseLinkedList(node) {
      if (node.nextNode !== null) {
        sum += 1;
        traverseLinkedList(node.nextNode);
      }
    }

    return sum;
  };

  const tail = () => {
    function traverseLinkedList(node) {
      if (node.nextNode === null) {
        return node;
      } else {
        return traverseLinkedList(node.nextNode);
      }
    }

    return traverseLinkedList(head);
  };

  const at = (index) => {
    let checkIndex = 0;

    function traverseLinkedList(node) {
      if (checkIndex === index) {
        return node;
      } else {
        checkIndex += 1;
        return traverseLinkedList(node.nextNode);
      }
    }

    return traverseLinkedList(head);
  };

  const pop = () => {
    if (head.nextNode === null) {
      // Linked list is empty, nothing to pop
      return null;
    }

    if (head.nextNode.nextNode === null) {
      // Linked list has only one element
      const poppedValue = head.nextNode.value;
      head.nextNode = null;
      return poppedValue;
    }

    function traverseLinkedList(node) {
      if (node.nextNode.nextNode === null) {
        const poppedValue = node.nextNode.value;
        node.nextNode = null;
        return poppedValue;
      } else {
        return traverseLinkedList(node.nextNode);
      }
    }

    return traverseLinkedList(head);
  };

  const contains = (value) => {
    function traverseLinkedList(node) {
      if (node.value === value) {
        return true;
      } else if (node.nextNode === null) {
        return false;
      } else {
        return traverseLinkedList(node.nextNode);
      }
    }

    return traverseLinkedList(head);
  };

  const find = (value) => {
    let index = 0;

    function traverseLinkedList(node) {
      if (node.value === value) {
        return index;
      } else if (node.nextNode === null) {
        return null;
      } else {
        index += 1;
        return traverseLinkedList(node.nextNode);
      }
    }

    return traverseLinkedList(head);
  };

  const toString = () => {
    let linkedListString = "";
    function traverseLinkedList(node) {
      if (node.nextNode === null) {
        linkedListString += `( ${node.value} ) -> null`;
      } else {
        linkedListString += `( ${node.value} ) -> `;
        traverseLinkedList(node.nextNode);
      }
    }
    traverseLinkedList(head);

    console.log(linkedListString);
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
