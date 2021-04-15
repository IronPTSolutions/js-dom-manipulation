document.addEventListener('DOMContentLoaded', () => {
  console.log('Tasks js loaded');

  const addTaskBtn = document.getElementById('btn-add-task');
  addTaskBtn.addEventListener('click', addTask);
});


function addTask() {
  const taskInput = document.querySelector('input[name="task"]');
  const taskName = taskInput.value;

  const todoList = document.querySelector('.todo-list');

  const task = document.createElement('li');
  task.classList.add('task');
  task.innerText = taskName;

  const deleteTaskBtn = document.createElement('button');
  deleteTaskBtn.classList.add('btn-delete-task');
  deleteTaskBtn.innerText = 'x';
  deleteTaskBtn.addEventListener('click', deleteTask)
  task.append(deleteTaskBtn);

  todoList.append(task);
}

function deleteTask(event) {
  console.log(event);
  const deleteTaskBtn = event.target;
  deleteTaskBtn.parentNode.remove();
}
