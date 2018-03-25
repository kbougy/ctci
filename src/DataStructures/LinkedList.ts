class Node<T> {
    data: T;
    next: Node<T> | null;
    constructor(data: T, next: Node<T> | null) {
        this.data = data;
        this.next = next;
    }
}

export default class LinkedList<T> {
    private head: Node<T>;

    constructor() {
        this.head = null;
    }

    /**
     * Insert a value into the list.
     *
     * @runtime O(1)
     */
    public insert(data: T) {
        this.head = new Node<T>(data, this.head);
    }

    /**
     * Insert data to the end of the list.
     *
     * @runtime O(n)
     */
    public insertBack(data: T) {
        if (this.head === null) {
            this.insert(data);
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
     * Delete a node with the given index.
     *
     * @runtime O(n)
     */
    public deleteAtIndex(index: number) {
        if (this.head === null) return;

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

