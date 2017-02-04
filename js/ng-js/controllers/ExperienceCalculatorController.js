(function () {
    // Get the application.
    var MyApp = angular.module('MyApp')

    if (MyApp) {
        MyApp.controller("ExperienceCalculatorController", function ($scope) {
            // The template monster.
            $scope.templateMonster = appGlobals.dnd5thMonsterExperience[0];

            // The current monsters. This will be updated as the user adds/removes mosnters.
            $scope.currentMonsters = [];
            $scope.monsterChallengeRatings = appGlobals.dnd5thMonsterExperience;

            // 4 is the typical D&D player size.
            $scope.playerCount = 4;
            $scope.playerXp = 0;

            $scope.removeMonster = function (Monster) {
                var indexToRemove = -1;
                for (var i = 0; i < $scope.currentMonsters.length; i++) {
                    if ($scope.currentMonsters[i].MonsterID === Monster.MonsterID) {
                        indexToRemove = i;
                        break;
                    }
                }

                if (indexToRemove >= 0) {
                    $scope.currentMonsters.splice(indexToRemove, 1);
                }
            };

            $scope.addMonster = function () {
                // Add the template monster as the base.
                $scope.currentMonsters.push({
                    MonsterID: appGlobals.generateGuid(),
                    MonsterInfo: $scope.templateMonster,
                    MonsterCount: 0
                });
            };

            $scope.updatePlayersXP = function (formID) {
                // Validate the changed form before continuing.
                if (formID && !appGlobals.validateForm(formID)) {
                    return;
                }

                // Calculate the amount of xp for these players and the number of monsters and their challenge rating.
                if (!$scope.playerCount || $scope.playerCount === 0) {
                    $scope.playerXp = 0;
                    return;
                }

                var totalXP = 0;

                // Accumulate the experience.
                for (var i = 0; i < $scope.currentMonsters.length; i++) {
                    var monster = $scope.currentMonsters[i];
                    totalXP = totalXP + (monster.MonsterCount * monster.MonsterInfo.Experience);
                }

                $scope.playerXp = totalXP / $scope.playerCount;
            };

            // Add the template monster as the first monster in the list.
            $scope.addMonster();
        });
    }
})();