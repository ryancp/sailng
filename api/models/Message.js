module.exports = {
	attributes: {
		title: {
			type: 'string',
			required: true
		},
		user: {
			model: 'user'
		}
	},

	beforeCreate: function(model, cb) {
		// TODO: on creation of a new message, increment the message's user.message_count by 1
		cb(null, model);
	},

	getAll: function() {
		return Message.find()
		// TODO: sort by createdAt DESC does not work here
		.sort('createdAt DESC')
		.populate('user')
		.then(function (models) {
			console.log(models);
			return [models];
		});
	},

	getOne: function(id) {
		return Message.findOne(id)
		.populate('user')
		.then(function (model) {
			// you have the option to do something with the model here if needed, before returning it to the controller
			return [model];
		});
	}
};