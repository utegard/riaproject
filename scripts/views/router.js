define(['backbone', 'views/items', 'views/additem', 'collections/todos'], function(Backbone, TasksView, AddItem, Todos){
	var Router = Backbone.Router.extend({
		routes: {
			"": "home",
			"new": "addNewItem"
		},

		initialize: function(){

			this.todos = new Todos();
			this.additem = new AddItem({collection: this.todos});
			this.taskview = new TasksView({collection: this.todos});

		},
		home: function(){
			this.taskview.render();
		},
		addNewItem: function(){
			this.additem.render();
		}
	});
	return Router;

});