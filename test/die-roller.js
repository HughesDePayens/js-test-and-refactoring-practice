const expect = require('chai').expect;
const dieRoller = require('../app/die-roller');

describe('Die Roller App', function() {
  describe('Roll A Die', function() {
    it('rolls a die with the provided face values and returns one face result', function() {
      const faces = [1, 2, 3, 4, 5, 6];
      const dieRoll = dieRoller.rollDie(faces);

      expect(faces).to.include(dieRoll);
    });
  });

  describe('Roll Dice', function() {
    it('rolls a requested number of dice with provided face values and returns an array of face results', function() {
      const faces = ['Infantry', 'Infantry', 'Cavalry', 'Artillery', 'Saber', 'Flag'];
      const numberOfDice = 5;
      const dieResults = dieRoller.rollDice(numberOfDice, faces);

      expect(dieResults).to.have.lengthOf(numberOfDice);

      dieResults.forEach(function(dieRoll) {
        expect(faces).to.include(dieRoll);
      });
    });
  });
});
