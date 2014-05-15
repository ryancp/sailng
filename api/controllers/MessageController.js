var _ = require('lodash');

module.exports = {
	getAll: function(req, res) {
		Message.getAll()
		.spread(function(models) {
			Message.watch(req);
			Message.subscribe(req.socket, models);

			res.json(models);
		})
		.fail(function(err) {
			// An error occured
		});
	},

	getOne: function(req, res) {
		Message.getOne(req.param('id'))
		.spread(function(model) {
			Message.subscribe(req.socket, model);
			res.json(model);
		})
		.fail(function(err) {
			res.send(404);
		});
	},

	create: function (req, res) {
		var userId = req.param('user');
		var model = {
			title: req.param('title'),
			user: userId
		};

		Message.create(model)
		.exec(function(err, message) {
			if (err) {
				return console.log(err);
			}
			else {
				Message.publishCreate(message);
				res.json(message);
			}
		});
	},

	destroy: function (req, res) {
		var id = req.param('id');
		if (!id) {
			return res.badRequest('No id provided.');
		}

		// Otherwise, find and destroy the model in question
		Message.findOne(id).exec(function(err, model) {
			if (err) {
				return res.serverError(err);
			}
			if (!model) {
				return res.notFound();
			}

			Message.destroy(id, function(err) {
				if (err) {
					return res.serverError(err);
				}

				Message.publishDestroy(model.id);
				return res.json(model);
			});
		});
	}

};