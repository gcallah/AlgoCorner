class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

const printList = (head) => {
  if (!head) {
    return;
  }

  console.log(head.val);
  printList(head.next);
};

var reverseList = function (head) {
  let prev = null;
  let current = head;

  while (current) {
    let nextTemp = current.next;
    current.next = prev;
    prev = current;
    current = nextTemp;
  }

  return prev;
};
