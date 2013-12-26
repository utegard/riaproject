define(['backbone', 'text!templates/tasklist.html'], function(Backbone, MainTemplate){
	var TasksView = Backbone.View.extend({
		el: '.app',
		template: _.template(MainTemplate),
		events: {
			'click [type="checkbox"]': 'toggle',
			"dblclick .item"  : "edit",
		},
		initialize: function(){
			this.collection.fetch();
		},
		render: function(){
			console.log(this.collection.models);
			var completed = this.collection.completed().length;
			var remaining = this.collection.remaining().length;

			this.$el.html(this.template({tasks: this.collection.models, completed: completed, remaining: remaining}));
		},
		toggle: function(e){
			var cid = e.currentTarget.id;
			var model = this.collection.get(cid);
			model.toggle();
			this.render();
		},
		edit: function(e){
			var cid = e.currentTarget.childNodes[1].id;
			var model = this.collection.get(cid);

			/*model.save({task: "Tjo"});
			this.render();*/
		}
	});

	return TasksView;
});