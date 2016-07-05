// sorting,refuse duplication,   

var doesTodoExist = function (currentTodos, todoName) {
	for (var i = 0; i < currentTodos.length; i++ ) {
		if (currentTodos[i].name === todoName){ 
			return true;
		} 
	}
	return false;
};

var todos = [];
var newTodo = function(options){
	var defaultOptions = {
		name: "newDo",
		priority:0,
		dateCreation:new Date(),
		completed:false
	};
	var todo = $.extend({},defaultOptions, options) 
		return todo;

};

function render (){
	var str = "";
	var currentTodo = {};
	var sortArray = todos.sort( function compare(a, b){
		if (a.dateCreation < b.dateCreation ){
			return 1;
		} else {
			return -1 ;
		}	
	});

	for (var i = 0; i < sortArray.length; i++){		
		currentTodo = sortArray[i];
					// console.log("i:", i);

		str += "<li><span><i class='fa fa-trash'></i></span> " + currentTodo.name + "</li>";
					// console.log("str: ", str);
	};
	return str;
};

// Check Off Specific Todos By Clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click on X to delete Todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text'").keypress(function(event){
	if(event.which === 13){
		//grabbing new todo text from input
		var todoText = $(this).val();
		if (!doesTodoExist(todos, todoText)) {
			var todo = newTodo({
				name: todoText      
			});
			todos.push(todo);
			$(this).val("");
		}else {
			console.log ("todo already exist")
		}
		

		
		//create a new li and add to ul
		$("ul").html(render())

	}
});

$(".fa-plus").click(function(){
	$("input[type='text'").fadeToggle()
});