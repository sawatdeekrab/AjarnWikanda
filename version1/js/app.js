angular.module('sortResearch', [])

.controller('mainController', function($scope) {
  $scope.sortType     = 'Year'; // set the default sort type
  $scope.sortReverse  = true;  // set the default sort order
  $scope.searchTitle   = '';     // set the default search/filter term

  // create the list of sushi rolls
  $scope.research = [
    { Title: 'Combined heuristic methods for total flow time minimization in permutation flow shops scheduling.', Language:'English',Publishing: 'Conference Proceedings',Author: 'Wikanda Phaphan', Year: 2011, DownloadLink: 'https://drive.google.com/open?id=0B-PcDocGk261Z3YwbFJTUUtNazg' },
    { Title: 'Asymptotic Properties and Parameter Estimation Based on Two-Sided Crack Distribution.', Language:'English',Publishing: 'Journals', Author: 'Wikanda Phaphan', Year: 2016, DownloadLink: '#'},
    { Title: 'Modifying Heuristic Methods to Minimize Total Flow Time in Permutation Flow Shop.', Language:'Thai',Publishing: 'Conference Proceedings', Author: 'Wikanda Phaphan', Year: 2016, DownloadLink: 'https://drive.google.com/open?id=0B-PcDocGk261SUlFQkNjR05WSDQ'},
    { Title: 'A Modified Heuristic Algorithm for Total Flow Time Objecctive in Permutation Flow Shops Scheduling.', Language:'Thai',Publishing: 'Conference Proceedings', Author: 'Wikanda Phaphan', Year: 2016, DownloadLink: 'https://drive.google.com/open?id=0B-PcDocGk261UHlreTNlMVFidGM'},
    { Title: 'Point Estimation of Birnbuam-Saunders Distribution Using EM-Algorithm.', Language:'English',Publishing: 'Journals', Author: 'Wikanda Phaphan', Year: 2017, DownloadLink: 'https://drive.google.com/open?id=0B-PcDocGk261dFM3N3FOUUE1cGs'},
    { Title: 'Generating Random Variables for a New Two-parameter Crack Distribution by the Acceptance-Rejection Method.', Language:'Thai',Publishing: 'Conference Proceedings', Author: 'Wikanda Phaphan', Year: 2017, DownloadLink: 'https://drive.google.com/open?id=0B-PcDocGk261Q3hnYnAyanJEQkU'},
    { Title: 'The Generation of Random Variables Having Mixture Generalized Gamma Distribution by the Acceptance-Rejection Method.', Language:'Thai',Publishing: 'Conference Proceedings', Author: 'Wikanda Phaphan', Year: 2017, DownloadLink: 'https://drive.google.com/open?id=0B-PcDocGk261cVYyNUh1dmJVMHc'}
  ];

});
