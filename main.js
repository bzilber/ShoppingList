var list = document.querySelector('ul');
var input = document.querySelector('input');
var button = document.querySelector('button');

button.onclick = function(){ //*
  let value = input.value;
  input.value = '';

  const listItem = document.createElement("li"); 
  const listText = document.createElement('span');
  const listBtn = document.createElement('button');

  listItem.appendChild(listText);
  listItem.textContent = value;
  listItem.appendChild(listBtn);
  listBtn.textContent = 'Delete';
  list.appendChild(listItem);

  listBtn.onclick = function(){
    list.removeChild(listItem);
  }
  
  input.focus();
}

