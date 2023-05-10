(function () {
'use strict';

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['UserService', 'MenuService'];
function MyInfoController(UserService, MenuService) {
  var ctrl = this;

  ctrl.userInfo = UserService.getUserInfo();

  if (ctrl.userInfo == null) {
    ctrl.user = false;
  }
  else {
    ctrl.user = true;
  } 

  if (ctrl.userInfo) {
    MenuService.getOneMenuItem(ctrl.userInfo.dish)
    .then(function (menuItemInfo) {
      ctrl.menuItemInfo = menuItemInfo;
    });
  };
}

})();