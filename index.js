// Code your solution in this file!

// 1. Return first two drivers
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

// 2. Return last two drivers
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

// 3. Array of the above functions
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// 4. Create fare multiplier
const createFareMultiplier = function(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
};

// 5. Fare doubler
const fareDoubler = createFareMultiplier(2);

// 6. Fare tripler
const fareTripler = createFareMultiplier(3);

// 7. Select different drivers
const selectDifferentDrivers = function(drivers, driverSelectorFunction) {
  return driverSelectorFunction(drivers);
};

// Export if needed (e.g., for browser or test runner)
module.exports = {
  returnFirstTwoDrivers,
  returnLastTwoDrivers,
  selectingDrivers,
  createFareMultiplier,
  fareDoubler,
  fareTripler,
  selectDifferentDrivers
};
