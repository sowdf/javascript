var str = '123213fafsdfasgsnjj24u2fdnjafdfdjasfdsafjafjsjfdsakfdsvhgejadsfjdfjfjfjjfffff';

var newStr = str.split('').sort().join('');

var re = /(\w)\1+/g;
var index = 0;
var value = '';
console.log(newStr);
newStr.replace(re,function($0,$1){
    console.log($0);
    if(index < $0.length){
        index = $0.length;
        value = $1;
    }
});

console.log('出现最多的字符是' + value + '出现多少次 ： ' + index);