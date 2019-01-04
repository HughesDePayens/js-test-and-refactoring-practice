const dieRoller = require('./die-roller');

exports.resolveCombat = function(data) {
    return {
        hits: exports.getHits(data),
    };
}

exports.getHits = function(data) {
    return dieRoller.rollDice(data.numberOfDice, data.faces).map((dieRoll) => {
        return exports.evaluateHit(dieRoll, data.combatType, data.target);
    }).filter((isHit) => isHit).length;
}

exports.evaluateHit = function (face, type, target) {
    return (type === 'melee' && face === 'Saber' || face === target) ? true : false;
}

exports.getDieFaces = function() {
    return ['Infantry', 'Infantry', 'Cavalry', 'Artillery', 'Saber', 'Flag'];
}
