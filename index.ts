class Car {
  public color: string;
  private year: number;

  constructor(color: string, year: number) {
    this.color = color;
    this.year = year;
  }

  public drive() {
    console.log('Vroom');
    console.log(this.year);
  }
}

const myCar = new Car('red', 2000);
myCar.drive();

console.log(myCar.color);
