/// <reference path="../SinglyLinkedList.ts" />
import SinglyLinkedList from "../SinglyLinkedList";

it("can have data inserted", () => {
    let l = new SinglyLinkedList<number>();
    l.insertFront(1);
    expect(l.getNode(0).data).toBe(1)
});

it("can have a multiple values inserted", () => {
    let l = new SinglyLinkedList<number>();
    l.insertFront(1);
    l.insertFront(2);
    l.insertFront(3);
    expect(l.getNode(0).data).toBe(3)
    expect(l.getNode(1).data).toBe(2)
    expect(l.getNode(2).data).toBe(1)
});

it("can be accessed with an index", () => {
    let l = new SinglyLinkedList<number>();
    l.insertFront(1);
    l.insertFront(2);
    l.insertFront(3);

    expect(l.getNode(0).data).toBe(3)
    expect(l.getNode(1).data).toBe(2)
    expect(l.getNode(2).data).toBe(1)
});

it("empty returns true if the list has no nodes", () => {
    let l = new SinglyLinkedList<number>();
    expect(l.empty()).toBe(true);
});

it("empty returns false if the list has nodes", () => {
    let l = new SinglyLinkedList<number>();
    l.insertFront(1);
    expect(l.empty()).toBe(false);
});

it("size returns 0 if it has no nodes", () => {
    let l = new SinglyLinkedList<number>();
    expect(l.size()).toBe(0);
});

it("size returns the number of nodes in the list", () => {
    let l = new SinglyLinkedList<number>();
    l.insertFront(1);
    l.insertFront(2);
    l.insertFront(3);
    expect(l.size()).toBe(3);
});

it("insertBack inserts at the end of the list", () => {
    let l = new SinglyLinkedList<number>();
    l.insertBack(1);
    l.insertBack(2);
    l.insertBack(3);

    expect(l.getNode(0).data).toBe(1);
    expect(l.getNode(1).data).toBe(2);
    expect(l.getNode(2).data).toBe(3);
});

it("insertBack inserts at the end of the list", () => {
    let l = new SinglyLinkedList<number>();
    l.insertBack(1);
    l.insertBack(2);
    l.insertBack(3);

    expect(l.getNode(0).data).toBe(1);
    expect(l.getNode(1).data).toBe(2);
    expect(l.getNode(2).data).toBe(3);
});

it("deleteData does nothing with no items in the list", () => {
    let l = new SinglyLinkedList<number>();
    l.deleteData(1);
    expect(l.getNode(0)).toBe(null);
});

it("deleteData does nothing if no items match the data", () => {
    let l = new SinglyLinkedList<number>();
    l.insertFront(1);
    l.insertFront(2);
    l.insertFront(3);
    l.deleteData(4);

    expect(l.getNode(0).data).toBe(3);
    expect(l.getNode(1).data).toBe(2);
    expect(l.getNode(2).data).toBe(1);
});

it("deleteData deletes the head and leaves empty list if it is the only node", () => {
    let l = new SinglyLinkedList<number>();
    l.insertFront(1);
    l.deleteData(1);

    expect(l.getNode(0)).toBe(null);
});

it("deleteData can delete the head and leave the remaining nodes", () => {
    let l = new SinglyLinkedList<number>();
    l.insertFront(1);
    l.insertFront(2);
    l.deleteData(2);

    expect(l.getNode(0).data).toBe(1);
});

it("deleteData can delete an item in the middle of the list", () => {
    let l = new SinglyLinkedList<number>();
    l.insertFront(1);
    l.insertFront(2);
    l.insertFront(3);
    l.insertFront(4);
    l.deleteData(3);

    expect(l.getNode(0).data).toBe(4);
    expect(l.getNode(1).data).toBe(2);
    expect(l.getNode(2).data).toBe(1);
});

