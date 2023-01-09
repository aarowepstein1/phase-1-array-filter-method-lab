function findMatching (drivers, names) {
   const findDrivers = drivers.filter( foo => foo.toLowerCase() === names.toLowerCase());
    return findDrivers;
}

function fuzzyMatch (drivers, name) {
    const findDrivers = drivers.filter(
        driver => driver.slice(0, 1) === name.slice(0, 1)
        )
    return findDrivers;
}

function matchName (drivers, nombre) {
    const findDrivers = drivers.filter( 
        driver => driver.name.toLowerCase() === nombre.toLowerCase()
        );
    return findDrivers;
}