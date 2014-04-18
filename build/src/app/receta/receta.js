angular.module( 'racetas.receta', [
  'ui.router',
  'placeholders',
  'ui.bootstrap'
])
 
.config(function config( $stateProvider ) {
  $stateProvider.state( 'receta', {
    url: '/receta',
    views: {
      "main": {
        controller: 'RecetaCtrl',
        templateUrl: 'receta/receta.tpl.html'
      }
    },
    data:{ pageTitle: 'Receta' }
  });
})

.controller( 'RecetaCtrl', function RecetaCtrl( $scope ) {
  
})

;
