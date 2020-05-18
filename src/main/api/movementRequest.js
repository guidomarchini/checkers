/**
 * Request for moving a checker.
 * @param xAxisFrom the xAxis the checker is
 * @param yAxisFrom the yAxis the checker is
 * @param xAxisTo the xAxis the checker wants to move
 * @param yAxisTo the yAxis the checker wants to move
 * @constructor
 */
global.MovementRequest = function(
    xAxisFrom,
    yAxisFrom,
    xAxisTo,
    yAxisTo
) {
    this.xAxisFrom = xAxisFrom;
    this.yAxisFrom = yAxisFrom;
    this.xAxisTo = xAxisTo;
    this.yAxisTo = yAxisTo;
};