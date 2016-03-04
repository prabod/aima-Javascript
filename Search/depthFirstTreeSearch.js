/**
 * imports treeSearch and stack ADT
 */

import * as treeSearch from 'treeSearch';
import * as stack from '../lib/stack';

/**
 * Search the deepest nodes in the search tree first.
 * @param problem
 * @returns {*}
 */
export function depthFirstTreeSearch(problem) {
    return treeSearch.treeSearch(problem, new stack.Stack());
}