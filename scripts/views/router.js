define(['backbone', 'views/items', 'views/additem', 'collections/todos'], function(Backbone, TasksView, AddItem, Todos){
	var Router = Backbone.Router.extend({
		routes: {
			"": "home",
			"new": "addNewItem"
		},

		initialize: function(){

			this.todos = new Todos();
			this.taskview = new TasksView({collection: this.todos});
			this.additem = new AddItem({collection: this.todos});

		},
		home: function(){
			//new TasksView({collection: this.todos});
			this.taskview.render();
		},
		addNewItem: function(){
			//new AddItem({collection: this.todos});
			this.additem.render();
		}
	});
	return Router;

});