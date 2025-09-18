#!/usr/bin/node

// @ts-ignore
const arg = process.argv[2];
// @ts-ignore
const num = parseInt(arg);

if (isNaN(num)) {
  console.log("Not a number");
} else {
  console.log("My number: " + num);
}
