import DoublyLinkedList from "./DoublyLinkedList";

interface QueueContainer<T> {
    empty(): boolean;
    size(): number;
    front(): T;
    back(): T;
    insertFront(element: T): void;
    insertBack(element: T): void;
    deleteFront(): void;
    deleteBack(): void;
}

export default class Queue<T> {
    private c: QueueContainer<T>;

    /**
     * An instance of a type of container.
     */
    constructor(container: QueueContainer<T> = new DoublyLinkedList<T>()) {
        this.c = container;
    }

    /**
     * Returns true if the queue is empty, and false otherwise.
     *
     * @runtime O(1)
     */
    public empty(): boolean {
        return this.c.empty();
    }

    /**
     * Returns the size of the queue.
     * @runtime O(n)
     */
    public size(): number {
        return this.c.size();
    }

    /**
     * Obtain the first element in the queue or null if the queue is empty.
     *
     * @runtime O(1)
     */
    public front(): T {
        return this.c.front();
    }

    /**
     * Obtain the first element in the queue or null if the queue is empty.
     *
     * @runtime O(1)
     */
    public back(): T {
        return this.c.back()
    }

    /**
     * Insert an element.
     *
     * @runtime O(1)
     */
    public push(data: T) {
        this.c.insertBack(data);
    }

    /**
     * Remove an element.
     *
     * @runtime O(1)
     */
    public pop() {
        this.c.deleteFront();
    }
}
