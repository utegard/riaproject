define(['backbone', 'text!templates/tasklist.html'], function(Backbone, MainTemplate){
	var TasksView = Backbone.View.extend({
		el: '.app',
		template: _.template(MainTemplate),
		initialize: function(){
			this.collection.fetch();
			this.render();
		},
		render: function(){
			console.log(this.collection.models);
			this.$el.html(this.template({tasks: this.collection.models}));
		}
	});

	return TasksView;
});