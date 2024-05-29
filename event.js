/*An event is an action that can be detected by the program. It can be triggered by the user or the system.
In Node.js, events are used to trigger functions when certain actions occur.
The EventEmitter class is used to handle events in Node.js.
The EventEmitter class is defined and exported by the events module.
To include the events module, use the require() method*/

var events = require('events');
//The EventEmitter class is used to create event handlers.
var eventEmitter = new events.EventEmitter();
//The EventEmitter object has a method called on() that is used to bind functions to events.
var myEventHandler = function () {
console.log('Smoke alarm triggered!');
}
//Assign the event handler to an event:
eventEmitter.on('alarm', myEventHandler);

//Fire the 'alarm' event using the emit() method:
eventEmitter.emit('alarm');