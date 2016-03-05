import * as BFGS from 'bestFirstGraphSearch';

/**
 * FIG 3.14
 * @param problem
 * @returns {*}
 */
export function uniformCostSearch(problem) {
    return BFGS.bestFirstGraphSearch(problem, node => node.pathCost())
}