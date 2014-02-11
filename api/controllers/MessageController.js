module.exports = {
	getAll: function(req, res) {
		Message.getAll()
		.spread(function(models) {
			Message.subscribe(req.socket);
			res.json(models);
		})
		.fail(function(err) {
			// An error occured
		});
	},

	getOne: function(req, res) {
		Message.getOne(req.param('id'))
		.spread(function(model) {
			Message.subscribe(req.socket, model.toJSON());
			res.json(model);
		})
		.fail(function(err) {
			res.send(404);
		});
	},

	create: function (req, res) {
		var model = {
			title: req.param('title')
		};

		Message.create(model)
		.done(function(err, model) {
			if (err) {
				return console.log(err);
			}
			else {
				Message.publishCreate(model.toJSON());
				res.json(model);
			}
		});
	},

	destroy: function (req, res) {
		var id = req.param('id');
		if (!id) {
			return res.badRequest('No id provided.');
		}

		// Otherwise, find and destroy the model in question
		Message.findOne(id).done(function(err, model) {
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