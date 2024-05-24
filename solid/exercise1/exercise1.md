Considere o programa abaixo:

```typescript
interface ShapeOperations {
  calculateArea(): number;
  countVertex(): number;
  calcDiameter(): number;
}

class Square implements ShapeOperations {
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

class Circle implements ShapeOperations {
  constructor(public readonly radius: number) {}
  calculateArea(): number {
    return Math.PI * (this.radius * this.radius);
  }
  countVertex(): number {
    throw new Error("Circle has no vertex");
  }
  calcDiameter(): number {
    return this.radius * 2;
  }
}
```

Qual princípio do SOLID está sendo violado? Por quê?

Dica: Circle não pode implementar um contador de vértices