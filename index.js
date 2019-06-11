// Write your solution in this file!


const driver = {};

function updateDriverWithKeyAndValue(driver, key, value) {
  // Alternate using ES6 Spread operators:
  // return { ...driver, ...{ [key]: value } }
  return Object.assign({}, driver, { [key]: value });
}

