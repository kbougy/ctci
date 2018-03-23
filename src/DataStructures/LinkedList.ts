class Node<T> {
    data: T;
    next: Node<T> | null;
    constructor(data: T, next: Node<T> | null) {
        this.data = data;
        this.next = next;
    }
}

export default class LinkedList<T> {
    head: Node<T>;

    constructor() {
        this.head = null;
    }

    /**
     * Insert a value into the list.
     *
     * @runtime O(1)
     */
    insert(data: T) {
        this.head = new Node<T>(data, this.head)
    }

    /**
     * Insert data to the end of the list.
     *
     * @runtime O(n)
     */
    insertBack(data: T) {
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
    insertAfter(node: Node<T>, data: T) {
        if (node === null) return;

        let newNode = new Node<T>(data, node.next);
        node.next = newNode;
    }

    /**
     * Delete a node from the list.
     *
     * @runtime O(n)
     */
    deleteData(data: T) {
        if (this.head === null) return;

        let current = this.head;
        let previous = null;

        if (current.data === data) {
            this.head = this.head.next
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
    deleteAtIndex(index: number) {
        if (this.head === null) return

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
     * @runtime O(1)
     */
    empty(): boolean {
        if (this.head === null) return true;
        return false;
    }

    /**
     * @runtime O(n)
     */
    size(): number {
        if (this.head === null) {
            return 0;
        }

        let count = 1;
        let node = this.head;
        while (node.next !== null) {
            count += 1;
            node = node.next
        }
        return count;
    }

    /**
     * A recursive implementation of size.
     *
     * @runtime O(n)
     */
    length(): number {
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
    [Symbol.iterator]() {
        let current = this.head;
        let iterator = {
            next() {
                if (current.next == null) {
                    return {
                        done: true,
                        value: current
                    }
                } else {
                    let previous = current;
                    current = current.next;
                    return {
                        done: true,
                        value: previous
                    }
                }
            }
        }
        return iterator;
    }

}

