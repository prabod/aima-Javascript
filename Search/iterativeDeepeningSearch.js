import * as DLS from 'depthLimitedSearch';
/**
 * FIG 3.18
 * @param problem
 * @returns {*}
 */
export function iterativeDeepeningSearch(problem) {
    for (var depth = 0; depth < Number.MAX_VALUE; depth++) {
        let result = DLS.depthLimitedSearch(problem, depth);

        if (result != 'cutoff') {
            return result;
        }
    }
}