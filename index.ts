class Car {
  constructor(public color: string, private year: number) {}

  public drive() {
    console.log('Vroom');
    console.log(this.year);
  }
}

const myCar = new Car('red', 2000);
myCar.drive();

console.log(myCar.color);
