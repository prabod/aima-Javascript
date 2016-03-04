/**
 *
 */
export class Stack {
    /**
     *
     */
    constructor() {
        this.stack = [];
    }

    /**
     *
     * @returns {T}
     */
    pop() {
        return this.stack.pop();
    }

    /**
     *
     * @param element
     */
    push(element) {
        this.stack.push(element);
    }

    /**
     * Return the size of the Stack
     * @returns {Number}
     */
    size() {
        return this.stack.length;
    }
}
