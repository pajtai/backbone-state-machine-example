define([
    'backbone',
    'text!../templates/floor.html'
], function(Backbone, floorTemplate) {
    var UP_PRESSED = "upPressed",
        DOWN_PRESSED = "downPressed",
        BUTTONS_PRESSED = "buttonPressed",
        Floor = Backbone.View.extend({
        initialize: initialize,
        render: render,
        upPressed: upPressed,
        downPressed: downPressed,
        buttonUpdate: buttonUpdate,
        template: _.template(floorTemplate),
        events: {
            "click .upButton": UP_PRESSED,
            "click .downButton": DOWN_PRESSED
        },
        model: Backbone.Model
    });

    // TODO: config object
    Floor.prototype.masks =  {
        UP_MASK: 2,
        DOWN_MASK: 1
    };

    function initialize() {
        this.floor = this.options.floor;
        this.buttons = this.options.buttons;
        this.model = new this.model({
            buttonsPressed: 0
        });
        this.listenTo(this.model, "change:" + BUTTONS_PRESSED, this.buttonUpdate);
    }

    function render() {
        this.$el.html(this.template({
            floor: this.floor,
            buttons: this.buttons,
            masks: this.masks
        }));
    }

    function upPressed(event) {
        $(event.currentTarget).addClass("disabled");
        _buttonPressed.call(this, this.masks.UP_MASK);
    }

    function downPressed(event) {
        $(event.currentTarget).addClass("disabled");
        _buttonPressed.call(this, this.masks.DOWN_MASK);
    }

    // Private methods. These must be supplied with a context.
    function _buttonPressed(mask) {
        this.model.set(BUTTONS_PRESSED, this.model.get(BUTTONS_PRESSED) | mask);
    }

    function buttonUpdate(model, mask) {

        console.log("udpate " + this.floor);
        console.log("mask: " + mask);

        if (mask & this.masks.UP_MASK) {
            console.log("up enabled");
        }

        if (mask & this.masks.DOWN_MASK) {
            console.log("down enabled");
        }
    }

    return Floor;
});