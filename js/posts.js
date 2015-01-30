var app = angular.module('myApp', ['ui.router']);

app.filter('slice', function() {
    return function(arr, start, end) {
        return arr.slice(start, end);
    };
});

app.filter('authors', function() {
    return function(authorsId) {
        authorsNames = [];
        for(var i = 0; i < authorsId.length; i++){
            authorsNames[i] = authors.filter(function(element){
                return element.id == authorsId[i]
            })[0].name;
        }

        var ret = authorsNames[0];
        if(authorsNames.length == 1) {
            return ret;
        }

        for (var i = 1; i < authorsNames.length -1; i++){
            ret += ', ' + authorsNames[i];
        }
        ret += ' e ' + authorsNames[authorsNames.length-1];
        return ret;
    };
});

app.config(['$stateProvider', '$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/posts/page/1');

    $stateProvider
        .state('postsPage', {
            url: '/posts/page/:pageNum',
            templateUrl: 'posts.html'
        })
        .state('postTitle', {
            url: '/post/:title',
            templateUrl: "post.html"
        }).state('postsAuthor', {
            url: '/posts/:authorId',
            templateUrl: 'posts.html'
        }).state('postsAuthorPage', {
            url: '/posts/:authorId/page/:pageNum',
            templateUrl: 'posts.html'
        }).state('contributors', {
            url: '/authors/',
            templateUrl: 'contribuitors.html'
        });
}]);

app.controller('postsController', function ($scope, $stateParams, $location) {

    $scope.data = {}
    $scope.data.authorId = $stateParams.authorId;
    $scope.data.allPosts = posts;

    $scope.data.baseUrl = '/posts/page/';

    if($scope.data.authorId){
        $scope.data.baseUrl = '/posts/' + $scope.data.authorId + '/page/';
        $scope.data.allPosts = $scope.data.allPosts.filter(function(element){
            alert($.inArray($scope.data.authorId, element.authorsId))
            return $.inArray($scope.data.authorId, element.authorsId) >= 0;
        })
    }

    $scope.interface = {};
    $scope.interface.page = parseInt($stateParams.pageNum) || 1;

    $scope.interface.init = ($scope.interface.page-1)*10;

    $scope.interface.final = $scope.interface.init+10;

    $scope.functions = {}

    $scope.functions.nextPage = function(){
        $location.path($scope.data.baseUrl + ($scope.interface.page+1))
    }

    $scope.functions.previousPage = function(){
        $location.path($scope.data.baseUrl + ($scope.interface.page-1))
    }

    $scope.functions.seePost = function(index){
        selectedIndex = $scope.interface.init + index
        $location.path("/post/" + $scope.data.allPosts[selectedIndex].title)
    }
});

app.controller('postController', function ($scope, $stateParams) {

    $scope.data = {}
    $scope.data.title = $stateParams.title;

    var byTitle = function(element){
        console.log(element.title == $scope.data.title)
        return element.title === $scope.data.title
    }

    $scope.data.post = posts.filter(byTitle)[0];
});

app.controller('contribuitorsController', function ($scope, $location) {

    $scope.data = {}
    $scope.data.authors = authors;

    $scope.functions = {}
    $scope.functions.toAuthor = function(author){
        $location.path('/posts/' + author)
    }
});