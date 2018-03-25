import Stack from "../Stack";

test("starts off empty", () => {
    let s = new Stack<number>();
    expect(s.empty()).toBeTruthy();
});

test("starts off with a size of 0", () => {
    let s = new Stack<number>();
    expect(s.size()).toBe(0);
});

test("top returns null if no elements are in the stack", () => {
    let s = new Stack<number>();
    expect(s.top()).toBeNull();
});

test("top gets the last element in the stack", () => {
    let s = new Stack<number>();
    s.push(0)
    s.push(1)
    s.push(2)
    expect(s.top()).toBe(2);
    expect(s.size()).toBe(3);
});

test("pop does nothing to an empty stack", () => {
    let s = new Stack<number>();
    expect(s.top()).toBeNull();
    s.pop();
    expect(s.top()).toBeNull();
});

test("pop removes the last element in stack", () => {
    let s = new Stack<number>();

    s.push(0);
    expect(s.top()).toBe(0);

    s.pop();
    expect(s.top()).toBeNull();
});
