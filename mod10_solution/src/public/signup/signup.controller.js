(function () {
'use strict';

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['MenuService', 'UserService'];
function SignUpController(MenuService, UserService) {
    var reg = this;
    //reg.user = {};
    reg.favorite = false;
    reg.completed = false;

    reg.menuItem = function (number) {
        reg.data = false;
        return MenuService.getOneMenuItem(number)
        .then(function (data) {
            if (!data){ 
                reg.favorite = true;
            };
            return data;
        });
    };

    reg.submit = function () {
        reg.menuItem(reg.user.dish).then( function(data){
            if (data) {
                UserService.saveUserInfo(reg.user);
                reg.completed = true;
            };
        });
    };
};

})();
