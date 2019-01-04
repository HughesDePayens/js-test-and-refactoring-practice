const expect = require('chai').expect;
const combat = require('../app/combat');

describe('Commands and Colors - Napoleonics Combat', function() {
  describe('Resolve Combat', function() {
    it('Returns the result of combat', function() {
      const data = {
        combatType: 'melee',
        numberOfDice: 4,
        faces: combat.getDieFaces(),
        target: 'Cavalry'
      };

      const combatResult = combat.resolveCombat(data);

      expect(combatResult).to.be.an('object');
    });
  });

  describe('Get Hits', function() {
    it('Returns a number of hits by rolling dice and applying hits depending on the type of combat and target', function() {
      const data = {
        combatType: 'melee',
        numberOfDice: 4,
        faces: combat.getDieFaces(),
        target: 'Cavalry'
      };

      const hits = combat.getHits(data);

      expect(hits).to.be.a('number');
      expect(hits).to.be.least(0);
      expect(hits).to.be.most(data.numberOfDice);
    });
  });
});
