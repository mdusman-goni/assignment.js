// https://github.com/mdusman-goni/assignment.js


// kilimeterToMeter 
function kilometerToMeter(n) {
    if (n <= 0) {
        return "It can't be negative"
    } else {
        return kilometer = n * 1000;
    }
}
var resultKilometer = kilometerToMeter(10);
console.log(resultKilometer);


// bugetCalculator
function budgetCalculator(watch, mobile, laptop) {

    // watch price 50
    var watch = watch * 50;

    // mobile price 100    
    var mobile = mobile * 100;

    // laptop price 500
    var laptop = laptop * 500;

    var total = watch + mobile + laptop;
    return total;
}
var result = budgetCalculator(1, 2, 3);
console.log(result)


// hotelCost
function hotelCost(night) {
    var cost = 0;
    if (night <= 10) {
        cost = night * 100;
    } else if(night <= 20){
        var firstNight = 10 * 100;
        var remaining = night - 10;
        var secondNight = remaining * 80;
        cost = firstNight + secondNight;
    } else{
        var firstNight = 10 * 100;
        var secondNight = 10 * 80;
        var remaining = night - 20;
        var thirtNight = remaining * 50;
        cost = firstNight + secondNight + thirtNight
    }
    return cost;
}
var result = hotelCost(2);
console.log(result);


// megaFriend

var friends = ["Rakib", "Rafi", "Al-Fahad", "Mudassir", "Fokrul"];
var maxStore = "";
function megaFriend(friends) {
    for (let i = 0; i < friends.length; i++) {
        if (friends[i].length > maxStore.length) {
            maxStore = friends[i];
        } 
    }
    return maxStore;
}
console.log(megaFriend(friends))