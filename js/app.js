angular.module('sortResearch', [])

.controller('mainController', function($scope) {
  $scope.sortType     = 'Year'; // set the default sort type
  $scope.sortReverse  = false;  // set the default sort order
  $scope.searchTitle   = '';     // set the default search/filter term

  // create the list of sushi rolls
  $scope.research = [
    { Title: 'Combined heuristic methods for total flow time minimization in permutation flow shops scheduling.', Author: 'Wikanda Phaphan', Year: 2011, DownloadLink: '/files/paper/COMBINDED HEURISTIC MEHODS FOR TOTAL FLOW TIME MINIMIZATION IN PERMUTATION FLOW SHOPS SCHEDULING.pdf' },
    { Title: 'Asymptotic Properties and Parameter Estimation Based on Two-Sided Crack Distribution.', Author: 'Wikanda Phaphan', Year: 2016, DownloadLink: '#'}
  ];

});
