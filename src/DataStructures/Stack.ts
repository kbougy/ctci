import DoublyLinkedList from "./DoublyLinkedList";

export default class Stack<T> {
    private l: DoublyLinkedList<T>;

    constructor() {
        this.l = new DoublyLinkedList<T>();
    }

    /**
     * Returns true if the queue is empty, and false otherwise.
     *
     * @runtime O(1)
     */
    public empty(): boolean {
        return this.l.empty();
    }

    /**
     * Return the size of the stack.
     * @runtime O(n)
     */
    public size(): number {
        return this.l.size();
    }

    /**
     * Obtain the top element in the stack or null if the stack is empty.
     *
     * @runtime O(1)
     */
    public top(): T {
        let node = this.l.getNode(0);
        if (node === null) return null;
        return node.data;
    }

    /**
     * Insert an element.
     *
     * @runtime O(1)
     */
    public push(data: T) {
        this.l.insertFront(data);
    }

    /**
     * Remove an element.
     *
     * @runtime O(1)
     */
    public pop() {
        this.l.deleteAtIndex(0);
    }
}
