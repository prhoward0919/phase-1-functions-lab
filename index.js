// Code your solution in this file!

function distanceFromHqInBlocks(streetNumber) {
    let blocks;
    if (streetNumber >= 42) {
        blocks = streetNumber - 42;
    }
        else {blocks = 42 - streetNumber;}
    return blocks;
}

function distanceFromHqInFeet(streetNumber){
    let feet;
    if (streetNumber >= 42) {
        feet = (streetNumber * 264) - 11088;
    }
        else {feet = 11088 - (streetNumber * 264);}
    return feet;
}

function distanceTravelledInFeet(start,end){
    let feet;
    if (start > end) {
        feet = (start - end) * 264;
    }
        else {feet = (end - start) * 264;}
    return feet;
}

function calculatesFarePrice(start,destination){
    let price;
    distanceTravelledInFeet(start,destination);
    const feet = distanceTravelledInFeet(start,destination);
    
    if (feet > 0 && feet < 400) {
        price = 0;
    } else if (feet > 401 && feet < 1999) {
            price = 0.02 * (feet - 400);

    } else if (feet > 2000 && feet < 2500){
            price = 25;
    } else {price = 'cannot travel that far';}

    return price;
}
