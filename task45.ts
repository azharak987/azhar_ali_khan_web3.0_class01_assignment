interface Car {
    manuf: string;
    model: string;
    [key: string]: any;
  }
  
function CarInfo(manuf: string, model: string, ...args: [string, any][]): Car {
    let car: Car = {
      manuf: manuf,
      model: model,
    };
  
    for (let [key, value] of args) {
      car[key] = value;
    }
  
    return car;
  }

  console.log(CarInfo("Toyota", "Corolla", ["color", "Silver"], ["year", 2022]));
  