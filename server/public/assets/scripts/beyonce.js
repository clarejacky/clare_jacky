var beyonceArray = ["<a href='http://media1.policymic.com/site/article-items/27959/1_gif.gif'</a>",
    '<a href="http://media1.policymic.com/site/article-items/27955/1_gif.gif"></a>',
    '<a href="http://media3.mic.com/YTJkNjk4NTE2NCMvZElQSktURWdHZ0ItdmU5QVB3dHNjUHl3bDl3PS8weDA6NzM4eDQxNi9maWx0ZXJzOnF1YWxpdHkoNzApL2h0dHBzOi8vczMuYW1hem9uYXdzLmNvbS9wb2xpY3ltaWMtaW1hZ2VzL2MxNWY5ODM3ZTY4ZTg5Yjc1NjczYmZkYzM5NTMzOTU3ZjkxOGVkOTgzZjUzY2VmZGQwMjZmMDA4Y2FhYjNhMTYuanBn.jpg"</a>'
];

var beyonce = function() {
    for (var i = 0; i < beyonceArray.length; i++){
        setInterval(function() {
            $(".beyonce").empty();
            $(".beyonce").append(beyonce[i]);
        }, 5000);
    }

}


module.exports.beyonce = beyonce;