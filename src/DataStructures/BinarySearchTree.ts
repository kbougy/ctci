import Queue from "./Queue";

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
        this.leftTree = null;
        this.rightTree = null;
    }

    /**
     * Insert a value into the tree.
     *
     * @runtime O(log(n))
     */
    public insert(data: T): void {
        // The tree is the null tree.
        if (this.data === null) {
            this.data = data;
        } else {
            if (data === this.data) {
                return;
            } else if (data < this.data) {
                if (this.leftTree === null) {
                    this.leftTree = new BinarySearchTree<T>(data);
                } else {
                    return this.leftTree.insert(data);
                }
            } else {
                if (this.rightTree === null) {
                    this.rightTree = new BinarySearchTree<T>(data);
                } else {
                    return this.rightTree.insert(data);
                }
            }
        }
    }

    /**
     * Search for a value in the tree.
     *
     * @runtime O(log(n))
     */
    public search(data: T): boolean{
        if (this.data === null) return false;
        else if (data === this.data) return true;
        else if (data < this.data) {
            if (this.leftTree === null) return false;
            return this.leftTree.search(data);
        } else {
            if (this.rightTree === null) return false;
            return this.rightTree.search(data);
        }

    }

    public traverse(s: string): Queue<T> {
        let q = new Queue<T>();
        s = s.toLowerCase();
        if (s === "inorder") this.traverseInOrder(this, q);
        else if (s === "preorder") this.traversePreOrder(this, q);
        else if (s === "postorder") this.traversePostOrder(this, q);
        return q;
    }

    /**
     * General traverse for future implementation.
     */
    public traverseInOrder(t: BinarySearchTree<T>, q: Queue<T>) {
        if (t === null) return;
        this.traverseInOrder(t.leftTree, q);
        q.push(t.data)
        this.traverseInOrder(t.rightTree, q);
    }

    /**
     * General traverse for future implementation.
     */
    public traversePreOrder(t: BinarySearchTree<T>, q: Queue<T>) {
        if (t === null) return;
        q.push(t.data)
        this.traversePreOrder(t.leftTree, q);
        this.traversePreOrder(t.rightTree, q);
    }

    /**
     * General traverse for future implementation.
     */
    public traversePostOrder(t: BinarySearchTree<T>, q: Queue<T>) {
        if (t === null) return;
        this.traversePostOrder(t.leftTree, q);
        this.traversePostOrder(t.rightTree, q);
        q.push(t.data)
    }

    public getLeftTree(): BinarySearchTree<T> {
        return this.leftTree;
    }

    public getRightTree(): BinarySearchTree<T> {
        return this.rightTree;
    }
}
