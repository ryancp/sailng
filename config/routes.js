/**
 * Routes
 *
 * Your routes map URLs to views and controllers.
 * 
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.) 
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg` 
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `config/404.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or 
 * CoffeeScript for the front-end.
 *
 * For more information on routes, check out:
 * http://sailsjs.org/#documentation
 */

module.exports.routes = {


  // Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, etc. depending on your
  // default view engine) your home page.
  // 
  // (Alternatively, remove this and add an `index.html` file in your `assets` directory)
  'get /': {
    controller: 'HomeController',
    action: 'index'
  },

  'get /login': 'AuthController.login',
  'get /logout': 'AuthController.logout',
  'get /register': 'AuthController.register',

  'post /auth/local': 'AuthController.callback',
  'post /auth/local/:action': 'AuthController.callback',


  // Custom routes here...

    /**
     * User routes
     */
    'get /api/user': 'UserController.getAll',
    'get /api/user/:id': 'UserController.getOne',
    'post /api/user': 'UserController.create',

  /**
     * Message routes
     *
     */
    'get /api/message': 'MessageController.getAll',
    'get /api/message/:id': 'MessageController.getOne',
    'post /api/message': 'MessageController.create',
    'delete /api/message/:id': 'MessageController.destroy',


  // If a request to a URL doesn't match any of the custom routes above, it is matched 
  // against Sails route blueprints.  See `config/blueprints.js` for configuration options
  // and examples.

  'get /home': 'HomeController.index',
  'get /about': 'HomeController.index',
  'get /messages': 'HomeController.index'

};
