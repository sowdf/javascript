var str = '@include banner(34,53,64);';
var str2 = '@include banner(34,53,url(../images/a.png));';
var str3 = '@include banner(#fff,53,url(../images/a.png));';
//var re = /\w+/g;
var re = /(^@\w+\s)banne[^;]+;/g;


var result = str3.replace(re,function(str){
    var result =  str.match(/@include banner\((.+)\);/)[1].split(',');
    return str.match(/[^@include banner(][^,]+/g)

})
