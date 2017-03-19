var str = '黄真真是大傻瓜,是笨猪,是懒猪';

var re = /大傻瓜|懒猪|笨猪/g;


var result1 = str.replace(re,function(str){
    var res = '';
    var re2 = /大傻瓜/g;
    if(re2.test(str)){
        res = str.replace(re2,'大美女');
    }else{
        for(var i = 0; i < str.length; i++){
            res += '*';
        }
    }

    return res;
});
console.log(result1);