import * as graphSearch from 'graphSearch';
import * as stack from '../lib/stack';
/**
 * Search the deepest nodes in the search tree first.
 * @param problem
 * @returns {*}
 */
export function depthFirstGraphSearch(problem) {
    return graphSearch.graphSearch(problem, new stack.Stack());
}