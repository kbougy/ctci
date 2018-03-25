export default class BinarySearchTree<T> {
    /**
     * A binary search tree.
     */
    data: T | null;
    private leftTree: BinarySearchTree<T>;
    private rightTree: BinarySearchTree<T>;

    /**
     * Create the empty (null) tree.
     */
    constructor(data: T = null) {
        this.data = data;
        this.leftTree = new BinarySearchTree<T>();
        this.rightTree = new BinarySearchTree<T>();
    }

    /**
     * Insert a value into the tree.
     *
     * @runtime O(log(n))
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
