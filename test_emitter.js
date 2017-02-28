var Emitter = require('./lib/Emitter.js');
var emitter = new Emitter();

var callback = function() {
  console.log('first callback');
};

var callback2 = function() {
  console.log('second callback');
};

emitter.on('event', callback);
emitter.on('event', callback2);
emitter.on('event_other', callback).on('event_other', callback2);


emitter.emit('event');
emitter.emit('event_other');

emitter.removeListener('event', callback);
emitter.emit('event');

emitter.removeListener('event_other', callback2);
emitter.emit('event_other');

emitter.removeAllListeners('event');
emitter.emit('event');
emitter.emit('event_other');