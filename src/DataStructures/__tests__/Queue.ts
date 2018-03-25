import Queue from "../Queue";

test("starts off empty", () => {
    let q = new Queue<number>();
    expect(q.empty()).toBeTruthy();
});

test("starts off with a size of 0", () => {
    let q = new Queue<number>();
    expect(q.size()).toBe(0);
});

test("front returns null if no elements are in the queue", () => {
    let q = new Queue<number>();
    expect(q.front()).toBeNull();
});

test("front gets the first element in the queue", () => {
    let q = new Queue<number>();
    q.push(0)
    expect(q.front()).toBe(0);
});

test("back returns null if no elements are in the queue", () => {
    let q = new Queue<number>();
    expect(q.back()).toBeNull();
});


test("back returns the last element in the queue", () => {
    let q = new Queue<number>();
    q.push(0)
    q.push(1)
    q.push(2)
    expect(q.back()).toBe(2);
});

test("pop does nothing to an empty queue", () => {
    let q = new Queue<number>();
    expect(q.front()).toBeNull();
    q.pop();
    expect(q.front()).toBeNull();
});

test("pop removes the first element in queue", () => {
    let q = new Queue<number>();

    q.push(0);
    expect(q.front()).toBe(0);

    q.pop();
    expect(q.front()).toBeNull();
});
