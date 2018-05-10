(function () {
    angular
        .module("interview")
        .factory('bookService', bookService);

    function bookService($http) {

        var api = {
            findAllBooks: findAllBooks
        };

        return api;

        function findAllBooks() {
            return $http.get("/api/book")
                .then(function (response) {
                    return response.data;
                },function () {
                console.log("error")

            })


        }
    }
})();