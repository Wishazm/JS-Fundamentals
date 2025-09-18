#!/usr/bin/node

function add(a, b) {
  return a + b;
}

// @ts-ignore
const first = parseInt(process.argv[2]);
// @ts-ignore
const second = parseInt(process.argv[3]);

console.log(add(first, second));
