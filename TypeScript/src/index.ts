import { calculate } from "./clean-code/ejercicio-cc";
import {
  animalflightDistance,
  animalSound,
  animalTeeths,
} from "./solid/ejercicio-solid-1";

console.log("Resultado calculadora", calculate(5));
console.log("Resultado calculadora", calculate(10));

animalSound("Salem", "cat");
animalTeeths("Sami", "dog");
animalflightDistance("Little", "chicken");
animalflightDistance("Donald", "duck");
