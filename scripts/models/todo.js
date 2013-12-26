define(['backbone'], function(Backbone){
	var Todo = Backbone.Model.extend({

		defaults: {
			task: "",
			date: new Date(),
			prio: "",
			done: false,
		},
		validate: function(attrs, options){
			var letters = /^[A-Za-z0-9 _]*$/;
			if(!attrs.task.match(letters)){
				return "Wrong input format";
			}

		},
		toggle: function(){
			this.save({done: !this.get("done")});
		}
	});

	return Todo;
});