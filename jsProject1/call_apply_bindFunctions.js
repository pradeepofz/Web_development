const car = {
    name: 'car',
    start: function(passengerCount,place) { 
        console.log(`Start the ${this.name} with ${passengerCount} passengeers at ${place}`);
    }
}

const aircraft = {
    name: 'aircraft',
    
}


car.start.call(aircraft,60,'chennai');

const aircraftDetails=[180,'delhi'];

car.start.apply(aircraft,aircraftDetails)

const toStart = car.start.bind(aircraft);
toStart(100,'mumbai');
//The bind() method creates a new function where “this” refers to the parameter in the parenthesis