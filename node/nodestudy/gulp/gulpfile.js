var gulp = require('gulp')
//插件
var concat = require("gulp-concat")
var uglify = require("gulp-uglify")
var rename = require('gulp-rename')
var babel = require('gulp-babel')
//1 复制文件
// gulp.task() 参数1：任务名，参数2：函数
//文件源gulp.src
//dest目的路径
//pipe 操作方式，返回被操作的对象本身 
// 如果需要使用，需要在node中输入命令 gulp 任务名
//callback一般需要返回

// gulp.task('_copy',function(){
//     //文件源gulp.src
    
//     let stream =  gulp.src('注意事项.txt').pipe(gulp.dest("E://dest"))
//     return stream
// })

// 拷贝目录
//     xx/** xxx下面所以一级目录级文件
gulp.task('_copy',function(){
    return gulp.src('**/dir/**/*').pipe(gulp.dest("E:\\dest"))
})
gulp.task('_copy2',function(){
    return gulp.src('js/f1.js').pipe(gulp.dest("E:\\dest"))
})

//2监听 watch 
gulp.task('_watch',function(){
    // 目标文件发生变化，则执行函数
    return gulp.watch('dir/dir.html',function(){
        gulp.src('dir/**/*').pipe(gulp.dest("E:\\dest"))
    })
    
})


//3插件接口 
// 合并 gulp-concat     cnpm i gulp-concat --save-dev
// gulp.task('_concat',function(){
//     return gulp.src(['js/f1.js','js/f2.js']).pipe(concat('tools.js')).pipe(gulp.dest('E:\\dest'))
// })

// 压缩 gulp-uglify         cnpm i gulp-uglify --save-dev
gulp.task('_uglify',function(){
    return gulp.src(['js/f1.js','js/f2.js'])
           .pipe(concat('tools.js'))
           .pipe(uglify())
           .pipe(gulp.dest('E:\\dest'))
})

// 重命名 gulp-rename       cnpm i gulp-rename --save-dev
gulp.task('_rename',function(){
    return gulp.src(['js/*.js'])
           .pipe(concat('tools.js'))
           .pipe(uglify())
           .pipe(rename('mytools.js'))
           .pipe(gulp.dest('E:\\dest'))
})
//-------------------------------------------------------------------------------------------------------
//压缩css cnpm i gulp-clean-css --save-dev
// 插件 gulp-clean-css













//----------------------------------------------------------------------------------------------------------------
// 4 es6转换为es5 gulp-babel    
// 固定babel({presets:['es2015']})
//  cnpm i --save-dev babel-preset-es2015
//  cnpm i --save-dev gulp-babel@7 babel-core babel-preset-env

gulp.task('_babel',function(){
    return gulp.src('js/es5mf.js')
        .pipe(babel({presets:['es2015']}))
        .pipe(uglify())
        .pipe(rename('myes2015.js'))
        .pipe(gulp.dest('E:\\dest'))
})