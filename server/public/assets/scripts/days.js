//
//var beyonceArray = ["<img src='http://media1.policymic.com/site/article-items/27959/1_gif.gif'>",
//    '<img src="http://media1.policymic.com/site/article-items/27955/1_gif.gif">',
//    '<img src="http://media3.mic.com/YTJkNjk4NTE2NCMvZElQSktURWdHZ0ItdmU5QVB3dHNjUHl3bDl3PS8weDA6NzM4eDQxNi9maWx0ZXJzOnF1YWxpdHkoNzApL2h0dHBzOi8vczMuYW1hem9uYXdzLmNvbS9wb2xpY3ltaWMtaW1hZ2VzL2MxNWY5ODM3ZTY4ZTg5Yjc1NjczYmZkYzM5NTMzOTU3ZjkxOGVkOTgzZjUzY2VmZGQwMjZmMDA4Y2FhYjNhMTYuanBn.jpg">'
//];
//
//
//
//
//    var beyonce = function() {
//        for(var i = 0; i <beyonceArray.length; i++){
//            console.log(beyonceArray[i]);
//        }
//
//    };

function dayOfTheYear() {
    var dt = new Date();
    var dayCount = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    var monthNumber = dt.getMonth();
    var month = dayCount[monthNumber];
    var dayOfMonth = dt.getDate();
    var dayOfTheYear = month + dayOfMonth;
    return dayOfTheYear;
}

function dayOfBirthday () {
    var dayCount = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    var month = dayCount[6];
    var dayOfBirthday = month + 24;
    return dayOfBirthday;
}

var birthday = dayOfBirthday();
var dayYear = dayOfTheYear();

var daysUntilthirty = function (){
    var daysUntil = "<p>Clare Jacky will be 30 in "+(birthday - dayYear)+ " days!</p>";
    console.log("Hi there");
    return daysUntil;
};



module.exports = daysUntilthirty;