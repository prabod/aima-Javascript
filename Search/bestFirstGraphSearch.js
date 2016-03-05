import * as memoize from '../lib/memoize';
import * as Node from '../node';
/**
 * Search the nodes with the lowest f scores first.
 * You specify the function f(node) that you want to minimize; for example,
 * if f is a heuristic estimate to the goal, then we have greedy best
 * first search; if f is node.depth then we have breadth-first search.
 * There is a subtlety: the line "f = memoize(f, 'f')" means that the f
 * values will be cached on the nodes as they are computed. So after doing
 * a best first search you can examine the f values of the path returned
 */
export function bestFirstGraphSearch(problem, f) {
    f = memoize(f, 'f');
    var node = new Node.Node(problem.initial);

    if (problem.goalTest(node.state())) {
        return node;
    }

    var frontier = new PriorityQueue("min", f);
    frontier.push(node);
    var explored = new Set();
    while (frontier.size() > 0) {
        node = frontier.pop();
        explored.add(node.state());
        for (var child in node.expand(problem)) {
            if (!explored.has(child.state()) && frontier.indexOf(child.state()) === -1) {
                frontier.push(child);
            }
            else if (frontier.indexOf(child.state()) !== -1) {
                var incumbent = frontier[child];
                if (f(child) < f(incumbent)) {
                    let index = frontier.indexOf(child);
                    frontier.splice(index, 1);
                    frontier.push(child);
                }
            }
        }
    }
}