const { performance } = require('perf_hooks');

const measure = (title, fn, try_times = 100000) => {
  console.log(`${title}: messurement start`);
  const t0 = performance.now();

  for (let i = 0; i < try_times; i++) {
    fn();
  }

  const t1 = performance.now();
  console.log(`${title}: took ${t1 - t0} miliseconds`);
};

console.log('Init data');
const arr = [];
const obj = {};
const MAXIMUM = 1000000;
const MIDDLE = 500000;
const TIMES = 1000000;

for (let i = 0; i < MAXIMUM; i++) {
  arr.push(i);
  obj[i] = true;
}

measure('Array - value exists at beginning', () => arr.includes(1));

measure('Array - value exists at middle', () => arr.includes(MIDDLE));

measure('Array - value does not exist', () => arr.includes(MAXIMUM));

measure('Object - value exists at beginning', () => obj[1] !== undefined);

measure('Object - value exists at middle', () => obj[MIDDLE] !== undefined);

measure('Object - value does not exist', () => obj[MAXIMUM] !== undefined);
