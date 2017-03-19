var str = 'activeRule(30,40,40);';


var key = 'activeRule';

var re = new RegExp(key + '[^;]+;');



//var r = str.replace(re,'fffff');

var r = str.replace(re,'activeRule(321312,40,700);');
console.log(r);