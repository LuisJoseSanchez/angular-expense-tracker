angular.module('app').constant('FirebaseUrl', 'http://lj-expense-tracker.firebaseio.com/')
  .service('rootRef', ['FirebaseUrl', Firebase]);