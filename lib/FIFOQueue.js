/**
 *
 */
export class FIFOQueue {
    /**
     *
     */
    constructor() {
        this.queue = [];
    }

    /**
     *
     * @returns {T}
     */
    pop() {
        return this.queue.shift();
    }

    /**
     *
     * @param element
     */
    push(element) {
        this.queue.push(element);
    }

    /**
     * Return the size of the queue
     * @returns {Number}
     */
    size() {
        return this.queue.length;
    }
}