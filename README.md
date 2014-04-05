# Sailng #

Sailng is a boilerplate that gives you a great foundation to start building realtime, Angular-based, single page applications.

It demonstrates how to create simple chat messages, update the page and delete a message all without a refresh. Go ahead and sign in with a couple different users in multiple browsers to see how it all works.

Current features include: a modular angular js architecture and file structure, an example of how to include services and directives from bower (lodash, angular-moment), and authentication using PassportJs.

More features are planned like i18n, plus I might modify the Gruntfile to run jshint and karma test runner on file saves.

## To get up and running ##
You will need to have Sails v0.10 installed on your machine (sudo npm install sails@beta -g) and then clone the repo, cd into the project directory and run

    $ npm install (if you are on Windows using Vagrant, be sure to: npm install --no-bin-links)
    $ cd assets
    $ bower install
    $ cd ../
    $ sails lift

Check it out at [http://localhost:1337](http://localhost:1337)

## Screenshots ##

![Messages](https://github.com/ryancp/sailng/raw/master/screenshots/sailng-messages.png)