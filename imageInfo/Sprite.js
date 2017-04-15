const fs = require('fs');
const images = require('images');


/*
* 原理 将两张图片合成一张
*
* */
let option = {
    dirPath : './images/',
    outputPath:'./images/',
    outputName : 'sprites.png',
    spacing : 10,
};

function Sprite(option) {

    this.option = option;

    this.init();
}


Sprite.prototype.init = function(){

    this.imagesAry = this.filterImages(this.getAllImagesAry(this.option.dirPath)); // 获取图片并过滤不是图片的资源

    this.createSprites();

};

Sprite.prototype.createSprites = function(){

    this.createFirstSprites(); // 创建第一张雪碧图


};

Sprite.prototype.synthetic = function(){ //将两张图片合成一张

};

Sprite.prototype.createFirstSprites = function(){ //创建第一张雪碧图

    let firstImage = this.imagesAry.pop();

    let imagePath = this.getImagePath(firstImage);

    let {w,h} = this.getImageSize(imagePath);

    let outputPath = this.option.outputPath + this.option.outputName;
    console.log(imagePath);
    images(w + this.option.spacing,h + this.option.spacing)
        .draw(images(imagePath),0,0)
        .save(outputPath)


};

Sprite.prototype.createEmptyImage = function(w,h){ //创建空白图层

    let path = this.option.outputPath + this.option.outputName;

    images(w,h).save(path);

};

Sprite.prototype.getImagePath = function(imageName){
    /* 这个 要加路径判断 判断最后路径 有没有 / */

    return this.option.dirPath + imageName;
};

Sprite.prototype.getImageSize = function(dirPath){

    let size = images(dirPath);

    return {w:size.width(),h:size.height()};

};

Sprite.prototype.getAllImagesAry = function(dirPath){

    let result = [];

    try {
        result = fs.readdirSync(dirPath);
    }catch (e){
        console.log(e);
        result = [];
    }

    return result;
};

Sprite.prototype.filterImages = function(imagesAry){

    let formatAry = ['bmp','png','jpeg','gif'];

    let newAry = [];

    imagesAry.forEach((item,index)=>{

        let suffix = item.split('.')[1];

        if(formatAry.indexOf(suffix) != -1){ //  如果 judge 里面有 说明是图片
            newAry.push(item);
        }
    });

    return newAry;

};



var sprite = new Sprite(option);
