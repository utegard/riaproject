define(['backbone', 'text!templates/createnew.html', 'models/todo'], function(Backbone, Template, Todo){
	var AddItem = Backbone.View.extend({
		el: '.app',
		template: _.template(Template),
		events: {
			"submit form": "addItem",
		},
		initialize: function(options){

		},
		render: function(){
			this.$el.html(this.template({}));
		},
		addItem: function(e){
			e.preventDefault();
			var userInput = this.$el.find("#task").val().trim();
			var radioButtons = $('[name=prio]');
			var that = this;

			radioButtons.each(function(index){
				if(radioButtons[index].checked === true){
					that.taskPrio = radioButtons[index].value;
				}
			});

			if(!userInput){
				console.log("empty");
			}else{
				var model = new Todo({task: userInput, prio: that.taskPrio});
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