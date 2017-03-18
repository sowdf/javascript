var str = 'abcdefg';

var re = /bd/;

console.log(re.test(str));

var str2 = '2312321213123123';

var re2 = /\D/;


if(re2.test(str2)){
    console.log('不全是数组');
}else {
    console.log('全是数字');
}