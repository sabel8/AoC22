const file = await Deno.readTextFile("input.txt");

const lines = file.split(/\n/);
let prios = 0;
for (let i = 0; i < lines.length; i += 3) {
  const firstLine = lines[i].trim();
  const secondLine = lines[i + 1].trim();
  const thirdLine = lines[i + 2].trim();
  //duplicates in all 3 lines
  const duplicates = firstLine
    .split("")
    .filter((char) => secondLine.includes(char) && thirdLine.includes(char))
    .join("");
  prios += charToNumber(duplicates[0]);
}

function charToNumber(char: string) {
  if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90)
    return char.charCodeAt(0) - 64 + 26;
  else if (char.charCodeAt(0) >= 97 && char.charCodeAt(0) <= 122)
    return char.charCodeAt(0) - 96;
  return 0;
}
console.log(prios);
