define(['backbone', 'views/items', 'views/additem', 'collections/todoController'], function(Backbone, TasksView, AddItem, Todos){
	var Router = Backbone.Router.extend({
		routes: {
			"": "home",
			"new": "addNewItem",
			"new/:id": "editItem",
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
		},
		editItem: function(id){
			this.additem.edit(id);
		}
	});
	return Router;

});