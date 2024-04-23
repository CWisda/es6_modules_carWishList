 import Car from "./car.js";
 
// imported car from car.js - then need to create and export a WishList class - needs to have two properties list and nextId

 export default class WishList {
    constructor () {
    this.list = [];
    this.nextId = 0;
    } 

    add (make, model, year) {
        const tempCar = new Car(++this.nextId, make, model, year);
        this.list.push(tempCar);   
    } 
    
    remove (carId) {
        this.list = this.list.filter((car) => {
            return car.id != carId;
        });
    }
}