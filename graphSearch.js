/**
 * Search through the successors of a problem to find a goal.
 * The argument frontier should be an empty queue.
 * If two paths reach a state, only use the first one. [Fig. 3.7]
 * @param problem
 * @param frontier
 * @returns {*}
 */
export function graphSearch(problem, frontier) {
    frontier.append(Node(problem.initial));
    var explored = new Set();
    while (frontier) {
        let node = frontier.pop();
        if (problem.goalTest(node.state)) {
            return node;
        }
        explored.add(node.state);
        let extend = [];
        for (var child in node.expand(problem)) {
            if (!explored.has(child.state) && frontier.indexOf(child.state) === -1) {
                extend.push(child);
            }
        }
        frontier.concat(extend);
    }
    return null;
}
