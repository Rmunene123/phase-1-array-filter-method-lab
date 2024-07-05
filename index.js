function findMatching(drivers, name) {
    return drivers.filter(driver => {
        return driver.toLowerCase() === name.toLowerCase();
    });
}

function fuzzyMatch(drivers, letters) {
    return drivers.filter(driver => {
        return driver.toLowerCase().startsWith(letters.toLowerCase());
    });
}

function matchName(drivers, name) {
    return drivers.filter(driver => {
        return driver.name.toLowerCase() === name.toLowerCase();
    });
}

//for testing purposes
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'bobby'];
console.log(findMatching(drivers, 'Bobby')); // Example usage
