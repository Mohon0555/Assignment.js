
//kilometerToMeter
function kilometerToMeter(kilometer){
    var meter = kilometer*1000; 
    return meter;
}
    var abulMeter = kilometerToMeter(4.4);
    console.log(abulMeter);
    var babulMeter = kilometerToMeter(3.0);
    console.log(babulMeter);


//budgetCalculator
function watch(watchprice, watchcount){
    var watchtotalcost = watchprice * watchcount;
    return watchtotalcost;
}
var sumofwatch = watch(50, 9);
// console.log(sumofwatch);

function mobile(mobileprice, mobilecount){
    var mobiletotalcost = mobileprice * mobilecount;
    return mobiletotalcost;
}
var sumofmobile = mobile(100, 3);
// console.log(sumofwatch);

function laptop(laptopprice, laptopcount){
    var laptoptotalcost = laptopprice * laptopcount;
    return laptoptotalcost;
}
var sumoflaptop = laptop(500, 2);
// console.log(sumoflaptop);

var totalcost = sumofwatch + sumofmobile + sumoflaptop;
console.log(totalcost);

//hotelCost
    var day = 31;
    var cost = 0;
if(day<=10){
     cost= day * 100;
}
else if (day<=20){
   var firstcost = 10 * 100;
   var extraday = day - 10;
   var secondcost = extraday * 80;
    cost = firstcost + secondcost;
}
else{
    var firstcost = 10 * 100;
    var secondcost = 10 * 80;
    var extraday = day - 20;
    var thirdcost = extraday * 50;
    cost = firstcost + secondcost + thirdcost;
}
console.log(cost);

//megaFriend

var friend = ['korim', 'nazmul', 'siam', 'obaidul', 'samiu', 'nafis'];
var megaFriend = friend [0];
for(var i=0; i < friend.length; i++){
    var element = friend[i];
    if(element>megaFriend){
        megaFriend  = element;
    }
}
console.log(element);