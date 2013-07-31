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
        elevator: '../../app/views/elevator',
        floor: '../../app/views/floor',
        building: '../../app/views/building',
        buttonPressedCollection: '../../appp/models/buttonPressedCollection'
    }
});

require([
    'squire'
], function (Squire) {
});
