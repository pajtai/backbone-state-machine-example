/*global require*/
'use strict';

// Require.js allows us to configure shortcut alias
require.config({
    // The shim config allows us to configure dependencies for
    // scripts that do not call define() to register a module
    shim: {
        underscore: {
            exports: '_'
        },
        backbone: {
            deps: [
                'underscore',
                'jquery'
            ],
            exports: 'Backbone'
        },
        bbsm: {
            deps: [
                'backbone'
            ]
        }
    },
    paths: {
        squire: '../../app/components/Squire.js/src/Squire',
        jquery: '../../app/components/jquery/jquery',
        underscore: '../../app/components/underscore/underscore',
        backbone: '../../app/components/backbone/backbone',
        bbsm: '../../app/components/backbone-state-machine/app/src/bbsm',
        text: '../../app/components/requirejs-text/text',
        elevator: '../../app/src/views/elevator',
        floor: '../../app/src/views/floor',
        building: '../../app/src/views/building',
        buttonPressedCollection: '../../app/src/models/buttonPressedCollection'
    }
});

require([
    'squire'
], function (Squire) {
    var injector = new Squire();
    injector.require(['elevator'], function(Elevator) {
            new Elevator();
        },
        function(err) {
            console.log("Elevator error.")
        });
});
