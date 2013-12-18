define(['backbone', 'text!templates/createnew.html', 'models/todo'], function(Backbone, Template, Todo){
	var AddItem = Backbone.View.extend({
		el: '.app',
		template: _.template(Template),
		events: {
			"click .addButton": "addItem"
		},
		initialize: function(){
			this.render();
		},
		render: function(){
			console.log(this.collection);
			this.$el.html(this.template({}));
		},
		addItem: function(){
			var userInput = this.$el.find("#task").val().trim();
			if(!userInput){
				console.log("empty");
			}else{
				var model = new Todo({task: userInput, date: new Date()});
				console.log(model);
				if(model.isValid()){
					this.collection.create(model);
					console.log(this.collection);

				}else{
					console.log(model.validationError);
				}
			}

		}
	});

	return AddItem;
});