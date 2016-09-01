app.controller('CreateheroController', ['$scope', '$http', function ($scope, $http) {
  $scope.heroes = [];
  $scope.newHero = {};
  $scope.superPowerSelected = '';
  $scope.displayHeroId = '';

  $scope.superPowers = [
    {type: 'invisibility', display: 'Invisibility'},
    {type: 'flight', display: 'Flight'},
    {type: 'super_speed', display: 'Super Speed'},
    {type: 'heat_vision', display: 'Heat Vision'},
    {type: 'super_strength', display: 'Super Strength'},
    {type: 'accelerated_healing', display: 'Accelerated Healing'},
    {type: 'power_blast', display: 'Power Blast'},
    {type: 'animal_affinity', display: 'Animal Affinity'}
  ];

  $scope.selectAction = function() {
    console.log('selectedSuperPower: ', $scope.selectedSuperPower.display);
    $scope.superPowerSelected = $scope.selectedSuperPower.display;
  }

  // Scoped functions
  $scope.submitNewHero = function () {
    var data = $scope.newHero;
    data.power_name = $scope.superPowerSelected;
    console.log('data: ', data);
    $http.post('/heroes', data)
      .then(function () {
        console.log('POST /heroes ', data);
        alert('Super Hero has been added');
      });
  }

}]);
