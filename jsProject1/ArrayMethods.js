// let A = [1, 2, 3, 4, 5];
// // // A.age = 25;
// console.log(A.splice(-1));

//get only index and object is distorted
// for (let [key, val] in A) {
//   console.log(key, val);
// }

//for..of is not iterable at error
// for (let [key, val] of A) {
//   console.log(key, val);
// }

//array index
// for (let key of A) {
//   console.log(key * 2);
// }
// console.log(A);
// //array entries but doesn't give age if added
// let a = ["a", "b", "c"];
// let iterator = a.entries();

// for (let e of iterator) {
//   console.log(e);
// }

/*const dogsJulia = [3, 5, 2, 12, 7];
const dogsKate = [4, 1, 15, 8, 3];

const checkDogs = function (jd, kd) {
  let dogsJuliaCorrected = dogsJulia.slice(1, 3);
  const dogs = dogsJuliaCorrected.concat(dogsKate);
  console.log(dogs);

  dogs.forEach(function (dog, i) {
    if (dog >= 3) {
      console.log(`Dog number ${i + 1} is an adult, and is ${dog} years old`);
    } else {
      console.log(`Dog number ${i + 1} is still a puppy 🐶`);
    }
  });
};
checkDogs([...dogsJulia], [...dogsKate]);*/
// let DogAgeInHumanYears = [];
// const DogAgeInHumanYearsCalc = function (ages) {
//   DogAgeInHumanYears = ages.map(function (age) {
//     if (age > 2) return 16 + age * 4;
//     else return 2 * age;
//   });
// };

/*const age1 = [5, 2, 4, 1, 15, 8, 3];
const age2 = [16, 6, 10, 5, 6, 1, 4];

DogAgeInHumanYearsCalc = function (ages) {
  let adultDogAgeInHumanYears = ages
    .map(function (age) {
      if (age > 2) return 16 + age * 4;
      else return 2 * age;
    })
    .filter((age) => age > 18);
  console.log(adultDogAgeInHumanYears);

  const avgadultDogAgeInHumanYearsSum = adultDogAgeInHumanYears.reduce(
    function (acc, age) {
      return acc + age;
    },
    adultDogAgeInHumanYears[0]
  );
  console.log(avgadultDogAgeInHumanYearsSum);

  const avgadultDogAgeInHumanYears =
    avgadultDogAgeInHumanYearsSum / adultDogAgeInHumanYears.length;
  console.log(avgadultDogAgeInHumanYears);
};
DogAgeInHumanYearsCalc(age1);
DogAgeInHumanYearsCalc(age2);*/

// const dogsAdult = DogAgeInHumanYears.filter(age=>)

//TypeError: ages.map is not a function at DogAgeInHumanYearsCalc
// error bcaz we didn't pass array but use array map method
/*let DogAgeInHumanYears;
const DogAgeInHumanYearsCalc = function (ages) {
  DogAgeInHumanYears = ages.map(function (age) {
    if (age > 2) return 16 + age * 4;
    else return 2 * age;
  });
};
DogAgeInHumanYearsCalc(5);
console.log(DogAgeInHumanYears);*/

/*const age1 = [5, 2, 4, 1, 15, 8, 3];
const age2 = [16, 6, 10, 5, 6, 1, 4];

DogAgeInHumanYearsCalc = function (ages) {
  let adultDogAgeInHumanYears = ages
    .map(function (age) {
      if (age > 2) return 16 + age * 4;
      else return 2 * age;
    })
    .filter((age) => age > 18);
  console.log(adultDogAgeInHumanYears);

  const avgadultDogAgeInHumanYears =
    adultDogAgeInHumanYears.reduce((acc, age) => acc + age, 0) /
    adultDogAgeInHumanYears.length;
  return avgadultDogAgeInHumanYears;

};

avg1 = DogAgeInHumanYearsCalc(age1);
console.log(avg1);

console.log(DogAgeInHumanYearsCalc(age2));*/

//Coding challenge

const dogs = [
  { weight: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weight: 8, curFood: 200, owners: ["Matilda"] },
  { weight: 13, curFood: 275, owners: ["John", "Sarah"] },
  { weight: 32, curFood: 340, owners: ["Michael"] },
];

//1.
dogs.forEach((dog) => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));

console.log(dogs);
// console.log(dogs.recFood);

//2.
const dogSarah = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log(dogSarah);
console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recFood ? "much" : "little"
  }`
);

//3.
const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recFood)
  .flatMap((dog) => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recFood)
  .flatMap((dog) => dog.owners);
console.log(ownersEatTooLittle);

//4.
console.log(`${ownersEatTooMuch.join(" and ")}'s dogs eat too much'`);
console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too Little'`);
//5.
console.log(dogs.some((dog) => dog.curFood === dog.recFood));
//6.
const checkEatingOkay = (dog) =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
console.log(dogs.some(checkEatingOkay));
console.log(dogs.filter(checkEatingOkay));
//8.
const dogsSorted = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);
