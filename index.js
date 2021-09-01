const DRIVERS = ['Sally', 'Bob', 'Freddy', 'Claudia']
const returnFirstTwoDrivers = function(nameOfDrivers){
    return nameOfDrivers.slice(0,2)
}

const returnLastTwoDrivers = function(nameOfDrivers){
    return nameOfDrivers.slice(-2)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = x => {
    return function(fare) {
        return fare * x;
    }
}
const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = (arrayOfDrivers, returnFirstTwoDrivers) => {
    return returnFirstTwoDrivers(arrayOfDrivers);
}