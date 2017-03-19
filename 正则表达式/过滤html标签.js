var str = '<div> eqeweqweq</div>'

var re = /<[^>]+>/g;

var r = str.replace(re,'');
console.log(r);