//quick google search "node system beep"; in order to have system perform a sound, simply input following in the js
const dataSum = process.argv;
let maxNum = 0;
for (let i = 2; i < dataSum.length; i++) {
  // console.log("Number.isInteger(dataSum[i]) is", Number.isInteger(dataSum[i]));
  if(Number(dataSum[i]) > 0) {
  setTimeout(() => {process.stdout.write('.')}, Number(dataSum[i] * 100))
  }
  if (Number(process.argv[i]) > maxNum) {
    maxNum = Number(process.argv[i]);
  }
}
setTimeout(() => {process.stdout.write('\n')}, (maxNum + 1) * 100)
// && Number.isInteger(dataSum[i])
