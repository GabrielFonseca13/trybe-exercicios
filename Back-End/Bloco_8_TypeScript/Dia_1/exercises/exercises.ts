// ./exercises.ts

export function getSquareArea(side: number): number {
  return side ** 2;
}

export function getRectangleArea(base: number, height: number): number {
  return base * height;
}

export function getTriangleArea(base: number, height: number): number {
  return (base * height) / 2;
}

export function getPolygonPerimeter(sides: number[]): number {
  return sides.reduce((acc, side) => acc + side, 0);
}

export function triangleCheck(
  sideA: number,
  sideB: number,
  sideC: number
): boolean {
  const checkSideA = sideB - sideC < sideA && sideA < sideB + sideC;
  const checkSideB = sideA - sideC < sideB && sideB < sideA + sideC;
  const checkSideC = sideA - sideB < sideC && sideC < sideA + sideB;
  return checkSideA && checkSideB && checkSideC;
}

export function getDiamondArea(
  biggerDiagonal: number,
  smallerDiagonal: number
): number {
  return (biggerDiagonal * smallerDiagonal) / 2;
}

export function getTrapezeArea(
  height: number,
  smallerBase: number,
  biggerBase: number
): number {
  return ((biggerBase + smallerBase) * height) / 2;
}

export function getCircleArea(radius: number): number {
  return radius ** 2 * 3.1416;
}
