/**
 * Check representation.
 * Knows its color and its board position.
 */
global.CheckerEntity = function(
    color,
    xPosition,
    yPosition
) {
    this.color = color;
    this.xPosition = xPosition;
    this.yPosition = yPosition;
};