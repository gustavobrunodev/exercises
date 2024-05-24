// Resposta: ISP, se o circulo não pode implementar um contador de vértices, ele não deveria estender essa interface

interface HasArea {
  calculateArea(): number;
}

interface HasVertex {
  countVertex(): number;
}

interface HasDiameter {
  calcDiameter(): number;
}

class Square implements HasArea, HasVertex, HasDiameter {
  constructor(public readonly side: number) {}
  calculateArea(): number {
    return this.side * this.side;
  }
  countVertex(): number {
    return 4;
  }
  calcDiameter(): number {
    return this.side * Math.sqrt(2);
  }
}

class Circle implements HasArea, HasDiameter {
  constructor(public readonly radius: number) {}
  calculateArea(): number {
    return Math.PI * (this.radius * this.radius);
  }

  calcDiameter(): number {
    return this.radius * 2;
  }
}
