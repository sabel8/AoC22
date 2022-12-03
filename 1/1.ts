export const a = "a";

const file = await Deno.readTextFile("input.txt");

const elves: number[][] = [];
let curElf = 0;

for (const line of file.split(/\n\s*\n/)) {
  const calsOfElf = line.split("\n");
  elves[curElf] = calsOfElf
    .map((cals) => parseInt(cals))
    .filter((cals) => !isNaN(cals));
  curElf++;
}

const sumOfCals = elves.reduce(
  (sum, cals) => [...sum, cals.reduce((prev, cur) => prev + cur, 0)],
  []
);

console.log("elves", elves);
console.log("sumOfCals", sumOfCals);
const max = sumOfCals.reduce(
  (prev, cur) => (prev < cur ? cur : prev),
  sumOfCals[0]
);
console.log("max", max);

sumOfCals
  .sort((a, b) => b - a)
  .slice(0, 3)
  .forEach((cals) => console.log(cals));

const topThree = sumOfCals
  .sort((a, b) => b - a)
  .slice(0, 3)
  .reduce((prev, cur) => prev + cur, 0);
console.log("topThree", topThree);
