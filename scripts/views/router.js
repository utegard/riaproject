define(['backbone', 'views/items', 'views/additem', 'collections/todos'], function(Backbone, TasksView, AddItem, Todos){
	var Router = Backbone.Router.extend({
		routes: {
			"": "home",
			"new": "addNewItem"
		},

		initialize: function(){
			this.todos = new Todos();
		},
		home: function(){
			new TasksView({collection: this.todos});
		},
		addNewItem: function(){

			new AddItem({collection: this.todos});
		}
	});
	return Router;

});