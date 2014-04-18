angular.module( 'racetas.home', [
  'ui.router',
  'plusOne',
  'wu.masonry',
  'localytics.directives',
  'raty'
])


.config(function config( $stateProvider ) {
  $stateProvider.state( 'home', {
    url: '/home',
    views: {
      "main": {
        controller: 'HomeCtrl',
        templateUrl: 'home/home.tpl.html'
      }
    },
    data:{ pageTitle: 'Home' }
  });
})


.controller( 'HomeCtrl', function HomeController( $scope ) {

  function genRecipe() {
      return {
          title:'Receta '+ ~~(Math.random() * 10000),
          type:"simple",
          srcImg:'http://lorempixel.com/280/180/food/?' + ~~(Math.random() * 10000),
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a placerat neque. Sed dictum, massa ut iaculis placerat, magna est tempus metus, at sagittis nunc nisi vestibulum massa. Nunc tortor.'
      };
  }

  $scope.$parent.ingredients = [
    {
      key:"agua", value:"Agua"
    },
    {
      key:"maiz", value:"Maiz"
    },
    {
      key:"harina", value:"Harina"
    },
    {
      key:"vino", value:"Vino"
    },
    {
      key:"remolacha", value:"Remolacha"
    },
    {
      key:"azucar", value:"Azucar"
    }
  ];


  $scope.filterIngredientsFunction = function(actual, expected){
    var find = expected.length === 0;
    for(var pos in expected){
      if(actual.indexOf(expected[pos])==-1 && $scope.strict === true){
        return false;
      }else if(actual.indexOf(expected[pos])!=-1 && $scope.strict === false){
        return true;
      }
      else if(actual.indexOf(expected[pos])!=-1){
        find = true;
      }
    }
    return find;
  }; 

  $scope.recipes = [
     {
          title:'Receta '+ ~~(Math.random() * 10000),
          ingredients:['azucar','maiz','agua'],
          srcImg:'http://lorempixel.com/280/180/food/?' + ~~(Math.random() * 10000),
          score:1,
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a placerat neque. Sed dictum, massa ut iaculis placerat, magna est tempus metus, at sagittis nunc nisi vestibulum massa. Nunc tortor.'
      },
      {
          title:'Receta '+ ~~(Math.random() * 10000),
          ingredients:['vino'],
          score:2,
          srcImg:'http://lorempixel.com/280/180/food/?' + ~~(Math.random() * 10000),
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a placerat neque. Sed dictum, massa ut iaculis placerat, magna est tempus metus, at sagittis nunc nisi vestibulum massa. Nunc tortor.'
      },
      {
          title:'Receta '+ ~~(Math.random() * 10000),
          ingredients:['azucar','maiz','harina'],
          score:3,
          srcImg:'http://lorempixel.com/280/180/food/?' + ~~(Math.random() * 10000),
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a placerat neque. Sed dictum, massa ut iaculis placerat, magna est tempus metus, at sagittis nunc nisi vestibulum massa. Nunc tortor.'
      },
      {
          title:'Receta '+ ~~(Math.random() * 10000),
          ingredients:['remolacha','maiz','agua'],
          score:5,
          srcImg:'http://lorempixel.com/280/180/food/?' + ~~(Math.random() * 10000),
          description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a placerat neque. Sed dictum, massa ut iaculis placerat, magna est tempus metus, at sagittis nunc nisi vestibulum massa. Nunc tortor.'
      }
  ];


  $scope.addSimple = function() {
      var recipe = genRecipe();
      
      $scope.recipes.push(recipe);
  };

  $scope.addDouble = function() {
      var recipe = genRecipe();
      recipe.type="double";
      recipe.srcImg ='http://lorempixel.com/400/200/food/?' + ~~(Math.random() * 10000),
      $scope.recipes.push(recipe);
  };

  /*for(var i= 0;i < 10; i++){
    if((~~(Math.random() * 10000)) % 2 === 0){
      $scope.addDouble();
    }else{
       $scope.addSimple();
    }
  }*/

  

  $scope.remove = function() {
      $scope.recipes.splice((Math.random() * $scope.recipes.length),1);
  };

});

