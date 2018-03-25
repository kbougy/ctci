import DoublyLinkedList from "./DoublyLinkedList";

export default class Queue<T> {
    l: DoublyLinkedList<T>;

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
     * Returns the size of the queue.
     * @runtime O(n)
     */
    public size(): number {
        return this.l.size();
    }

    /**
     * Obtain the first element in the queue or null if the queue is empty.
     *
     * @runtime O(1)
     */
    public front(): T {
        let node = this.l.getNode(0);
        if (node === null) return null;
        return node.data;
    }

    /**
     * Obtain the first element in the queue or null if the queue is empty.
     *
     * @runtime O(1)
     */
    public back(): T {
        let node = this.l.getNode(-1);
        if (node === null) return null;
        return node.data;
    }

    /**
     * Insert an element.
     *
     * @runtime O(1)
     */
    public push(data: T) {
        this.l.insertBack(data);
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
