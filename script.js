function addTodo() {
  const input = document.getElementById('todo-input');
  const list = document.getElementById('todo-list');
  if (input.value.trim() === "") return;  // جلوگیری از اضافه کردن آیتم خالی
  const item = document.createElement('li');
  item.innerText = input.value;
  list.appendChild(item);
  input.value = '';
}