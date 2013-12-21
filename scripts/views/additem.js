define(['backbone', 'text!templates/createnew.html', 'models/todo'], function(Backbone, Template, Todo){
	var AddItem = Backbone.View.extend({
		el: '.app',
		template: _.template(Template),
		events: {
			"submit form": "addItem",
		},
		initialize: function(options){
			//this.render();
		},
		render: function(){
			this.$el.html(this.template({}));
		},
		addItem: function(e){
			e.preventDefault();
			var userInput = this.$el.find("#task").val().trim();
			if(!userInput){
				console.log("empty");
			}else{
				var model = new Todo({task: userInput});
				if(model.isValid()){
					this.collection.create(model);
					this.$el.find("#task").val("");
				}else{
					console.log(model.validationError);
				}
			}

		},
	});

	return AddItem;
});