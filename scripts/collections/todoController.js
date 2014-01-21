define(['backbone', 'models/todoModel', 'localstorage'], function(Backbone, Todo, Store){

	var Todos = Backbone.Collection.extend({
		model: Todo,
		localStorage: new Store("Todos"),

		completed: function(){
			return this.where({done: true});
		},
		remaining: function(){
			return this.where({done: false});
		}

	});

	return Todos;
});