define(['backbone', 'text!templates/tasklist.html'], function(Backbone, MainTemplate){
	var TasksView = Backbone.View.extend({
		el: '.app',
		template: _.template(MainTemplate),
		initialize: function(){
			this.render();
		},
		render: function(){
			this.$el.html(this.template({}));
		}
	});

	return TasksView;
});