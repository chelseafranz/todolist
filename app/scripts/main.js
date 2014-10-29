var ToDo = function  (options) {
	options= options || {};
this.status=  options.status ||'incomplete';
this.active=  true;
this.delete= function(){
this.active= false;
};
this.check= function(){
	this.status='complete'
	};
this.count= 1;
};

var totalItems=[];



var item = new ToDo({

});

var checkForComplete= function(){
if(item.status = 'incomplete'){
		notDone.push(1);
		console.log(notDone.length);
		$('.notdone').html(notDone.length);
}else {
	done.push(1);
	console.log(done.length);
	$('.done').html(done.length);
}
};

var buttons='<button class="delete">x</button>' + '<button class="done">:)</button>'+ '<button class="notDone">:(</button>';
var listItem;


$('#button').on('click', function(event){
	listItem= $('.input').val();
		event.preventDefault;	
		console.log(listItem);
	$('.toDoItems').append('<li class="newItem">' + listItem + buttons +'</li>');
		totalItems.push(listItem.cout);
	$('.count').html(totalItems.length);
 });


$('.toDoItems').on('click', '.delete', function(){
	$(this).parent().remove();
		totalItems.splice(1,1);
	$('.count').html(totalItems.length);
});

$('.toDoItems').on('click', '.done', function(){
	item.status='complete';
	console.log(item.status);
});

$('.toDoItems').on('click', '.notDone', function(){
	item.status='incomplete';
	console.log(item.status);
});





