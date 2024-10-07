document.addEventListener("DOMContentLoaded", function(event) {
  const myform = document.getElementById("create-task-form");

  // Listen for the form submit event
  myform.addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the value from the input field
    let taskValue = event.target.elements["new-task-description"].value;

    // Call function to modify the DOM and append the new task
    modifyValue(taskValue);

    // Reset the form
    myform.reset();
  });
});

function modifyValue(output) {
  // Get the unordered list (assuming it has an id="tasks")
  const mylist = document.getElementById("tasks");

  // Create a new list item
  const innerlist = document.createElement("li");

  // Set the text content of the new list item
  innerlist.textContent = output;

  // Append the new list item to the unordered list
  mylist.appendChild(innerlist);
}

