//https://github.com/silviaplabon/javascript-code
function kilometerToMeter(kilometer) {
    if (kilometer < 0) {
        return "unit of length can't contain a negative value"
    }
    else {
        var meter = (kilometer * 1000);//1 kilometer=1000meter
        return meter;
    }
}



function budgetCalculator(watchQuantity, phoneQuantity, laptopQuantity) {
    var watchPrice = 50;
    var phonePrice = 100;
    var laptopPrice = 500;

    if (watchQuantity < 0) {
        watchQuantity = 0;//all negative product value will be 0
    }
    if (watchQuantity % 1 !== 0) {
        watchQuantity = Math.round(watchQuantity);//we are rounding the value,cause a product can never be a float number
        console.log("input for watch quantity  is float number,we are converting it into round number of watch in the budget");
    }

    if (phoneQuantity < 0) {
        phoneQuantity = 0;//all negative product value will be 0
    }
    if (phoneQuantity % 1 !== 0) {
        phoneQuantity = Math.round(phoneQuantity);//we are rounding the value,cause a product can never be a float number
        console.log("input for phone quantity is  float number,we are converting it into  round number of phone in the budget");
    }

    if (laptopQuantity < 0) {
        laptopQuantity = 0;//all negative product value will be 0
    }
    if (laptopQuantity % 1 !== 0) {
        laptopQuantity = Math.round(laptopQuantity);//we are rounding the value,cause a product can never be a float number
        console.log("input for laptop quantity is float number,we are converting it  into round number of laoptop in the budget");
    }

    var watchCost = (watchQuantity * watchPrice);
    var phoneCost = (phoneQuantity * phonePrice);
    var laptopCost = (laptopQuantity * laptopPrice);
    var totalCost = (watchCost + phoneCost + laptopCost);

    if (totalCost > 50) {
        return totalCost;
    }
    else {
        return "Please buy a product among watch,phone and laptop."
    }
}



function hotelCost(day) {
    var cost;
    //if day is 0 cost will be 0
    if (day <= 0) {
        console.log("please stay a day in our hotel.");
        cost = 0;
        return cost;
    }
    //if day in between 1 and 10 cost will be 100 and day can be floatnumber.
    if (day > 0 && day <= 10) {
        cost = (day * 100);
        return cost;
    }
     //if day in between 11 and 20 cost will be 100 and day can be floatnumber.
    if (day >= 11 && day <= 20) {
        var firstCost = (10 * 100);
        var secondCost = ((day - 10) * 80);
        cost = firstCost + secondCost;
        return cost;
    }
     //if day in between 1 and 10 cost will be 100 and day can be floatnumber.
    if (day > 20) {
        var firstCost = 10 * 100;
        var secondCost = 10 * 80;
        var thirdCost = ((day - 20) * 50);
        cost = firstCost + secondCost + thirdCost;
        return cost;//returning totalcost
    }
}




function megaFriend(friendsList) {
    //assuming friendList only contain String type data
    for (var j = 0; j < friendsList.length; j++) {
        //if friendList array contain any number ,i convert it into NaN illegal undefiend number,by doing this number will be ignored.
        if (typeof (friendsList[j]) === "number") {
            friendsList[j] = NaN;
        }
        console.log(friendsList[j]);
    }
    //checking friendList length and if it length is 0 then we return.
    if (friendsList.length == 0) {
        return "you don't have any friend"
    }
    //finding largest word --->all numerical value considered as a NaN value which is a invalid undefined number and its length is 0.
    else {
        var newElement = "";
        for (var i = 0; i < friendsList.length; i++) {
            var currentFriend = friendsList[i];
            if (currentFriend.length > newElement.length) {
                newElement = currentFriend; // friend who has the longest name
            }
        }
        return newElement;
    }
}




