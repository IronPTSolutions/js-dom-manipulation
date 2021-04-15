document.addEventListener('DOMContentLoaded', () => {
  console.log('Boxes js loaded');
  
  const addBoxBtn = document.getElementById('btn-add-box');
  addBoxBtn.addEventListener('click', addBox);

  document.querySelectorAll('.box button')
    .forEach(button => button.addEventListener('click', deleteBox))

});

function addBox() {
  const boxContainer = document.querySelector('.box-container');

  const box = document.createElement('div');
  box.classList.add('box');
  box.style.backgroundColor = randomColor();

  const deleteBtn = document.createElement('button');
  deleteBtn.addEventListener('click', deleteBox);
  deleteBtn.textContent = 'X';
  box.append(deleteBtn);

  boxContainer.append(box);
}

function deleteBox(event) {
  const deleteBtn = event.target;
  deleteBtn.parentNode.remove();
}

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  const a = Math.random();

  return `rgba(${r}, ${g}, ${b}, ${a})`;
}
