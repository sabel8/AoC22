const file = await Deno.readTextFile("input.txt");

interface IRound {
  opponentTake: string;
  yourTake: string;
  scorePart1: number;
  scorePart2: number;
}
const rounds: IRound[] = [];

function calculateScorePart1(opponent: string, me: string): number {
  switch (opponent) {
    case "A":
      switch (me) {
        case "X":
          return 1 + 3;
        case "Y":
          return 2 + 6;
        case "Z":
          return 3 + 0;
      }
      return -1;
    case "B":
      switch (me) {
        case "X":
          return 1 + 0;
        case "Y":
          return 2 + 3;
        case "Z":
          return 3 + 6;
      }
      return -1;
    case "C":
      switch (me) {
        case "X":
          return 1 + 6;
        case "Y":
          return 2 + 0;
        case "Z":
          return 3 + 3;
      }
      return -1;
  }
  return -1;
}
function calculateScorePart2(opponent: string, me: string): number {
  switch (opponent) {
    case "A":
      switch (me) {
        case "X":
          return 3 + 0;
        case "Y":
          return 1 + 3;
        case "Z":
          return 2 + 6;
      }
      return -1;
    case "B":
      switch (me) {
        case "X":
          return 1 + 0;
        case "Y":
          return 2 + 3;
        case "Z":
          return 3 + 6;
      }
      return -1;
    case "C":
      switch (me) {
        case "X":
          return 2 + 0;
        case "Y":
          return 3 + 3;
        case "Z":
          return 1 + 6;
      }
      return -1;
  }
  return -1;
}

for (const line of file.split(/\n/)) {
  const opponentTake = line[0];
  const yourTake = line[2];
  const scorePart1 = calculateScorePart1(opponentTake, yourTake);
  const scorePart2 = calculateScorePart2(opponentTake, yourTake);

  if (scorePart1 + scorePart2 < 0) continue;
  rounds.push({ opponentTake, yourTake, scorePart1, scorePart2 });
}
const sumPart1 = rounds.reduce((prev, cur) => prev + cur.scorePart1, 0);
const sumPart2 = rounds.reduce((prev, cur) => prev + cur.scorePart2, 0);
console.log("sumPart1", sumPart1);
console.log("sumPart2", sumPart2);
