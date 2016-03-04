/**
 * imports treeSearch and FIFOQueue ADT
 */

import * as treeSearch from 'treeSearch';
import * as FIFOQueue from 'lib/FIFOQueue';

/**
 * Search the shallowest nodes in the search tree first.
 * @param problem
 * @returns {*}
 */
export function breadthFirstTreeSearch(problem) {
    return treeSearch.treeSearch(problem, new FIFOQueue.FIFOQueue());
}
