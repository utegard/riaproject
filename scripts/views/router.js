define(['backbone', 'views/items', 'views/additem'], function(Backbone, TasksView, AddItem){
	var Router = Backbone.Router.extend({
		routes: {
			"": "home",
			"new": "addNewItem"
		},
		home: function(){
			new TasksView();
		},
		addNewItem: function(){
			new AddItem();
		}
	});
	return Router;

});