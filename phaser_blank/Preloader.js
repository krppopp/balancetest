BasicGame.Preloader = function (game) {

	this.background = null;
	this.preloadBar = null;

	this.ready = false;

};

BasicGame.Preloader.prototype = {

	preload: function () {
        this.load.image('pink', 'Assets/pink.png');
        this.load.image('blue', 'Assets/blue.png');
        this.load.image('blue_alert', 'Assets/alert_blue.png');
        this.load.image('pink_alert', 'assets/alert_pink.png');
	},

	create: function () {

	},

	update: function () {
        this.state.start('Main');
	}

};