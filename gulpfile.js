"use strict";

var gulp = require("gulp"),
    concat = require("gulp-concat"),
    scss = require("gulp-sass"),
    ngAnnotate = require("gulp-ng-annotate"),
    uglify = require("gulp-uglify"),
    webserver = require("gulp-webserver");

gulp.task("js", function(){
  gulp.src([
      "builds/dev/app/**/*.js",
      "!builds/dev/app/**/*_test.js"
      ])
    .pipe(concat("app.js"))
    .pipe(ngAnnotate())
    .pipe(uglify())
    .pipe(gulp.dest("builds/dev"));
  gulp.src([
    "bower_components/angular/angular.js",
    "bower_components/angular-route/angular-route.js",
    "bower_components/angular-bootstrap/ui-bootstrap-tpls.js",
  ])
    .pipe(concat("libs.js"))
    .pipe(gulp.dest("builds/dev"));
});

gulp.task("css", function(){
  gulp.src("builds/dev/app/**/*.scss")
    .pipe(scss())
    .pipe(concat("app.css"))
    .pipe(gulp.dest("builds/dev"));
  gulp.src([
    "bower_components/angular/angular-csp.css",
    "bower_components/angular-bootstrap/ui-bootstrap-csp.css",
    "bower_components/bootstrap/dist/css/bootstrap.css",
  ])
    .pipe(concat("theme.css"))
    .pipe(gulp.dest("builds/dev"));
});

gulp.task("watch", function(){
  gulp.watch("builds/dev/app/**/*.js", ["js"]);
  gulp.watch("builds/dev/app/**/*.scss", ["scss"]);
});

gulp.task("webserver", function(){
  gulp.src("builds/dev")
    .pipe(webserver({
      livereload: true,
      open: true,
      port: 8005
    }))
});

gulp.task("default",[
  "js",
  "css",
  "watch",
  "webserver"
]);