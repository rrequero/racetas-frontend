angular.module( 'raty', [] )
.directive("raty", function() {
    return {
        restrict: 'AE',
        link: function(scope, elem, attrs) {
            $(elem).raty({score: attrs.score, number: attrs.number, readOnly: attrs.readOnly, starOff : './assets/img/icono-gorro-verde.png',
             starOn  : './assets/img/icono-gorro.png', starHalf : './assets/img/icono-gorro-mitad.png'});
        }
    };
});