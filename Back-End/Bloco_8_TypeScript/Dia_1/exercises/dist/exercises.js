"use strict";
// ./exercises.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCircleArea = exports.getTrapezeArea = exports.getDiamondArea = exports.triangleCheck = exports.getPolygonPerimeter = exports.getTriangleArea = exports.getRectangleArea = exports.getSquareArea = void 0;
function getSquareArea(side) {
    return side ** 2;
}
exports.getSquareArea = getSquareArea;
function getRectangleArea(base, height) {
    return base * height;
}
exports.getRectangleArea = getRectangleArea;
function getTriangleArea(base, height) {
    return (base * height) / 2;
}
exports.getTriangleArea = getTriangleArea;
function getPolygonPerimeter(sides) {
    return sides.reduce((acc, side) => acc + side, 0);
}
exports.getPolygonPerimeter = getPolygonPerimeter;
function triangleCheck(sideA, sideB, sideC) {
    const checkSideA = sideB - sideC < sideA && sideA < sideB + sideC;
    const checkSideB = sideA - sideC < sideB && sideB < sideA + sideC;
    const checkSideC = sideA - sideB < sideC && sideC < sideA + sideB;
    return checkSideA && checkSideB && checkSideC;
}
exports.triangleCheck = triangleCheck;
function getDiamondArea(biggerDiagonal, smallerDiagonal) {
    return (biggerDiagonal * smallerDiagonal) / 2;
}
exports.getDiamondArea = getDiamondArea;
function getTrapezeArea(height, smallerBase, biggerBase) {
    return ((biggerBase + smallerBase) * height) / 2;
}
exports.getTrapezeArea = getTrapezeArea;
function getCircleArea(radius) {
    return radius ** 2 * 3.1416;
}
exports.getCircleArea = getCircleArea;
