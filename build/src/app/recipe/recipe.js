angular.module( 'racetas.recipe', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])

.config(function config( $stateProvider ) {
  $stateProvider.state( 'recipe', {
    url: '/recipe',
    views: {
      "main": {
        controller: 'RecipeCtrl',
        templateUrl: 'recipe/recipe.tpl.html'
      }
    },
    data:{ pageTitle: 'Receta' }
  });
})

.controller( 'RecipeCtrl', function AboutCtrl( $scope ) {
  
})

;
