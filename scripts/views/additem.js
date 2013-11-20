define(['backbone', 'text!templates/createnew.html'], function(Backbone, Template){
	var AddItem = Backbone.View.extend({
		el: '.app',
		template: _.template(Template),
		initialize: function(){
			this.render();
		},
		render: function(){
			this.$el.html(this.template({}));
		}
	});

	return AddItem;
});