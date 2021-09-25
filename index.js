const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
let reducer = function (atteryBatches) {
  let totalBatteries = atteryBatches.reduce((acc, element) => (acc += element));
  return totalBatteries;
};

console.log(reducer(batteryBatches));
