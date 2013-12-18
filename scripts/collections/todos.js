define(['backbone', 'models/todo', 'localstorage'], function(Backbone, Todo, Store){

	var Todos = Backbone.Collection.extend({
		model: Todo,
		localStorage: new Store("Todos")

	});

	return Todos;
});