function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  
  var div = document.createElement("div");
  div.className = "task-text";
  var t = document.createTextNode(inputValue);
  div.appendChild(t);
  
  li.className = "list-group-item";
  li.appendChild(div);
  
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  // Create close button and append it to the list item
  var close = document.createElement("SPAN");
  var txt = document.createTextNode("Delete");
  close.className = "btn btn-sm btn-primary sk mt-4";
  close.appendChild(txt);
  li.appendChild(close);

  // Click on a close button to hide the current list item
  close.onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }

  // Create edit button and append it to the list item
  var edit = document.createElement("BUTTON");
  var editText = document.createTextNode("Edit");
  edit.className = "btn btn-sm btn-primary sk mt-4 mx-3";
  edit.appendChild(editText);
  li.appendChild(edit);

  // Click on an edit button to edit the current list item
  edit.onclick = function() {
    var div = this.parentElement;
    var taskTextDiv = div.querySelector('.task-text');
    var newText = prompt("Edit task:", taskTextDiv.textContent);
    if (newText !== null) {
      taskTextDiv.textContent = newText;
    }
  }
}
