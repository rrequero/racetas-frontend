angular.module('templates-app', ['home/home.tpl.html', 'receta/receta.tpl.html']);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<div>\n" +
    "\n" +
    "  <!--<div class=\"btn-group\">\n" +
    "      <button class=\"btn btn-primary\" ng-click=\"addSimple()\">Add simple</button>\n" +
    "       <button class=\"btn btn-primary\" ng-click=\"addDouble()\">Add double</button>\n" +
    "      <button class=\"btn btn-danger\" ng-click=\"remove()\">Remove</button>\n" +
    "  </div>-->\n" +
    "   <!--<div masonry column-width=\".grid-sizer\" masonry-options=\"{ gutter : 10 }\"> -->\n" +
    "  <div class=\"masonry\" masonry column-width=\".grid-sizer\" masonry-options=\"{ gutter : 5, isFitWidth:true }\"  item-selector=\".recipe\">\n" +
    "      <div class=\"grid-sizer\"></div>\n" +
    "      <div class=\"recipe\" ng-repeat=\"recipe in recipes | filter:search:filterIngredientsFunction | filter:search.title\" masonry-brick>\n" +
    "          <div class=\"image\"><img ng-src=\"{{recipe.srcImg}}\" alt=\"\"/></div>\n" +
    "          <raty id=\"star{{$index}}\" score=\"{{recipe.score}}\" number=\"5\" read-only=\"true\"></raty>\n" +
    "          <h4>{{recipe.title}}</h4>         \n" +
    "      </div>\n" +
    "  </div>\n" +
    " \n" +
    "</div>\n" +
    "\n" +
    "");
}]);

angular.module("receta/receta.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("receta/receta.tpl.html",
    "<div class=\"row-fluid\">\n" +
    "  <h1 class=\"page-header\">\n" +
    "   About\n" +
    "  </h1>\n" +
    "  \n" +
    "</div>\n" +
    "\n" +
    "");
}]);
