(function () {
    angular
        .module("interview")
        .config(configuration);

    function configuration($routeProvider) {
        $routeProvider
            .when('/',{
                templateUrl:'index.html',
                controller:'bookController',
                controllerAs:'model'
            })}
})();