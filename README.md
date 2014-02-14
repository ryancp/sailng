# Sailng #

Sailng is a boilerplate that gives you a great foundation to start building realtime, Angular-based, single page applications.

It demonstrates how to create simple chat messages, update the page and delete a message all without a refresh.

More features are planned like i18n and login with Passport, plus I want to modify the Gruntfile to run jshint and karma test runner on file saves.

## To get up and running ##
You will need to have Sails v0.10 installed on your machine and then clone the repo and run

    $ npm install
    $ cd assets
    $ bower install

As of Feb, 14, 2014, you will need to manually download a copy of angular-ui-router.js and save it to assets/bower_components/angular-ui-router/release.
This is a [known issue](https://github.com/angular-ui/ui-router/issues/846) with angular-ui-router which hopefully will be resolved soon.

    $ <path_to_your_sails_0.10_bin/sails.js> lift

Check it out at [http://localhost:1337](http://localhost:1337)

## Screenshots ##

![Messages](https://github.com/ryancp/sailng/raw/master/screenshots/sailng-messages.png)