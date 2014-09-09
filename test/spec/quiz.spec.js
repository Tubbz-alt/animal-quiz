'use strict';

var Quiz = require('../../src/quiz.js');

var chai        = require('chai'),
    expect      = chai.expect,
    sinon       = require('sinon'),
    sinon_chai  = require('sinon-chai');

chai.use(sinon_chai);

describe('quiz', function() {
    it('tells the player what the game is about', function() {

        var ui = { say: sinon.spy() };
        var quiz = new Quiz(ui);

        quiz.start();

        expect(ui.say).to.have.been.calledWithExactly('Hello, think of an animal and I\'ll try to guess it. Ready?');
    });
});