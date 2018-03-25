/// <reference path="../Tree.ts" />
import Tree from "../Tree";

test("starts out as a null tree", () => {
    let tree = new Tree<number>();
    expect(tree.data).toBe(null)
});

test("can be initialized with data", () => {
    let tree = new Tree<number>();
    tree.insert(1);
    expect(tree.data).toBe(1)
});

test("can have data inserted", () => {
    let tree = new Tree<number>();
    tree.insert(1);
    expect(tree.data).toBe(1)
});

test("obtaining a subtree with no subtrees returns null", () => {
    let tree = new Tree<number>();
    tree.insert(1);
    let subTree = tree.subTree(0);
    expect(subTree).toBeNull()
});

test("obtaining a subtree returns a subtree", () => {
    let tree = new Tree<number>();
    tree.insert(1);
    tree.insert(2)

    let subTree = tree.subTree(0);
    expect(subTree.data).toBe(2)
});

test("obtaining a subtree outside of index returns null", () => {
    let tree = new Tree<number>();
    tree.insert(1);
    tree.insert(2)

    let subTree = tree.subTree(1);
    expect(subTree).toBeNull()
});

it("can have multiple data inserted at one level", () => {
    let tree = new Tree<number>();
    tree.insert(1);
    tree.insert(2)
    tree.insert(3)
    tree.insert(4)

    let subTree = tree.subTree(0);
    expect(subTree.data).toBe(2)

    subTree = tree.subTree(1);
    expect(subTree.data).toBe(3)

    subTree = tree.subTree(2);
    expect(subTree.data).toBe(4)
});
