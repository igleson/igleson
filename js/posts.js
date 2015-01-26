function postsController($scope) {

    $scope.data = {}
    $scope.data.allPosts =[
        {title:'Lorem ipsum1', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'Igleson', date:'26-01-2014'},
        {title:'Lorem ipsum2', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
        {title:'Lorem ipsum3', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
        {title:'Lorem ipsum4', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
        {title:'Lorem ipsum5', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
        {title:'Lorem ipsum6', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
        {title:'Lorem ipsum7', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
        {title:'Lorem ipsum8', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
        {title:'Lorem ipsum9', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
        {title:'Lorem ipsum10', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
        {title:'Lorem ipsum11', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
        {title:'Lorem ipsum12', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
        {title:'Lorem ipsum13', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
        {title:'Lorem ipsum14', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
        {title:'Lorem ipsum15', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
        {title:'Lorem ipsum16', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
        {title:'Lorem ipsum17', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
        {title:'Lorem ipsum18', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
        {title:'Lorem ipsum19', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
        {title:'Lorem ipsum20', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
        {title:'Lorem ipsum21', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
        {title:'Lorem ipsum22', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
        {title:'Lorem ipsum23', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
        {title:'Lorem ipsum24', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
        {title:'Lorem ipsum25', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
        {title:'Lorem ipsum26', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
        {title:'Lorem ipsum27', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
        {title:'Lorem ipsum28', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
        {title:'Lorem ipsum29', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
        {title:'Lorem ipsum30', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
        {title:'Lorem ipsum31', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
        {title:'Lorem ipsum32', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
        {title:'Lorem ipsum33', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
        {title:'Lorem ipsum34', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
        {title:'Lorem ipsum35', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
        {title:'Lorem ipsum36', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
        {title:'Lorem ipsum37', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
        {title:'Lorem ipsum38', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
        {title:'Lorem ipsum39', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'}
    ];

    $scope.interface = {};
    $scope.interface.page = 0;

    $scope.func ={}

    $scope.func.postForPage = function(){
        var init = $scope.interface.page*10;
        var final = init + 10;

        return $scope.data.allPosts.slice(init, final)
    }
}
