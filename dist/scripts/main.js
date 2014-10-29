(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['items'] = template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<li>"
    + escapeExpression(((helper = (helper = helpers.listItem || (depth0 != null ? depth0.listItem : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"listItem","hash":{},"data":data}) : helper)))
    + "</li>";
},"useData":true});
})();
var my_server= 'http://tiy-atl-fe-server.herokuapp.com/collections/chelseaandjoanna2';

var ToDo= function (options) {
	options= options||{};
	this.done= 'false';
	this.task=options.task || '';

};

var todo_list;

var task_template= $('#task_items').html();
var rendered = _.template(task_template);

$.getJSON(my_server).done( function(data){

	todo_list = data;

	_.each(todo_list, function(item){

		$('todoitems', 'todo_list').append(rendered(item));
	});
});

var task, contents;

$('#button').on('click', function(event){
event.preventDefault();
var self=this;
contents = $('.input').val()+ '<button id= "away">x</button>';

task= new ToDo({
	task: contents
});
console.log(task);

$.ajax({
	type: 'POST',
	url: my_server,
	data: task
}).done( function(data){

	todo_list.push(data);

	$('.toDoItems').append(rendered(data));

	$('.input').val('');
});

$('ul').on('click', '#away', function(){
	$(this).parent().remove();
});

});




var todo_modifier;
$('.toDoItems').on('click', 'li', function(event){
	event.preventDefault();

var myID= $(this).attr('id');

todo_modifier=_.findWhere(todo_list, {_id: myID});
	
	if(todo_modifier.done ==='true'){
		todo_modifier.done = 'false';
		$(this).removeClass('completed');
	}
	else{
		todo_modifier.done =='true';

		$(this).addClass('completed');	
	}
	console.log(todo_modifier);


$.ajax({
	type: 'PUT',
	url: my_server + "/" + todo_modifier._id,
	data:todo_modifier,
});
});




