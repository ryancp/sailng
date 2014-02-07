/**
 * example.js
 *
 * This file contains some example browser-side JavaScript for connecting
 * to your Sails backend using Socket.io.
 *
 * It is designed to get you up and running fast, but it's just an example.
 * Feel free to change none, some, or ALL of this file to fit your needs!
 *
 * For an annotated version of this example, see:
 *   *-> https://gist.github.com/mikermcneil/8465536
 */


// Immediately start connecting
socket = io.connect();

typeof console !== 'undefined' &&
console.log('Connecting Socket.io to Sails.js...');

// Attach a listener which fires when a connection is established:
socket.on('connect', function socketConnected() {

  typeof console !== 'undefined' &&
  console.log(
    'Socket is now connected and globally accessible as `socket`.\n' +
    'e.g. to send a GET request to Sails via Socket.io, try: \n' +
    '`socket.get("/foo", function (response) { console.log(response); })`'
  );

  // Attach a listener which fires every time the server publishes a debug message:
  socket.on('debug', function newDebugMessageFromSails ( message ) {

    typeof console !== 'undefined' &&
    console.log('New debug message received from Sails ::\n', message);

  });

});
