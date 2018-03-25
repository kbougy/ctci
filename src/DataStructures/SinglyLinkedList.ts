class Node<T> {
    data: T;
    next: Node<T> | null;
    constructor(data: T, next: Node<T> | null) {
        this.data = data;
        this.next = next;
    }
}

export default class SinglyLinkedList<T> {
    /**
     * @todo Store size as a variable to remove O(n) runtime.
     */
    private head: Node<T>;

    constructor() {
        this.head = null;
    }

    /**
     * Obtain the value at the front of the list.
     */
    public front(): T {
        let node = this.getNode(0);
        if (node === null) return null;
        return node.data;
    }

    /**
     * Obtain the value at the front of the list.
     */
    public back(): T {
        let node = this.getNode(-1);
        if (node === null) return null;
        return node.data;
    }

    /**
     * Insert a value into the list.
     *
     * @runtime O(1)
     */
    public insertFront(data: T) {
        this.head = new Node<T>(data, this.head);
    }

    /**
     * Insert data to the end of the list.
     *
     * @runtime O(n)
     */
    public insertBack(data: T) {
        if (this.head === null) {
            this.insertFront(data);
            return;
        }

        let node = this.head;
        while (node.next !== null) {
            node = node.next;
        }

        this.insertAfter(node, data);
    }

    /**
     * Insert after a node.
     *
     * @runtime O(1)
     */
    public insertAfter(node: Node<T>, data: T) {
        if (node === null) return;

        let newNode = new Node<T>(data, node.next);
        node.next = newNode;
    }

    /**
     * Delete a node from the list.
     *
     * @runtime O(n)
     */
    public deleteData(data: T) {
        if (this.head === null) return;

        let current = this.head;
        let previous = null;

        if (current.data === data) {
            this.head = this.head.next;
            return;
        }

        while (current !== null) {
            if (current.data === data) {
                previous.next = current.next
                return;
            }
            previous = current;
            current = current.next;
        }
    }

    /**
     * Delete the node at the front of the list.
     *
     * @runtime O(1)
     */
    public deleteFront() {
        return this.deleteAtIndex(0);
    }

    /**
     * Delete the node at the back of the list.
     *
     * @runtime O(n)
     */
    public deleteBack() {
        return this.deleteAtIndex(-1);
    }

    /**
     * Delete a node with the given index.
     *
     * @runtime O(n)
     */
    public deleteAtIndex(index: number) {
        if (this.head === null) return;

        if (index === -1) {
            index = this.size() - 1
        }

        if (index === 0) {
            this.head = this.head.next;
            return;
        }


        let current = this.head;
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
            if (current === null) return;
        }

        if (current.next === null) return;

        current.next = current.next.next;
    }

    /**
     * Obtain the node at the given index.
     *
     * @returns The node at the given index, or null if it doesn't exist.
     * @runtime O(n)
     */
    public getNode(index: number): Node<T> {
        if (index === -1) index = this.size() - 1;
        let current = this.head;
        for (let i = 0; i < index; i++) {
            current = current.next;
            if (current === null) return null;
        }
        return current;
    }

    /**
     * @runtime O(1)
     */
    public empty(): boolean {
        if (this.head === null) return true;
        return false;
    }

    /**
     * @runtime O(n)
     */
    public size(): number {
        if (this.head === null) {
            return 0;
        }

        let count = 1;
        let node = this.head;
        while (node.next !== null) {
            count += 1;
            node = node.next;
        }
        return count;
    }

    /**
     * A recursive implementation of size.
     *
     * @runtime O(n)
     */
    public length(): number {
        return this._length(this.head);
    }

    private _length(node: Node<T>): number {
        if (node === null) {
            return 0;
        }
        return 1 + this._length(node.next);
    }

    /**
     * Iterate over the nodes in the list.
     *
     * @runtime O(n)
     */
    public [Symbol.iterator]() {
        let current = this.head;
        let iterator = {
            next() {
                if (current.next == null) {
                    return {
                        done: true,
                        value: current
                    };
                } else {
                    let previous = current;
                    current = current.next;
                    return {
                        done: true,
                        value: previous
                    };
                }
            }
        }
        return iterator;
    }

}

