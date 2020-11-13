angular.module("myApp",["ui.router",'ngMessages','ngMaterial'])

    .config(function ($stateProvider,$urlRouterProvider) {

        $stateProvider
            .state("app",{
                url:"/app",
                views:{
                    main:{
                        templateUrl:"templates/main.html",
                        controller:"appCtrl"
                    }
                }
            })
            .state("app.home",{
                url:"/home",
                views:{
                    sub:{
                        templateUrl:"templates/home.html",
                        controller:"homeCtrl"
                    }
                }
            })
            .state("app.courses",{
                url:"/courses",
                views:{
                    sub:{
                        templateUrl:"templates/courses.html",
                        controller:"coursesCtrl"
                    }
                }
            })
            .state("app.about",{
                url:"/about",
                views:{
                    sub:{
                        templateUrl:"templates/about.html",
                        controller:"aboutCtrl"
                    }
                }
            })
            .state("app.contact",{
                url:"/contact",
                views:{
                    sub:{
                        templateUrl:"templates/contact.html",
                        controller:"contactCtrl"
                    }
                }
            })

        $urlRouterProvider.otherwise("/app/home")
    });

