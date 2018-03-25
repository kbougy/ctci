/// <reference path="../LinkedList.ts" />
import LinkedList from "../LinkedList";

it("can have data inserted", () => {
    let linkedList = new LinkedList<number>();
    linkedList.insert(1);
    expect(linkedList.head.data).toBe(1)
});

it("can have a multiple values inserted", () => {
    let linkedList = new LinkedList<number>();
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);
    expect(linkedList.head.data).toBe(3)
    expect(linkedList.head.next.data).toBe(2)
    expect(linkedList.head.next.next.data).toBe(1)
});

it("can be accessed with an index", () => {
    let linkedList = new LinkedList<number>();
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);

    expect(linkedList.getNode(0).data).toBe(3)
    expect(linkedList.getNode(1).data).toBe(2)
    expect(linkedList.getNode(2).data).toBe(1)
});

it("empty returns true if the list has no nodes", () => {
    let linkedList = new LinkedList<number>();
    expect(linkedList.empty()).toBe(true);
});

it("empty returns false if the list has nodes", () => {
    let linkedList = new LinkedList<number>();
    linkedList.insert(1);
    expect(linkedList.empty()).toBe(false);
});

it("size returns 0 if it has no nodes", () => {
    let linkedList = new LinkedList<number>();
    expect(linkedList.size()).toBe(0);
});

it("size returns the number of nodes in the list", () => {
    let linkedList = new LinkedList<number>();
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);
    expect(linkedList.size()).toBe(3);
});

it("insertBack inserts at the end of the list", () => {
    let linkedList = new LinkedList<number>();
    linkedList.insertBack(1);
    linkedList.insertBack(2);
    linkedList.insertBack(3);

    let node = linkedList.head;
    expect(node.data).toBe(1);

    node = node.next;
    expect(node.data).toBe(2);

    node = node.next;
    expect(node.data).toBe(3);
});

it("insertBack inserts at the end of the list", () => {
    let linkedList = new LinkedList<number>();
    linkedList.insertBack(1);
    linkedList.insertBack(2);
    linkedList.insertBack(3);

    let node = linkedList.head;
    expect(node.data).toBe(1);

    node = node.next;
    expect(node.data).toBe(2);

    node = node.next;
    expect(node.data).toBe(3);
});

it("deleteData does nothing with no items in the list", () => {
    let linkedList = new LinkedList<number>();
    linkedList.deleteData(1);
    expect(linkedList.head).toBe(null);
});

it("deleteData does nothing if no items match the data", () => {
    let linkedList = new LinkedList<number>();
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);
    linkedList.deleteData(4);

    let node = linkedList.head;
    expect(node.data).toBe(3);

    node = node.next;
    expect(node.data).toBe(2);

    node = node.next;
    expect(node.data).toBe(1);
});

it("deleteData deletes the head and leaves empty list if it is the only node", () => {
    let linkedList = new LinkedList<number>();
    linkedList.insert(1);
    linkedList.deleteData(1);

    let node = linkedList.head;
    expect(node).toBe(null);
});

it("deleteData can delete the head and leave the remaining nodes", () => {
    let linkedList = new LinkedList<number>();
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.deleteData(2);

    let node = linkedList.head;
    expect(node.data).toBe(1);
});

it("deleteData can delete an item in the middle of the list", () => {
    let linkedList = new LinkedList<number>();
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);
    linkedList.insert(4);
    linkedList.deleteData(3);

    let node = linkedList.head;
    expect(node.data).toBe(4);

    node = node.next;
    expect(node.data).toBe(2);

    node = node.next;
    expect(node.data).toBe(1);
});

it("deleteData can delete an item at the end of the list", () => {
    let linkedList = new LinkedList<number>();
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);
    linkedList.insert(4);
    linkedList.deleteData(1);

    let node = linkedList.head;
    expect(node.data).toBe(4);

    node = node.next;
    expect(node.data).toBe(3);

    node = node.next;
    expect(node.data).toBe(2);
});

it("deleteAtIndex works with null head", () => {
    let linkedList = new LinkedList<number>();
    linkedList.deleteAtIndex(0);

    let node = linkedList.head;
    expect(node).toBeNull();
});

it("deleteAtIndex leaves a null head if head is only item in list", () => {
    let linkedList = new LinkedList<number>();
    linkedList.insert(1);
    linkedList.deleteAtIndex(0);

    let node = linkedList.head;
    expect(node).toBeNull();
});

it("deleteAtIndex leaves a rest of list if head is deleted", () => {
    let linkedList = new LinkedList<number>();
    linkedList.insert(1);
    linkedList.insert(2);
    linkedList.insert(3);
    linkedList.insert(4);
    linkedList.deleteAtIndex(0);

    let node = linkedList.head;
    expect(node.data).toBe(3);

    node = node.next;
    expect(node.data).toBe(2);

    node = node.next;
    expect(node.data).toBe(1);
});

it("deleteAtIndex delete from the middle of the list", () => {
    let linkedList = new LinkedList<number>();
    linkedList.insert(1);  // Index 4
    linkedList.insert(2);  // Index 3
    linkedList.insert(3);  // Index 2, should be removed
    linkedList.insert(4);  // Index 1
    linkedList.insert(5);  // Index 0
    linkedList.deleteAtIndex(2);

    let node = linkedList.head;
    expect(node.data).toBe(5);

    node = node.next;
    expect(node.data).toBe(4);

    node = node.next;
    expect(node.data).toBe(2);

    node = node.next;
    expect(node.data).toBe(1);
});

it("deleteAtIndex delete from the end of the list", () => {
    let linkedList = new LinkedList<number>();
    linkedList.insert(1);  // Index 4
    linkedList.insert(2);  // Index 3
    linkedList.insert(3);  // Index 2, should be removed
    linkedList.insert(4);  // Index 1
    linkedList.insert(5);  // Index 0
    linkedList.deleteAtIndex(4);

    let node = linkedList.head;
    expect(node.data).toBe(5);

    node = node.next;
    expect(node.data).toBe(4);

    node = node.next;
    expect(node.data).toBe(3);

    node = node.next;
    expect(node.data).toBe(2);
});

it("can be iterated over", () => {
    let linkedList = new LinkedList<number>();
    linkedList.insert(1);  // Index 4
    linkedList.insert(2);  // Index 3
    linkedList.insert(3);  // Index 2, should be removed
    linkedList.insert(4);  // Index 1
    linkedList.insert(5);  // Index 0

    let iterator = linkedList[Symbol.iterator]();
    let current = iterator.next();
    expect(current.value.data).toBe(5)

    current = iterator.next();
    expect(current.value.data).toBe(4)

    current = iterator.next();
    expect(current.value.data).toBe(3)

    current = iterator.next();
    expect(current.value.data).toBe(2)

    current = iterator.next();
    expect(current.value.data).toBe(1)

    expect(current.done).toBe(true)
});
