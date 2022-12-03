const file = await Deno.readTextFile("input.txt");

interface IRucksack {
  firstCompartment: string;
  secondCompartment: string;
  duplicates: string;
}

const rucksacks: IRucksack[] = [];

for (let line of file.split(/\n/)) {
  line = line.trim();
  const halfIndex = line.length / 2;
  const firstCompartment = line.trim().substring(0, halfIndex);
  const secondCompartment = line.trim().substring(halfIndex);
  const duplicates = firstCompartment
    .split("")
    .filter((char) => secondCompartment.includes(char))
    .join("");
  rucksacks.push({
    firstCompartment,
    secondCompartment,
    duplicates: duplicates[0] ?? "",
  });
}

function charToNumber(char: string) {
  if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90)
    return char.charCodeAt(0) - 64 + 26;
  else if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122)
    return char.charCodeAt(0) - 96;
  return 0;
}

console.log(rucksacks.length);

const result = rucksacks.reduce(
  (acc, rucksack) => acc + charToNumber(rucksack.duplicates[0]),
  0
);

console.log(result);