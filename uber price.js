class UberPricing {
    constructor(baseFare, costPerMinute, costPerMile) {
        this.baseFare = baseFare;
        this.costPerMinute = costPerMinute;
        this.costPerMile = costPerMile;
    }

    calculatePrice(distance, time) {
        const distanceCost = distance * this.costPerMile;
        const timeCost = time * this.costPerMinute;
        const totalPrice = this.baseFare + distanceCost + timeCost;
        return totalPrice;
    }
}

const uberX = new UberPricing(50, 100, 150); 

const distanceTraveled = 10; 
const timeTraveled = 15; 

const price = uberX.calculatePrice(distanceTraveled, timeTraveled);
console.log(`The total price for the ride is ₹${price.toFixed(2)}`);