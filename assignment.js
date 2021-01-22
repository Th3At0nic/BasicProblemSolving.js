// kilometer to meter converter code starts here.
function kilometerToMeter(kilometer) {
    var meter;
    if (kilometer < 0) {
        return "Invalid input! KM can't be negative. Try Again.";
    } else {
        meter = kilometer * 1000;
    }
    return meter;
}
var roadLength = kilometerToMeter(-4);
console.log(roadLength);



// hotelCost calculation code starts here.
// for first 10 days,cost will be 100 per night.
// after 10 days,from 11 to till 20 days, cost will be 80 per night.
// from 21 to unlimited days costs 50 per night.

function hotelCost(days) {
    var cost = 0;
    var first10DaysCost;
    var second10DaysCost;
    var remainigDays;
    if (days < 0) {
        return "Invalid days! Days can't be negative. Try agian.";
    } else if (days <= 10) {
        cost = days * 100;
    } else if (days <= 20) {
        first10DaysCost = 10 * 100;
        remainigDays = days - 10;
        var costAfter10 = remainigDays * 80;
        cost = (first10DaysCost + costAfter10);
    } else {
        first10DaysCost = 10 * 100;
        second10DaysCost = 10 * 80;
        remainigDays = days - 20;
        var costAfter20 = remainigDays * 50;
        cost = (first10DaysCost + second10DaysCost + costAfter20);
    }
    return cost;
}
var totalCost = hotelCost(-20);
console.log(totalCost);



//Here we go for budgetCalculator
// price per watch = 50, mobile = 100, laptop = 500.

function budgetCalculator(watch, mobile, laptop) {
    var watchPrice = 50;
    var mobilePrice = 100;
    var laptopPrice = 500;
    if (watch <= -1) {
        return "Invalid amount! Watch or any objects amount can't be negative. Try again.";
    } else {
        watchPrice = watch * watchPrice;
    }

    if (mobile <= -1) {
        return "Invalid amount! Mobile or any objects amount can't be negative. Try again.";
    } else {
        mobilePrice = mobile * mobilePrice;
    }

    if (laptop <= -1) {
        return "Invalid amount! Laptop or any objects amount can't be negative. Try again.";
    } else {
        laptopPrice = laptop * laptopPrice;
    }
    var total = (watchPrice + mobilePrice + laptopPrice);
    return total;
}
var result = budgetCalculator(41, -1, 1);
console.log(result);



//megaFriend code starts here.
//here you can call the function and find out the biggest name as a string from an array.

function megaFriend(friends) {
    var nameLength = 0;
    var biggestName = "";
    for (var i = 0; i < friends.length; i++) {

        if (friends[i].length > nameLength) {
            nameLength = friends[i].length;
            biggestName = friends[i];
        }
    }
    return biggestName;
}
var result = megaFriend(["Sifat", "Ahsan the gaddar", "Sany", "Sohan the poddarr", "Moinrrrr"]);
console.log(result);