it("deleteData can delete an item at the end of the list", () => {
    let l = new SinglyLinkedList<number>();
    l.insertFront(1);
    l.insertFront(2);
    l.insertFront(3);
    l.insertFront(4);
    l.deleteData(1);

    expect(l.getNode(0).data).toBe(4);
    expect(l.getNode(1).data).toBe(3);
    expect(l.getNode(2).data).toBe(2);
});

it("deleteAtIndex works with null head", () => {
    let l = new SinglyLinkedList<number>();
    l.deleteAtIndex(0);

    expect(l.getNode(0)).toBeNull();
});

it("deleteAtIndex leaves a null head if head is only item in list", () => {
    let l = new SinglyLinkedList<number>();
    l.insertFront(1);
    l.deleteAtIndex(0);

    expect(l.getNode(0)).toBeNull();
});

it("deleteAtIndex leaves a rest of list if head is deleted", () => {
    let l = new SinglyLinkedList<number>();
    l.insertFront(1);
    l.insertFront(2);
    l.insertFront(3);
    l.insertFront(4);
    l.deleteAtIndex(0);

    expect(l.getNode(0).data).toBe(3);
    expect(l.getNode(1).data).toBe(2);
    expect(l.getNode(2).data).toBe(1);
});

it("deleteAtIndex delete from the middle of the list", () => {
    let l = new SinglyLinkedList<number>();
    l.insertFront(1);  // Index 4
    l.insertFront(2);  // Index 3
    l.insertFront(3);  // Index 2, should be removed
    l.insertFront(4);  // Index 1
    l.insertFront(5);  // Index 0
    l.deleteAtIndex(2);

    expect(l.getNode(0).data).toBe(5);
    expect(l.getNode(1).data).toBe(4);
    expect(l.getNode(2).data).toBe(2);
    expect(l.getNode(3).data).toBe(1);
});

it("deleteAtIndex delete from the end of the list", () => {
    let l = new SinglyLinkedList<number>();
    l.insertFront(1);  // Index 4
    l.insertFront(2);  // Index 3
    l.insertFront(3);  // Index 2, should be removed
    l.insertFront(4);  // Index 1
    l.insertFront(5);  // Index 0
    l.deleteAtIndex(4);

    expect(l.getNode(0).data).toBe(5);
    expect(l.getNode(1).data).toBe(4);
    expect(l.getNode(2).data).toBe(3);
    expect(l.getNode(3).data).toBe(2);
});

it("can be iterated over", () => {
    let l = new SinglyLinkedList<number>();
    l.insertFront(1);  // Index 4
    l.insertFront(2);  // Index 3
    l.insertFront(3);  // Index 2, should be removed
    l.insertFront(4);  // Index 1
    l.insertFront(5);  // Index 0

    let iterator = l[Symbol.iterator]();
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

test("can obtain the value at the front of the list", () => {
    let l = new SinglyLinkedList<number>();
    l.insertFront(1);
    l.insertFront(2);
    l.insertFront(3);

    expect(l.front()).toBe(3);
});

test("can obtain the value at the back of the list", () => {
    let l = new SinglyLinkedList<number>();
    l.insertFront(1);
    l.insertFront(2);
    l.insertFront(3);

    expect(l.back()).toBe(1);
});

test("can delete from the front of the list", () => {
    let l = new SinglyLinkedList<number>();
    l.insertFront(1);
    l.insertFront(2);
    l.insertFront(3);

    expect(l.front()).toBe(3);

    l.deleteFront();
    expect(l.front()).toBe(2);

    l.deleteFront();
    expect(l.front()).toBe(1);

    l.deleteFront();
    expect(l.front()).toBeNull();
});

test("can delete from the back of the list", () => {
    let l = new SinglyLinkedList<number>();
    l.insertFront(1);
    l.insertFront(2);
    l.insertFront(3);

    expect(l.back()).toBe(1);

    l.deleteBack();
    expect(l.back()).toBe(2);

    l.deleteBack();
    expect(l.back()).toBe(3);

    l.deleteBack();
    expect(l.back()).toBeNull();
});
