// import csv
const fs = require("fs");
const readline = require("readline");

const fileStream = fs.createReadStream(`${__dirname}/input.csv`);

const leftArray = [];
const rightArray = [];
// Create an interface to read lines from the file stream
const rl = readline.createInterface({
  input: fileStream,
  crlfDelay: Infinity,
});

// Process each line
rl.on("line", (line) => {
  // convert to array input1, input2
  // split by new line, then split each element by ","
  const splitInput = line.split(",");
  leftArray.push(Number(splitInput[0]));
  rightArray.push(Number(splitInput[1]));
});

rl.on("close", () => {
  // sort arrays ascending order
  leftArray.sort();
  rightArray.sort();

  // create distance array [abs(input2_i - input1_i)]
  const distanceArray = leftArray.map((value, index) => {
    return Math.abs(value - rightArray[index]);
  });

  // return sum distance array
  const sum = distanceArray.reduce((prev, current) => prev + current, 0);
  console.log(sum);
});
