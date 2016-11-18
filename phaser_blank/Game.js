BasicGame.Game = function (game) {

    //  When a State is added to Phaser it automatically has the following properties set on it, even if they already exist:

    this.game;      //  a reference to the currently running game (Phaser.Game)
    this.add;       //  used to add sprites, text, groups, etc (Phaser.GameObjectFactory)
    this.camera;    //  a reference to the game camera (Phaser.Camera)
    this.cache;     //  the game cache (Phaser.Cache)
    this.input;     //  the global input manager. You can access this.input.keyboard, this.input.mouse, as well from it. (Phaser.Input)
    this.load;      //  for preloading assets (Phaser.Loader)
    this.math;      //  lots of useful common math operations (Phaser.Math)
    this.sound;     //  the sound manager - add a sound, play one, set-up markers, etc (Phaser.SoundManager)
    this.stage;     //  the game stage (Phaser.Stage)
    this.time;      //  the clock (Phaser.Time)
    this.tweens;    //  the tween manager (Phaser.TweenManager)
    this.state;     //  the state manager (Phaser.StateManager)
    this.world;     //  the game world (Phaser.World)
    this.particles; //  the particle manager (Phaser.Particles)
    this.rnd;       //  the repeatable random number generator (Phaser.RandomDataGenerator)

};

BasicGame.Game.prototype = {

    create: function () {
        var game = this;
        game.stage.backgroundColor = "#fff";
        game.pinkOrb = game.add.sprite(game.world.width*.1, game.world.height*.5, 'pink');
        game.pinkOrb.anchor.setTo(.5,.5);
        game.pinkTween = game.add.tween(game.pinkOrb.scale).to({x: 1.1, y: 1.1}, 3000, "Linear", true, 0, -1);
        game.pinkTween.yoyo(true,500);
        game.blueOrb = game.add.sprite(game.world.width*.9, game.world.height*.5, 'blue');
        game.blueOrb.anchor.setTo(.5,.5);
        game.blueTween = game.add.tween(game.blueOrb.scale).to({x: 1.1, y: 1.1}, 3000, "Linear", true, 0 , -1);
        game.blueTween.yoyo(true,20);
        game.pinkOrb.inputEnabled = true;
        game.blueOrb.inputEnabled = true;
        game.pinkOrb.events.onInputDown.add(function(sprite){
            game.lastPinkX = game.pinkOrb.scale.x;
            game.lastPinkY = game.pinkOrb.scale.y;
            game.pinkTween.pause();
            game.add.tween(sprite.scale).to({x:.8,y:.8},500,"Linear", true);
            sprite.loadTexture("pink_alert");
        })
        game.blueOrb.events.onInputDown.add(function(sprite){
            game.blueTween.pause();
            game.add.tween(sprite.scale).to({x:.8,y:.8},500,"Linear", true);
            sprite.loadTexture("blue_alert");
        })
        game.pinkOrb.events.onInputUp.add(function(sprite){
            game.add.tween(sprite.scale).to({x:game.lastPinkX,y:game.lastPinkY},1000,"Linear", true);
            game.pinkTween.resume();
            sprite.loadTexture("pink");
        })
        game.blueOrb.events.onInputUp.add(function(sprite){
            game.add.tween(sprite.scale).to({x:1,y:1},500,"Linear",true);
            game.blueTween.resume();
            sprite.loadTexture("blue");
        })
    },

    update: function () {


    },
    

};