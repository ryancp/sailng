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

	/**
	* Callback to be run after creating a Message.
	*
	* @param {Object}   message The soon-to-be-created Message
	* @param {Function} next
	*/
	afterCreate: function (message, next) {
		// set message.user = to appropriate user model
		User.getOne(message.user)
		.spread(function(user) {
			message.user = user;
			next(null, message);
		});
	},

	getAll: function() {
		return Message.find()
		// TODO: sort by createdAt DESC does not work here, something to do with a camelCase key names bug
		.sort({createdAt: 'desc'})
		.populate('user')
		.then(function (models) {
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
