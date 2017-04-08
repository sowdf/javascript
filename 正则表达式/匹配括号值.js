/*var str = '@include banner(34,53,64);';
var str2 = '@include banner(34,53,url(../images/a.png));';*/
var str3 = '@import "test";@include banner(320,700);@include button(100,url(../images/a.png));';
//var re = /\w+/g;
//var re = /(^@\w+\s)banne[^;]+;/g;
var re = /button[^;]+;/;


var result = str3.match(re)[0].match(/button\((.+)\);/)[1].split(',');
console.log(result);