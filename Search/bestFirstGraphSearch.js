/**
 * Search the nodes with the lowest f scores first.
 * You specify the function f(node) that you want to minimize; for example,
 * if f is a heuristic estimate to the goal, then we have greedy best
 * first search; if f is node.depth then we have breadth-first search.
 * There is a subtlety: the line "f = memoize(f, 'f')" means that the f
 * values will be cached on the nodes as they are computed. So after doing
 * a best first search you can examine the f values of the path returned
 */
export function bestFirstGraphSearch() {

}