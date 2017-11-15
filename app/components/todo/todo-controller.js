function TodoController() {
	// new up the TodoService that has already been configured for your use
	// You will need four methods
	// getTodos should request your api/todos and give an array of todos to your callback fn
	// addTodo takes in a todo and posts it to the server
	// toggleTodoStatus takes in a todo marks its status as completed and puts it to the server
	// removeTodo takes in a todoId and sends a delete request to the server
	// **** HINT: Everytime you make a change to any todo don't forget to get the todo list again
	var todoService = new TodoService()
	var todoElem = document.getElementById('todo')
	var todoCountElem = document.getElementById('todo-count')

	// Use this getTodos function as your callback for all other edits
	function getTodos() {
		//FYI DONT EDIT ME :)
		todoService.getTodos(draw)
	}



	function draw(todoList) {

		//WHAT IS MY PURPOSE?
		//BUILD YOUR TODO TEMPLATE HERE
		counterTemplate = ''
		counterTemplate = `
			<div class="col-xs-2 text-center thumbnail">
				<h4>${todoList.length} to dos</h4>
			</div>
		
		
		`
		var template = ''
		for (var i = 0; i < todoList.length; i++) {
			var todo = todoList[i]
			if (todo.completed === true) {
				template += `
				<div class="col-xs-2 text-center thumbnail">
					<h4>${todo.description}</h4>
					<div class="form-check">
						<label class="form-check-label">
							<input onclick="app.controllers.todoController.toggleTodoStatus(${i})" type="checkbox" class="form-check-input" checked>
						</label>
					</div>
					<button onclick="app.controllers.todoController.removeTodo(${i})" type="button" class="btn btn-default btn-sm">Delete</button>
				</div>
			`
					
			} else {
				template += `
				<div class="col-xs-2 text-center thumbnail">
					<h4>${todo.description}</h4>
					<div class="form-check">
						<label class="form-check-label">
							<input onclick="app.controllers.todoController.toggleTodoStatus(${i})" type="checkbox" class="form-check-input">
						</label>
					</div>
					
				</div>
					`
							
				
			}

			todoElem.innerHTML = template
			todoCountElem.innerHTML = counterTemplate
			//DONT FORGET TO LOOP
		}


	}

	this.addTodoFromForm = function (e) {
		e.preventDefault() // <-- hey this time its a freebie don't forget this
		// TAKE THE INFORMATION FORM THE FORM
		var form = e.target
		var todo = {
			// DONT FORGET TO BUILD YOUR TODO OBJECT
			description: form.description.value,
			completed: false
		}
		form.description.value = ''


		//PASSES THE NEW TODO TO YOUR SERVICE
		//DON'T FORGET TO REDRAW THE SCREEN WITH THE NEW TODO
		//YOU SHOULDN'T NEED TO CHANGE THIS
		todoService.addTodo(todo, getTodos)
		//^^^^^^^ EXAMPLE OF HOW TO GET YOUR TOODOS AFTER AN EDIT
	}

	this.toggleTodoStatus = function (todoId) {
		// asks the service to edit the todo status
		todoService.toggleTodoStatus(todoId, getTodos)
		// YEP THATS IT FOR ME
	}

	this.removeTodo = function (todoId) {
		// debugger
		
		todoService.removeTodo(todoId, getTodos)
		
		// ^^^^ THIS LINE OF CODE PROBABLY LOOKS VERY SIMILAR TO THE toggleTodoStatus
	}

	// IF YOU WANT YOUR TODO LIST TO DRAW WHEN THE PAGE FIRST LOADS WHAT SHOULD YOU CALL HERE???
	getTodos()

}