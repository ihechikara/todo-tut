// variables
const inputField = document.getElementById("input")
const addBtn = document.getElementById("btn")
const todos = document.querySelector(".todos")
const error = document.getElementById("error")

function addTodo(){
    // create elements
    var div = document.createElement("div")
    var paragraph = document.createElement("p")
    var deleteTodoBtn = document.createElement("button")
    var completeBtn = document.createElement("button")
    var editBtn = document.createElement("button")
    
    // store input value in paragraph element
    if (inputField.value == ""){
      error.innerText = "Cannot create a todo without a string"
    } else{
      paragraph.innerText = inputField.value
      deleteTodoBtn.innerText = "Delete"
      editBtn.innerText = "Edit"
      completeBtn.innerText = "Completed"
      
      // append created elements to markup (HTML)
      todos.appendChild(div)
      div.appendChild(paragraph)
      div.appendChild(deleteTodoBtn)
      div.appendChild(editBtn)
      div.appendChild(completeBtn)
      
  
      // clear input field
      inputField.value = ""
      error.innerText = ""
    }

    function editForm(){
      var inputEdit = document.createElement("input")
      var updateTodo = document.createElement("button")

      editBtn.style.display = "none"

      inputEdit.value = paragraph.innerText
      updateTodo.innerText = "Update todo"


      div.appendChild(inputEdit)
      div.appendChild(updateTodo)

      function update() {
        if(inputEdit.value == ""){
          error.innerText = "Cannot update a todo without a string"
        } else {
          paragraph.innerText = inputEdit.value

          inputEdit.style.display = "none"
          updateTodo.style.display = "none"

          editBtn.style.display = "inline"
          error.innerText = ""
        }

      }


      updateTodo.addEventListener("click", update)

    }

    // delete todo
    function deleteTodo(){
        div.remove() 
    }

    function completed() {
      paragraph.classList.toggle("strike")
    }

    // functions and events
    editBtn.addEventListener("click", editForm)
    deleteTodoBtn.addEventListener("click", deleteTodo)
    completeBtn.addEventListener("click", completed)
}

// event to run when button is clicked

addBtn.addEventListener("click", addTodo)