const expect = require('chai').expect;
const combat = require('../app/combat');

describe('Commands and Colors - Napoleonics Combat', function() {
  describe('Resolve Combat', function() {
    it('Returns the result of combat', function() {
      const data = {
        combatType: 'melee',
        numberOfDice: 4,
        faces: combat.getDieFaces(),
        target: 'Cavalry',
      };

      const combatResult = combat.resolveCombat(data);

      expect(combatResult).to.be.an('object');
      expect(combatResult.hits).to.be.a('number');
    });
  });

  describe('Get Hits', function() {
    it('Returns a number of hits by rolling dice and applying hits depending on the type of combat and target', function() {
      const data = {
        combatType: 'melee',
        numberOfDice: 4,
        faces: combat.getDieFaces(),
        target: 'Cavalry',
      };

      const hits = combat.getHits(data);

      expect(hits).to.be.a('number');
      expect(hits).to.be.least(0);
      expect(hits).to.be.most(data.numberOfDice);
    });
  });

  describe('Evaluate Hit', function () {
    it('Returns true when the type of combat is "melee" and the face on the die is "Saber"', function () {
      expect(combat.evaluateHit('Saber', 'melee', 'Infantry')).to.be.true;
    });

    it('Returns true if the die face matches the type of target.', function () {
      expect(combat.evaluateHit('Infantry', 'ranged', 'Infantry')).to.be.true;
    });

    it('Returns false when the type of combat is "melee" and the face on the die is not "Saber", and does not match the target', function () {
      expect(combat.evaluateHit('Cavalry', 'melee', 'Infantry')).to.be.false;
    });

    it('Returns false if the die face does not match the type of target and the combat type is not "melee"', function () {
      expect(combat.evaluateHit('Cavalry', 'ranged', 'Infantry')).to.be.false;
    });
  });
});
