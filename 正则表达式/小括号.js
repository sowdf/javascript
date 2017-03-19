var str = '2017-6-8';

var re = /(\d+)(-)/g;

var r =  str.replace(re,function($0,$1,$2){
    return $1 + '.';
});

console.log(r);

