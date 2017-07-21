(function() {

  var Video = function(audio_url, audioCtx) {

    this._callbacks = [];
    this.domElement = document.createElement('video');

    this.domElement.crossOrigin = 'anonymous';
    this.domElement.setAttribute('webkit-playsinline', 'webkit-playsinline');
    this.domElement.setAttribute('playsinline', 'playsinline');



    //console.log("this is faking");
    //console.log( this.faking );

    if (!this.faking ) {
      console.log("check this")
      this.initialize();
      return this;
    }


   // console.log( MediaController);

    //print("videos");
    this.domElement.muted = true;
    xhr.getBuffer(Sound.ctx, audio_url, _.bind(function(buffer) {

     // console.log("heeTYTS");
      this.audio = new Sound(buffer,function(){},audioCtx);
      this.audio.volume = 1;
      this.updateAudio();
      this.initialize();



    }, this));

  };

  Video.HAVE_NOTHING = Video.prototype.HAVE_NOTHING = 0;
  Video.HAVE_META_DATA = Video.prototype.HAVE_META_DATA = 1;
  Video.HAVE_CURRENT_DATA = Video.prototype.HAVE_CURRENT_DATA = 2;
  Video.HAVE_FUTURE_DATA = Video.prototype.HAVE_FUTURE_DATA = 3;
  Video.HAVE_ENOUGH_DATA = Video.prototype.HAVE_ENOUGH_DATA = 4;

  Video.Performance = (window.performance && window.performance.now ? window.performance : Date);

  Video.Events = {
    Enable: ['canplaythrough'],
    Disable: ['pause', 'ended', 'seeking', 'seeked', 'emptied', 'ended', 'abort', 'error']
  };

  Video.prototype._ready = false;
  Video.prototype.faking = has.iOS;
  Video.prototype.scrubbing = false;
  Video.prototype._readyState = 0;
  Video.prototype.frameRate = 29.97;
  Video.prototype.loop = _.identity;

  /**
   * Clock related variables
   */

  Video.prototype.elapsed = 0;

  /**
   * Replicated methods from `<video />`.
   */

  Video.prototype.ready = function(func) {
    if (this._ready) {
      func();
      return this;
    }
    this._callbacks.push(func);
    return this;
  };

  Video.prototype.initialize = function() {
    this._ready = true;
    for (var i = 0; i < this._callbacks.length; i++) {
      this._callbacks[i]();
    }
    this._callbacks.length = 0;
    return this;
  };

  Video.prototype.appendChild = function(source) {

    this.domElement.appendChild(source);
    this.load();
    return this;

  };

  Video.prototype.addEventListener = function(name, func, bubble) {
    this.domElement.addEventListener(name, func, !!bubble);
    return this;
  };

  Video.prototype.removeEventListener = function(name, func) {
    this.domElement.removeEventListener(name, func);
    return this;
  };

  Video.prototype.load = function() {

    this.domElement.load();
    return this;

  };

  Video.prototype.play = function() {

    if (!this.faking) {
      this.domElement.play();
      return this;
    }

    this.scrubbing = true;
    this.audio.play(this.currentTime);
    // this.load();

    return this;

  };

  Video.prototype.pause = function() {

    if (!this.faking) {
      this.domElement.pause();
      return this;
    }

    /**
     * TODO: Create shim version of `pause` event to work with iOS.
     */
    this.scrubbing = false;
    this.audio.pause();

    return this;

  };

  /**
   * To be called on RAF.
   */
  Video.prototype.update = function(delta) {

    if (!(this.faking && this.scrubbing && this.readyState > Video.HAVE_FUTURE_DATA)) {
      return this;
    }


  //  console.log( this.audio.currentTime );
    //console.log( this.audio._offset );
    /**
     * TODO: Make based on `this.audio`
     */
    /*this.elapsed += delta;

    if (this.elapsed / 1000 > ((1000 / this.frameRate) / 1000)) {
      this.domElement.currentTime += this.elapsed / 1000;  // TODO: Need to add audio slaving.
      this.elapsed = 0;

    }*/

    //function playAtTime(t){

 
    //console.log( this.audio.currentTime );
      //}
    this.domElement.currentTime = this.audio.currentTime;

   // console.log( this.elapsed );
    return this;

  };

  Video.prototype.updateAudio = function() {
    if (!this.audio) {
      return this;
    }
    var evt = this.paused ? 'pause' : 'play';
    this.audio[evt](this.currentTime);
    return this;
  };

  /**
   * Getters / Setters
   */

  Object.defineProperty(Video.prototype, 'src', {

    get: function() {
      return this.domElement.src;
    },

    set: function(src) {
      this.domElement.src = src;
    }

  });
  Object.defineProperty(Video.prototype, 'currentTime', {

    get: function() {
      return this.domElement.currentTime;
    },

    set: function(t) {
      this.domElement.currentTime = t;
    }

  });

  Object.defineProperty(Video.prototype, 'volume', {

    get: function() {
      return this.domElement.volume;
    },

    set: function(v) {
      this.domElement.volume = v;
    }

  });

  /**
   * Read Only Properties
   */

  Object.defineProperty(Video.prototype, 'duration', {
    get: function() {
      return this.domElement.duration;
    }
  });

  Object.defineProperty(Video.prototype, 'paused', {
    get: function() {
      return this.faking ? !this.scrubbing : this.domElement.paused;
    }
  });

  Object.defineProperty(Video.prototype, 'buffered', {
    get: function() {
      return this.domElement.buffered;
    }
  });

  Object.defineProperty(Video.prototype, 'readyState', {
    get: function() {
      return this.domElement.readyState;
    }
  });


  this.Video = Video;

})();