(function() {

    'use strict';

    angular.module('httpLoadingInterceptor', [])

    .factory('httpLoadingInterceptorService', [ "$q", "$rootScope", function($q, $rootScope) {

	return {
	    request : function(config) {
		// Shows the loader
		$rootScope.$broadcast("httpLoadingInterceptor:show");
		return config || $q.when(config)
	    },
	    response : function(response) {
		// Hides the loader
		$rootScope.$broadcast("httpLoadingInterceptor:hide");
		return response || $q.when(response);
	    },
	    responseError : function(response) {
		// Hides the loader
		$rootScope.$broadcast("httpLoadingInterceptor:hide");
		return $q.reject(response);
	    }
	};
    } ]).config([ "$httpProvider", function($httpProvider) {
	$httpProvider.interceptors.push('httpLoadingInterceptorService');
    } ])

    .directive("httpLoadingInterceptorSpinner", function() {

	return {
	    restrict : 'A',
	    template : '<div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div>',
	    link : function($scope, element, attrs) {
		$scope.$on("httpLoadingInterceptor:show", function() {
		    // console.log('show');
		    element.addClass('loading-visible');
		});
		$scope.$on("httpLoadingInterceptor:hide", function() {
		    // console.log('hide');
		    element.removeClass('loading-visible');
		});
	    }
	};
    })

})();