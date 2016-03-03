/**
 * Search through the successors of a problem to find a goal.
 * The argument frontier should be an empty queue.
 * Don't worry about repeated paths to a state. [Fig. 3.7]
 * @param problem
 * @param frontier
 * @returns {*}
 */
export function treeSearch(problem, frontier) {
    frontier.push(Node(problem.initial));

    while (frontier) {
        let node = frontier.pop();
        if (problem.goalTest(node.state)) {
            return node;
        }
        frontier.concat(node.expand(problem));
    }
    return null;
}