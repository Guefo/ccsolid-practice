class Animal {

  constructor(private name: string){
    this.name = name; 
  }

  animals: Record<AnimalType, AnimalData> = {
  cat: {
    sound: "Meaw!",
    flightDistance: 0,
    teeth: 24
  },
  dog: {
    sound: "Woof! Woof!",
    flightDistance: 0,
    teeth: 30
  },
  chicken: {
    sound: "Cluck",
    flightDistance: 0,
    teeth: 0
  },
  duck: {
    sound: "Quack",
    flightDistance: 5000,
    teeth: 0
  }
};

  getAnimalSound(animalType: string): string {
    return this.animals[animalType as AnimalType]?.sound || "This is not an animal";
  }

  getAnimalFlightDistance(animalType: string): number {
    return this.animals[animalType as AnimalType]?.flightDistance || 0;
  }

  getNumberOfTeeths(animalType: string): number {
    return this.animals[animalType as AnimalType]?.teeth || 0;
  }

  getName(): string {
    return this.name;
  }
}

export function animalSound(animalName: string, type: string): void {
  const animal = new Animal(animalName);
  const sound = animal.getAnimalSound(type);
  const name = animal.getName();

  console.log(`El sonido que hace ${name} es ${sound}`);
}

export function animalTeeths(animalName: string, type: string): void {
  const animal = new Animal(animalName);
  const totalTeeth = animal.getNumberOfTeeths(type);
  const name = animal.getName();

  console.log(`${name} tiene ${totalTeeth} dientes`);
}

export function animalflightDistance(animalName: string, type: string): void {
  const animal = new Animal(animalName);
  const flightMeters = animal.getAnimalFlightDistance(type);
  const name = animal.getName();

  console.log(`${name} puede volar ${flightMeters} metros`);
}
