var Game = require('../a').Game;

describe("game", function() {
    it("checks if move returns true", function() {
        var game = Game(); 
        expect(game.move()).toBe(true);
    });
});
