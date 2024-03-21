// Wait for the DOM content to be fully loaded before executing the script
document.addEventListener("DOMContentLoaded", function () {
  const todoInput = document.getElementById("todoInput");
  const addBtn = document.getElementById("addBtn");
  const todoList = document.getElementById("todoList");

  // Function to add a new todo item
  function addTodo() {
    // Trim the input value to remove leading and trailing whitespace
    const todoText = todoInput.value.trim();

    // Check if the input is not empty
    if (todoText !== "") {
      // Create a new div element for the todo item
      const todoItem = document.createElement("div");
      todoItem.classList.add("todo-item"); // Add a class to the todo item

      // Create a checkbox input element
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox"; // Set the type to checkbox

      // Create a text node containing the todo text
      const textNode = document.createTextNode(todoText);

      // Create a button element for deleting the todo item
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete"; // Set the button text

      // Append the checkbox, text node, and delete button to the todo item
      todoItem.appendChild(checkbox);
      todoItem.appendChild(textNode);
      todoItem.appendChild(deleteBtn);

      // Append the todo item to the todo list
      todoList.appendChild(todoItem);

      // Clear the input field after adding the todo item
      todoInput.value = "";

      // Add event listener to the checkbox for toggling the todo item's state
      // Add event listener to the checkbox for toggling the todo item's state
      checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
          // Add a class to visually indicate that the todo item is checked
          todoItem.classList.add("checked");
          // Move the checked item to the bottom of the list
          todoList.appendChild(todoItem);
        } else {
          // Remove the class when the checkbox is unchecked
          todoItem.classList.remove("checked");
          // Move the unchecked item back up to its original position in the list
          todoList.insertBefore(todoItem, todoList.firstChild);
        }
      });

      // Add event listener to the delete button for removing the todo item
      deleteBtn.addEventListener("click", function () {
        todoList.removeChild(todoItem); // Remove the todo item from the list
      });
    }
  }

  // Add event listener to the add button for adding a new todo item
  addBtn.addEventListener("click", addTodo);

  // Add event listener to the input field for adding a new todo item when Enter key is pressed
  todoInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      addTodo(); // Call the addTodo function when Enter key is pressed
    }
  });
});
