/// <reference path="../BinarySearchTree.ts" />
import BST from "../BinarySearchTree";
import Queue from "../Queue";

test("starts out as a null tree", () => {
    let t = new BST<number>();
    expect(t.data).toBe(null)
});

test("can be initialized with data", () => {
    let tree = new BST<number>(1);
    expect(tree.data).toBe(1)
});

test("can have data inserted", () => {
    let tree = new BST<number>();
    tree.insert(1);
    expect(tree.data).toBe(1)
});

/**
 * Should build the following tree:
 *             10
 *            /  \
 *           6   11
 *          / \    \
 *         4  9     12
 */
test("insert builds the correct tree", () => {
    let tree = new BST<number>();
    tree.insert(10);
    tree.insert(6);
    tree.insert(4);
    tree.insert(9);
    tree.insert(11);
    tree.insert(12);

    expect(tree.data).toBe(10)
    expect(tree.getLeftTree().data).toBe(6)
    expect(tree.getRightTree().data).toBe(11)
    expect(tree.getLeftTree().getLeftTree().data).toBe(4)
    expect(tree.getLeftTree().getRightTree().data).toBe(9)
    expect(tree.getRightTree().data).toBe(11)
    expect(tree.getRightTree().getLeftTree()).toBeNull()
    expect(tree.getRightTree().getRightTree().data).toBe(12)
});

test("search can find items in the tree", () => {
    let tree = new BST<number>();
    tree.insert(10);
    tree.insert(6);
    tree.insert(4);
    tree.insert(9);
    tree.insert(11);
    tree.insert(12);

    expect(tree.search(10)).toBeTruthy();
    expect(tree.search(6)).toBeTruthy();
    expect(tree.search(4)).toBeTruthy();
    expect(tree.search(9)).toBeTruthy();
    expect(tree.search(11)).toBeTruthy();
    expect(tree.search(12)).toBeTruthy();
    expect(tree.search(13)).toBeFalsy();

});

test("can be traversed in order", () => {
    let t = new BST<number>();
    t.insert(10);
    t.insert(6);
    t.insert(4);
    t.insert(9);
    t.insert(11);
    t.insert(12);

    let q = t.traverse("inorder");
    expect(q.front()).toBe(4)

    q.pop();
    expect(q.front()).toBe(6)

    q.pop();
    expect(q.front()).toBe(9)

    q.pop();
    expect(q.front()).toBe(10)

    q.pop();
    expect(q.front()).toBe(11)

    q.pop();
    expect(q.front()).toBe(12)

    q.pop();
    expect(q.front()).toBeNull();

});

test("can be traversed pre order", () => {
    let t = new BST<number>();
    t.insert(10);
    t.insert(6);
    t.insert(4);
    t.insert(9);
    t.insert(11);
    t.insert(12);

    let q = t.traverse("preorder");
    expect(q.front()).toBe(10)

    q.pop();
    expect(q.front()).toBe(6)

    q.pop();
    expect(q.front()).toBe(4)

    q.pop();
    expect(q.front()).toBe(9)

    q.pop();
    expect(q.front()).toBe(11)

    q.pop();
    expect(q.front()).toBe(12)

    q.pop();
    expect(q.front()).toBeNull();

});

test("can be traversed post order", () => {
    let t = new BST<number>();
    t.insert(10);
    t.insert(6);
    t.insert(4);
    t.insert(9);
    t.insert(11);
    t.insert(12);

    let q = t.traverse("postorder");
    expect(q.front()).toBe(4)

    q.pop();
    expect(q.front()).toBe(9)

    q.pop();
    expect(q.front()).toBe(6)

    q.pop();
    expect(q.front()).toBe(12)

    q.pop();
    expect(q.front()).toBe(11)

    q.pop();
    expect(q.front()).toBe(10)

    q.pop();
    expect(q.front()).toBeNull();

});
