import * as node from '../node';
import * as queue from '../lib/FIFOQueue';
/**
 * FIG 3.11
 * @param problem
 * @returns {*}
 */
export function breadthFirstSearch(problem) {
    var node = new node.Node(problem.initial);

    if (problem.goalTest(node.state())) {
        return node;
    }

    var frontier = new queue.FIFOQueue();
    frontier.push(node);
    var explored = new Set();

    while (frontier.size() > 0) {
        node = frontier.pop();
        explored.add(node.state());

        for (var child in node.expand(problem)) {
            if (!explored.has(child.state()) && frontier.indexOf(child.state()) === -1) {
                if (problem.goalTest(child.state())) {
                    return child
                }
                frontier.push(child);
            }
        }
    }
    return null;
}