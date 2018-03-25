class Node<T> {
    data: T;
    next: Node<T> | null;
    previous: Node<T> | null;
    constructor(data: T, next: Node<T> = null, previous: Node<T> = null) {
        this.data = data;
        this.next = next;
        this.previous = previous;
    }
}

export default class DoublyLinkedList<T> {
    private firstNode: Node<T>;
    private lastNode: Node<T>;

    constructor() {
        this.firstNode = null;
        this.lastNode = null;
    }

    /**
     * Insert a value into the list.
     *
     * @runtime O(1)
     */
    public insertFront(data: T) {
        let node = new Node<T>(data);
        this.insertNodeFront(node);
    }

    /**
     * Insert a value into the back of the list.
     *
     * @runtime O(1)
     */
    public insertBack(data: T) {
        let node = new Node<T>(data);
        this.insertNodeBack(node);
    }

    /**
     * Insert a node at the front of the list.
     *
     * @runtime O(1)
     */
    public insertNodeFront(node: Node<T>) {
        if (this.firstNode === null) {
            this.firstNode = node;
            this.lastNode = node;
        } else {
            this.insertNode(this.firstNode, node);
        }
    }

    /**
     * Insert a node at the back of the list.
     *
     * @runtime O(1)
     */
    public insertNodeBack(node: Node<T>) {
        if (this.lastNode === null) {
            this.insertNodeFront(node);
        } else {
            this.appendNode(this.lastNode, node);
        }
    }

    /**
     * Insert the insertNode before node.
     *
     * @runtime O(1)
     */
    public insertNode(node: Node<T>, insertNode: Node<T>) {
        insertNode.next = node;
        if (node.previous === null) {
            this.firstNode = insertNode;
        } else {
            insertNode.previous = node.previous;
            node.previous.next = insertNode;
        }
        node.previous = insertNode;
    }

    /**
     * Append the appendNode after node.
     *
     * @runtime O(1)
     */
    public appendNode(node: Node<T>, appendNode: Node<T>) {
        node.previous = node;
        if (node.next === null) {
            this.lastNode = appendNode;
        } else {
            appendNode.next = node.next;
            node.next.previous = appendNode;
        }
        node.next = appendNode;
    }

    /**
     * Delete the first node in the list with matching data..
     *
     * @todo Throw an error if data was not deleted.
     * @runtime O(n)
     */
    public deleteData(data: T): void {
        let current = this.firstNode;
        while (current !== null) {
            if (current.data === data) return this.removeNode(current);
            current = current.next;
        }
    }

    /**
     * Delete a node with the given index.
     *
     * @runtime O(n)
     */
    public deleteAtIndex(index: number) {
        let current = this.firstNode;
        if (current === null) return;

        for (let i = 0; i < index; i++) {
            current = current.next;
            if (current === null) return;
        }
        this.removeNode(current);
    }

    /**
     * Remove a node from the list.
     *
     * @runtime O(1)
     */
    public removeNode(node: Node<T>) {
        if (node.previous === null) {
            this.firstNode = node.next;
        } else {
            node.previous.next = node.next;
        }
        if (node.next === null) {
            this.lastNode = node.previous;
        } else {
            node.next.previous = node.previous
        }
    }

    /**
     * Obtain the node at the given index.
     * Supports obtaining the back of the list with an index of -1.
     *
     * @returns The node at the given index, or null if it doesn't exist.
     * @runtime O(n)
     */
    public getNode(index: number): Node<T> {
        if (index === -1) return this.lastNode;

        let current = this.firstNode;
        for (let i = 0; i < index; i++) {
            current = current.next;
            if (current === null) return null;
        }
        return current;
    }

    /**
     * @runtime O(1)
     */
    empty(): boolean {
        if (this.firstNode === null) return true;
        return false;
    }

    /**
     * @runtime O(n)
     */
    size(): number {
        if (this.firstNode === null) {
            return 0;
        }

        let count = 0;
        let node = this.firstNode;
        while (node !== null) {
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
    length(): number {
        return this._length(this.firstNode);
    }

    private _length(node: Node<T>): number {
        if (node === null) {
            return 0;
        }
        return 1 + this._length(node.next);
    }
}
