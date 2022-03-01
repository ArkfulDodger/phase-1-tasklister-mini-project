document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form');
  form.addEventListener('submit', handleSubmit);

  function handleSubmit(e) {
    e.preventDefault();
    buildTask(e);
    form.reset();
  }
});

function buildTask(e) {
  // create Due Date element
  const dueDate = document.createElement('text');
  const dueDateText = e.target['new-task-due-date'].value;
  dueDate.textContent = dueDateText;
  // dueDate.style.color = setColorByPriority(e);
  
  // create Task li element
  const li = document.createElement('li');
  const taskText = e.target['new-task-description'].value;
  li.textContent = taskText + " - " + dueDate.textContent;
  li.style.color = setColorByPriority(e);

  // create delete button element
  const bttn = document.createElement('button');
  bttn.textContent = 'X';
  bttn.addEventListener('click', handleDelete);

  // add button to li element
  li.appendChild(bttn);

  // get task list and add new task to list
  const tasksList = document.getElementById('tasks');
  tasksList.appendChild(li);
}

function setColorByPriority(e) {
  const priorityVal = e.target.querySelector('#new-task-priority').value;

  switch (priorityVal) {
    case 'high':
      return 'red';
      break;
  
    case 'medium':
      return 'orange';
      break;

    case 'low':
      return 'green';
      break;

    default:
      console.warn('priority val not accepted');
      break;
  }
}


function handleDelete(e) {
  const taskListItem = e.target.parentNode;
  taskListItem.remove();
}