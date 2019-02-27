const dieRoller = require('./die-roller');

exports.resolveCombat = function (data) {
  const dieRolls = dieRoller.rollDice(data.numberOfDice, data.faces);

  return {
    hits: exports.getHits(dieRolls, data),
    retreats: exports.getRetreats(dieRolls)
  };
};

exports.getHits = function (dieRolls, data) {
  return dieRolls.map((dieRoll) => exports.evaluateHit(dieRoll, data.combatType, data.target))
    .filter((isHit) => isHit).length;
};

exports.evaluateHit = function (face, type, target) {
  return exports.isMeleeHit(type, face) || exports.isMatchedFace(face, target);
};

exports.isMeleeHit = function (type, face) {
  return type === 'melee' && face === 'Saber';
};

exports.isMatchedFace = function (face, target) {
  return face === target;
};

exports.getRetreats = function (dieRolls) {
  return dieRolls.filter((dieRoll) => dieRoll === 'Flag').length;
};

exports.getDieFaces = function () {
  return ['Infantry', 'Infantry', 'Cavalry', 'Artillery', 'Saber', 'Flag'];
};
