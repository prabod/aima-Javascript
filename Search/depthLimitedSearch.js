import * as node from '../node';
/**
 *
 * @param problem
 * @param limit
 * @returns {*}
 */
export function depthLimitedSearch(problem, limit = 50) {
    function recursive_dls(node, problem, limit) {
        if (problem.goalTest(node.state())) {
            return node;
        }
        else if (node.depth() == limit) {
            return 'cutoff';
        }
        else {
            var cutoffOccured = false;
            for (var child in node.expand(problem)) {
                let result = recursive_dls(child, problem, limit);
                if (result == 'cutoff') {
                    cutoffOccured = true;
                }
                else if (result != null) {
                    return result;
                }
            }
            return cutoffOccured ? 'cutoff' : null;
        }
    }

    return recursive_dls(new node.Node(problem.initial), problem, limit);
}