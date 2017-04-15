let fs = require('fs');

let images = require('images');


let option = {
    dirPath : '/Users/caozhihui/code/huodong/4399cn/y2017/timeMachine/dev/images/',
    outputPath:'/Users/caozhihui/code/huodong/4399cn/y2017/timeMachine/dev/scss/'
};

function DealImages(option){
    this.dirPath = option.dirPath;
    this.outputPath = option.outputPath;
}

DealImages.prototype.init = function(){
    this.readAllImages();
    fs.watch(this.dirPath,(eventType,filename)=>{
        if(eventType){
            this.readAllImages();
        }
    });
};

DealImages.prototype.readAllImages = function(){
    fs.readdir(this.dirPath,(err,data)=>{
        if(err){
            console.log(err);
            return false;
        }

        this.callback('writeStylesheet',data);
    });
};

DealImages.prototype.filterImages = function(data){

    let formatAry = ['bmp','png','jpeg','gif'];

    let newAry = [];

    data.forEach((item,index)=>{

        let suffix = item.split('.')[1];

        if(formatAry.indexOf(suffix) != -1){ //  如果 judge 里面有 说明是图片
            newAry.push(item);
        }
    });

    return newAry;

};

DealImages.prototype.getSize = function(filePath){

    let size = images(filePath);

    return {
        width : size.width(),
        height : size.height()
    }
};

DealImages.prototype.template = function(w,h,fileName,fileNameAll){
    return `@mixin ${fileName}(){
  width:${w}rem/$base;
  height:${h}rem/$base;
  background:url(../images/${fileNameAll}) no-repeat;
  background-size:100% auto;
}
`;
}

DealImages.prototype.writeStylesheet = function(data){

    let imagesAry = this.filterImages(data);

    let template = ``;

    imagesAry.map((item,index)=>{

        let fileName = item.split('.')[0];

        let filePath = this.dirPath + item;

        let size = this.getSize(filePath);

        template += this.template(size.width,size.height,fileName,item);

    });

    let outputPath = this.outputPath + 'imagesStylesheet.scss';

    fs.writeFile(outputPath,template,(err)=>{
        if(err){
            console.log(err);
            return err;
        }
    });
};


DealImages.prototype.callback = function(strategy,data){
    this.strategies(strategy,data) || console.log(strategy + '您回调的策略对象不存在~');
};

DealImages.prototype.strategies = function (strategy,data){

    if(this[strategy]){

        this[strategy](data);

        return true;
    }

    return false;
};

let deal = new DealImages(option);
deal.init();

