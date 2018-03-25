import DoublyLinkedList from "./DoublyLinkedList";

export default class Tree<T> {
    /**
     * A general purpose tree (not a binary search tree).
     */

    data: T | null;
    private children: DoublyLinkedList<Tree<T>>;

    /**
     * Create the empty (null) tree.
     */
    constructor(data: T = null) {
        this.data = data;
        this.children = new DoublyLinkedList<Tree<T>>();
    }

    /**
     * Insert a value into the tree.
     *
     * @runtime_notes Using an open doubly linked list offers O(1)
     *                back insert time.
     * @runtime O(1)
     */
    public insert(data: T) {
        // The tree is the null tree.
        if (this.data === null) {
            this.data = data;
        } else {
            this.children.insertBack(new Tree<T>(data))
        }
    }

    /**
     * Obtain the nth child tree.
     *
     * @returns a subtree, or null if the nth child does not exist.
     * @runtime O(n)
     */
    public subTree(index: number): Tree<T> {
        let node = this.children.getNode(index);
        if (node === null) return null;
        return node.data;
    }
}
