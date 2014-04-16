angular.module('templates-app', ['home/home.tpl.html']);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div class=\"jumbotron\">\n" +
    "  <h1>Home</h1>\n" +
    "  <div class=\"btn-group\">\n" +
    "      <button class=\"btn btn-primary\" ng-click=\"add()\">Add</button>\n" +
    "      <button class=\"btn btn-danger\" ng-click=\"remove()\">Remove</button>\n" +
    "  </div>\n" +
    "  <!--<div masonry column-width=\".grid-sizer\" masonry-options=\"{ gutter : 10 }\"> -->\n" +
    "  <div masonry column-width=\"200\" masonry-options=\"{ gutter : 5 }\">\n" +
    "      <div class=\"grid-sizer\"></div>\n" +
    "      <div class=\"masonry-brick\" ng-repeat=\"brick in bricks\">\n" +
    "          <!--<img ng-src=\"{{ brick.src }}\" alt=\"A masonry brick\">-->\n" +
    "          {{ brick.src }}\n" +
    "      </div>\n" +
    "  </div>\n" +
    " \n" +
    "</div>\n" +
    "\n" +
    "");
}]);
