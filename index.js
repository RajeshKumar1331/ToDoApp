let toDos;

let savedToDo = JSON.parse(localStorage.getItem('toDos'));
if (Array.isArray(savedToDo)) {
  toDos = savedToDo;
  render();
}
else {
  toDos = [];
}




////Model
function createToDo(title, dueDate) {
  let id = new Date().getTime();
  toDos.push({ title: title, dueDate: dueDate, id: id });
  saveData();

}


function removeToDo(delButtonId) {
  toDos = toDos.filter(function (todo) {
    if (todo.id == delButtonId)
      return false;
    else
      return true;
  });
  saveData();

}


function saveData() {
  localStorage.setItem('toDos', JSON.stringify(toDos));
}









//View

function render() {
  let container = document.getElementById("toDoContainer");
  container.innerHTML = "";
  for (let i = 0; i < toDos.length; i++) {
    let taskBox = document.createElement('div');
    taskBox.innerHTML = toDos[i].title + "     " + toDos[i].dueDate;
    taskBox.style = "font-size: larger; padding-top:10px"
    let delButton = document.createElement('button');
    let image = document.createElement('img');
    image.src = "images/delete.png";
    image.style = "height:15px ; margin-left:400px";
    delButton = image;
    //delButton.src = "images/delete.png"
    delButton.id = "deleteButton";

    delButton.onclick = deleteToDo;
    delButton.id = toDos[i].id;
    taskBox.append(delButton);



    let container = document.getElementById("toDoContainer");
    container.appendChild(taskBox);
  }

}


///Controller
function addToDo() {

  let input_box = document.getElementById("input_box");
  let title = input_box.value;
  let dueDatePicker = document.getElementById("date_picker");
  let dueDate = dueDatePicker.value;

  createToDo(title, dueDate);

  input_box.value = "";
  dueDatePicker.value = "";
  render();

}




function deleteToDo(event) {
  console.log(event);
  let delButtonId = event.target.id;
  removeToDo(delButtonId);

  render();
}
