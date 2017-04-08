
var gulp = require('gulp');
var spriter = require('gulp-css-spriter');

gulp.task('css', function() {
    return gulp.src('./css/recharge.css')//比如recharge.css这个样式里面什么都不用改，是你想要合并的图就要引用这个样式。 很重要 注意(recharge.css)这个是我的项目。别傻到家抄我一样的。
        .pipe(spriter({
            // The path and file name of where we will save the sprite sheet
            'spriteSheet': './dist/images/spritesheet.png', //这是雪碧图自动合成的图。 很重要
            // Because we don't know where you will end up saving the CSS file at this point in the pipe,
            // we need a litle help identifying where it will be.
            'pathToSpriteSheetFromCSS': '../images/spritesheet.png' //这是在css引用的图片路径，很重要
        }))
        .pipe(gulp.dest('./dist/css')); //最后生成出来
});