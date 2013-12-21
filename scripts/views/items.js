define(['backbone', 'text!templates/tasklist.html'], function(Backbone, MainTemplate){
	var TasksView = Backbone.View.extend({
		el: '.app',
		template: _.template(MainTemplate),
		events: {
			'click [type="checkbox"]': 'toggle',
		},
		initialize: function(){
			this.collection.fetch();
			//this.render();
		},
		render: function(){
			//console.log(this.collection.models);
			this.$el.html(this.template({tasks: this.collection.models}));
		},
		toggle: function(e){
			var cid = e.currentTarget.id;
			var model = this.collection.get(cid);
			model.toggle();
			this.render();
		}
	});

	return TasksView;
});