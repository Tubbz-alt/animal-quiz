'use strict';

function Quiz(ui) {
    this.start = function() {
        ui.say('Hello, think of an animal and I\'ll try to guess it. Ready?');
    };
}

module.exports = Quiz;