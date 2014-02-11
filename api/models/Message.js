module.exports = {
	attributes: {
		title: {
			type: 'string',
			required: true
		}
	},

	getAll: function() {
		return Message.find()
		.then(function (models) {
			console.log(models);
			return [models];
		});
	},

	getOne: function(id) {
		return Message.findOne(id)
		.then(function (model) {
			// you have the option to do something with the model here if needed, before returning it to the controller
			return [model];
		});
	}
};