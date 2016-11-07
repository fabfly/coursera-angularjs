(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyController (ShoppingListCheckOffService) {
    var vm = this;
    var service = ShoppingListCheckOffService;

    vm.itemsToBuy = service.getItemsToBuy();

    vm.buyItem = function(itemIndex){
        service.buyItem(itemIndex);
    }
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController (ShoppingListCheckOffService) {
    var vm = this;
    var service = ShoppingListCheckOffService;

    vm.boughtItems = service.getBoughtItems();

  }

  function ShoppingListCheckOffService (){
    var service = this;

    var toBuy = [{ name: "cookies", quantity: 10 },
                  { name: "almond milk", quantity: 2 },
                  { name: "peppers", quantity: 3 },
                  { name: "smart phone", quantity: 1 },
                  { name: "broom", quantity: 1 }];
    var bought = [];

    service.getItemsToBuy = function(){
      return toBuy;
    }

    service.getBoughtItems = function(){
      return bought;
    }

    service.buyItem = function (itemIndex) {
      bought.push(toBuy[itemIndex]);
      toBuy.splice(itemIndex,1);
    }
  }
})();
