const dieRoller = require('./die-roller');

exports.resolveCombat = function(data) {
  return {
    hits: exports.getHits(data),
  };
};

exports.getHits = function(data) {
  return dieRoller.rollDice(data.numberOfDice, data.faces).map((dieRoll) => {
    return exports.evaluateHit(dieRoll, data.combatType, data.target);
  }).filter((isHit) => isHit).length;
};

exports.evaluateHit = function(face, type, target) {
  return exports.isMeleeHit(type, face) || exports.isMatchedFace(face, target);
};

exports.isMeleeHit = function (type, face) {
  return type === 'melee' && face === 'Saber';
}

exports.isMatchedFace = function (face, target) {
  return face === target;
}

exports.getDieFaces = function() {
  return ['Infantry', 'Infantry', 'Cavalry', 'Artillery', 'Saber', 'Flag'];
};
