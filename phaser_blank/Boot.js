var BasicGame = {};

BasicGame.Boot = function (game) {

};

BasicGame.Boot.prototype = {

    init: function () {

        this.input.maxPointers = 2;
        this.stage.disableVisibilityChange = true;
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        if (!this.game.device.desktop) {
           // this.scale.forceOrientation(true, false);
            this.scale.setResizeCallback(this.gameResized, this);
            this.scale.enterIncorrectOrientation.add(this.enterIncorrectOrientation, this);
            this.scale.leaveIncorrectOrientation.add(this.leaveIncorrectOrientation, this);
        } 

    },

    preload: function () {


    },

    create: function () {

        this.state.start('Preloader');

    },
    enterIncorrectOrientation: function () {
        BasicGame.orientated = false;
        document.getElementById('orientation').style.display = 'none';
    }
    , leaveIncorrectOrientation: function () {
        BasicGame.orientated = true;
        document.getElementById('orientation').style.display = 'none';
    }

};