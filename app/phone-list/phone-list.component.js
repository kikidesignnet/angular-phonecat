// Register `phoneList` component, along with its associated controller and template

angular.
  module('phoneList').
    component('phoneList', {
      //Note: The URL is relate to our `index.html` file
      templateUrl: 'phone-list/phone-list.template.html',
      controller: ['Phone', function PhoneListController(Phone) {
        this.phones = Phone.query();
        this.orderProp = 'age';
        }
      ]

    });
