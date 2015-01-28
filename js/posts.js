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
        });
}]);

authors = [{name:'Igleson Freire', id:'igleson'}, {name:'Tales Tenório', id:'tales'}];

posts = [
    {title:'Lorem ipsum01', subtitle:'dolor sit amet, consectetur adipiscing elit', authorsId:['igleson'], date:'26-01-2014', htmlSrc:'teste.html'},
    {title:'Lorem ipsum02', subtitle:'dolor sit amet, consectetur adipiscing elit', authorsId:['igleson','tales'], date:'26-01-2014', htmlSrc:'teste.html'},
    {title:'Lorem ipsum03', subtitle:'dolor sit amet, consectetur adipiscing elit', authorsId:['igleson','igleson','tales'], date:'26-01-2014', htmlSrc:'teste.html'},
    {title:'Lorem ipsum04', subtitle:'dolor sit amet, consectetur adipiscing elit', authorsId:['igleson','tales','igleson'], date:'26-01-2014', htmlSrc:'teste.html'},
    {title:'Lorem ipsum05', subtitle:'dolor sit amet, consectetur adipiscing elit', authorsId:['igleson','igleson','tales'], date:'26-01-2014', htmlSrc:'teste.html'},
    {title:'Lorem ipsum06', subtitle:'dolor sit amet, consectetur adipiscing elit', authorsId:['igleson','igleson','igleson'], date:'26-01-2014', htmlSrc:'teste.html'},
    {title:'Lorem ipsum07', subtitle:'dolor sit amet, consectetur adipiscing elit', authorsId:['igleson','igleson','igleson'], date:'26-01-2014', htmlSrc:'teste.html'},
    {title:'Lorem ipsum08', subtitle:'dolor sit amet, consectetur adipiscing elit', authorsId:['igleson','igleson','igleson'], date:'26-01-2014', htmlSrc:'teste.html'},
    {title:'Lorem ipsum09', subtitle:'dolor sit amet, consectetur adipiscing elit', authorsId:['igleson','igleson','igleson'], date:'26-01-2014', htmlSrc:'teste.html'},
    {title:'Lorem ipsum10', subtitle:'dolor sit amet, consectetur adipiscing elit', authorsId:['igleson','tales','igleson'], date:'26-01-2014', htmlSrc:'teste.html'},
    {title:'Lorem ipsum11', subtitle:'dolor sit amet, consectetur adipiscing elit', authorsId:['igleson','igleson','igleson'], date:'26-01-2014', htmlSrc:'teste.html'},
    {title:'Lorem ipsum12', subtitle:'dolor sit amet, consectetur adipiscing elit', authorsId:['igleson','igleson','tales'], date:'26-01-2014', htmlSrc:'teste.html'},
    {title:'Lorem ipsum13', subtitle:'dolor sit amet, consectetur adipiscing elit', authorsId:['igleson','tales','igleson'], date:'26-01-2014', htmlSrc:'teste.html'},
    {title:'Lorem ipsum14', subtitle:'dolor sit amet, consectetur adipiscing elit', authorsId:['igleson','tales','igleson'], date:'26-01-2014', htmlSrc:'teste.html'},
    {title:'Lorem ipsum15', subtitle:'dolor sit amet, consectetur adipiscing elit', authorsId:['igleson','igleson','igleson'], date:'26-01-2014', htmlSrc:'teste.html'},
    {title:'Lorem ipsum16', subtitle:'dolor sit amet, consectetur adipiscing elit', authorsId:['igleson','igleson','tales'], date:'26-01-2014', htmlSrc:'teste.html'},
    {title:'Lorem ipsum17', subtitle:'dolor sit amet, consectetur adipiscing elit', authorsId:['igleson','igleson','igleson'], date:'26-01-2014', htmlSrc:'teste.html'},
    {title:'Lorem ipsum18', subtitle:'dolor sit amet, consectetur adipiscing elit', authorsId:['igleson','igleson','igleson'], date:'26-01-2014', htmlSrc:'teste.html'},
    {title:'Lorem ipsum19', subtitle:'dolor sit amet, consectetur adipiscing elit', authorsId:['igleson','igleson','tales'], date:'26-01-2014', htmlSrc:'teste.html'},
    {title:'Lorem ipsum20', subtitle:'dolor sit amet, consectetur adipiscing elit', authorsId:['igleson','igleson','igleson'], date:'26-01-2014', htmlSrc:'teste.html'},
    {title:'Lorem ipsum21', subtitle:'dolor sit amet, consectetur adipiscing elit', authorsId:['igleson','igleson','igleson'], date:'26-01-2014', htmlSrc:'teste.html'},
    {title:'Lorem ipsum22', subtitle:'dolor sit amet, consectetur adipiscing elit', authorsId:['igleson','igleson','tales'], date:'26-01-2014', htmlSrc:'teste.html'},
    {title:'Lorem ipsum23', subtitle:'dolor sit amet, consectetur adipiscing elit', authorsId:['igleson','igleson','igleson'], date:'26-01-2014', htmlSrc:'teste.html'},
    {title:'Lorem ipsum24', subtitle:'dolor sit amet, consectetur adipiscing elit', authorsId:['igleson','igleson','igleson'], date:'26-01-2014', htmlSrc:'teste.html'},
    {title:'Lorem ipsum25', subtitle:'dolor sit amet, consectetur adipiscing elit', authorsId:['igleson','igleson','tales'], date:'26-01-2014', htmlSrc:'teste.html'},
    {title:'Lorem ipsum26', subtitle:'dolor sit amet, consectetur adipiscing elit', authorsId:['igleson','igleson','igleson'], date:'26-01-2014', htmlSrc:'teste.html'},
    {title:'Lorem ipsum27', subtitle:'dolor sit amet, consectetur adipiscing elit', authorsId:['igleson','igleson','igleson'], date:'26-01-2014', htmlSrc:'teste.html'},
    {title:'Lorem ipsum28', subtitle:'dolor sit amet, consectetur adipiscing elit', authorsId:['igleson','igleson','tales'], date:'26-01-2014', htmlSrc:'teste.html'},
    {title:'Lorem ipsum29', subtitle:'dolor sit amet, consectetur adipiscing elit', authorsId:['igleson','igleson','tales'], date:'26-01-2014', htmlSrc:'teste.html'},
    {title:'Lorem ipsum30', subtitle:'dolor sit amet, consectetur adipiscing elit', authorsId:['igleson','igleson','tales'], date:'26-01-2014', htmlSrc:'teste.html'},
    {title:'Lorem ipsum31', subtitle:'dolor sit amet, consectetur adipiscing elit', authorsId:['igleson','igleson','tales'], date:'26-01-2014', htmlSrc:'teste.html'},
    {title:'Lorem ipsum32', subtitle:'dolor sit amet, consectetur adipiscing elit', authorsId:['igleson','igleson','tales'], date:'26-01-2014', htmlSrc:'teste.html'},
    {title:'Lorem ipsum33', subtitle:'dolor sit amet, consectetur adipiscing elit', authorsId:['igleson','igleson','tales'], date:'26-01-2014', htmlSrc:'teste.html'},
    {title:'Lorem ipsum34', subtitle:'dolor sit amet, consectetur adipiscing elit', authorsId:['igleson','igleson','tales'], date:'26-01-2014', htmlSrc:'teste.html'},
    {title:'Lorem ipsum35', subtitle:'dolor sit amet, consectetur adipiscing elit', authorsId:['igleson','igleson','tales'], date:'26-01-2014', htmlSrc:'teste.html'},
    {title:'Lorem ipsum36', subtitle:'dolor sit amet, consectetur adipiscing elit', authorsId:['igleson','igleson','tales'], date:'26-01-2014', htmlSrc:'teste.html'},
    {title:'Lorem ipsum37', subtitle:'dolor sit amet, consectetur adipiscing elit', authorsId:['igleson','igleson','tales'], date:'26-01-2014', htmlSrc:'teste.html'},
    {title:'Lorem ipsum38', subtitle:'dolor sit amet, consectetur adipiscing elit', authorsId:['igleson','igleson','tales'], date:'26-01-2014', htmlSrc:'teste.html'},
    {title:'Lorem ipsum39', subtitle:'dolor sit amet, consectetur adipiscing elit', authorsId:['igleson','igleson','tales'], date:'26-01-2014', htmlSrc:'teste.html'},
    {title:'Lorem ipsum39', subtitle:'dolor sit amet, consectetur adipiscing elit', authorsId:['igleson','igleson','tales'], date:'26-01-2014', htmlSrc:'teste.html'},
    {title:'Lorem ipsum40', subtitle:'dolor sit amet, consectetur adipiscing elit', authorsId:['igleson','igleson','tales'], date:'26-01-2014', htmlSrc:'teste.html'}
];

app.controller('postsController', function ($scope, $stateParams, $location) {

    $scope.data = {}
    $scope.data.authorId = $stateParams.authorId;
    $scope.data.allPosts = posts;

    $scope.data.baseUrl = '/posts/page/';

    if($scope.data.authorId){
        $scope.data.baseUrl = '/posts/' + $scope.data.authorId + '/page/';
        $scope.data.allPosts = $scope.data.allPosts.filter(function(element){
            return $.inArray($scope.data.authorId, element.authorsId) >= 1;
        })
    }

    $scope.interface = {};
    $scope.interface.page = parseInt($stateParams.pageNum) || 1;

    $scope.interface.init = ($scope.interface.page-1)*10;

    $scope.interface.final = $scope.interface.init+10;

    $scope.functions = {}

    $scope.functions.nextPage = function(){
        alert($scope.data.baseUrl + ($scope.interface.page+1))
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

app.controller('postController', function ($scope, $stateParams, $location) {

    $scope.data = {}
    $scope.data.title = $stateParams.title;

    var byTitle = function(element){
        console.log(element.title == $scope.data.title)
        return element.title === $scope.data.title
    }

    $scope.data.post = posts.filter(byTitle)[0];
    //tratar o caso de não existir o post com o título dado.
});