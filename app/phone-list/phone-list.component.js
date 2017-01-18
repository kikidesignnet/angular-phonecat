// Register `phoneList` component, along with its associated controller and template

angular.
  module('phoneList').
    component('phoneList', {
      //Note: The URL is relate to our `index.html` file
      templateUrl: 'phone-list/phone-list.template.html',
      controller: ['$http', function PhoneListController($http) {
        var self = this;
        self.orderProp = 'age';

        $http.get('phones/phones.json').then(function(response) {
          self.phones = response.data.slice(0, 5);
        });

      }
    ]

    });
