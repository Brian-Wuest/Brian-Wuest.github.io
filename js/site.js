// Contains global Javascript functions and variables

function supports_html5_storage() {
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
        return false;
    }
}

appGlobals = new Object();

// This is a prototype object for monster experience.
function MonsterXP(ChallengeRating, Experience) {
    this.ChallengeRating = ChallengeRating;
    this.Experience = Experience;

    this.Clone = function () {
        var newMonster = new MonsterXP(this.ChallengeRating, this.Experience);
        return newMonster;
    }
}

appGlobals.generateGuid = function () {
    function s4() {
        return Math.floor((1 + Math.random()) * 0x1000).toString(16).substring(1);
    }

    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
};

appGlobals.validateForm = function (formID) {
    var form = document.getElementById(formID);
    var test = true;

    if (form) {
        test = form.checkValidity();

        if (!test) {
            form.reportValidity();
        }

        return test;
    }
}

// Create the challenge rating object.
appGlobals.dnd5thMonsterExperience = [
    new MonsterXP("0", 10),
    new MonsterXP("1/8", 25),
    new MonsterXP("1/4", 50),
    new MonsterXP("1/2", 100),
    new MonsterXP("1", 200),
    new MonsterXP("2", 450),
    new MonsterXP("3", 700),
    new MonsterXP("4", 1100),
    new MonsterXP("5", 1800),
    new MonsterXP("6", 2300),
    new MonsterXP("7", 2900),
    new MonsterXP("8", 3900),
    new MonsterXP("9", 5000),
    new MonsterXP("10", 5900),
    new MonsterXP("11", 7200),
    new MonsterXP("12", 8400),
    new MonsterXP("13", 10000),
    new MonsterXP("14", 11500),
    new MonsterXP("15", 13000),
    new MonsterXP("16", 15000),
    new MonsterXP("17", 18000),
    new MonsterXP("18", 20000),
    new MonsterXP("19", 22000),
    new MonsterXP("20", 25000),
    new MonsterXP("21", 33000),
    new MonsterXP("22", 41000),
    new MonsterXP("23", 50000),
    new MonsterXP("24", 62000),
    new MonsterXP("30", 155000)];