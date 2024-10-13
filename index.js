const displayTodos = () => {
  const getListTodos = JSON.parse(localStorage.getItem("todos"));

  let list = ``;
  if (getListTodos) {
    for (let i = 0; i < getListTodos.length; i++) {
      list += `
          <li class="flex justify-between">
              <div class="flex justify-center items-center gap-2">
                <input type="checkbox" name="" class="w-5 h-5" id="${
                  getListTodos[i].id
                }" ${
        getListTodos[i].checked ? "checked" : ""
      } onclick="updateChecked(${getListTodos[i].id})" />
                <p class="text-xl">${getListTodos[i].name}</p>
              </div>
              <button class="bg-red-400 rounded-lg text-white px-6 py-2" onclick="deleteTodos(${
                getListTodos[i].id
              })">
                Delete
              </button>
          </li>
      `;
    }
  }

  document.getElementById("list-todo").innerHTML = list;
};

const addTodos = () => {
  const input = document.getElementById("input_todo").value;

  let todos = JSON.parse(localStorage.getItem("todos"));

  if (todos) {
    todos.push({
      id: todos[todos.length - 1].id + 1,
      name: input,
      checked: false,
    });
  } else {
    todos = [
      {
        id: 0,
        name: input,
        checked: false,
      },
    ];
  }

  localStorage.setItem("todos", JSON.stringify(todos));

  document.getElementById("input_todo").value = "";
  displayTodos();
};

const deleteTodos = (id) => {
  let todos = JSON.parse(localStorage.getItem("todos"));
  const result = todos.filter((todo) => todo.id !== id);

  localStorage.setItem("todos", JSON.stringify(result));

  displayTodos();
};

const updateChecked = (id) => {
  let todos = JSON.parse(localStorage.getItem("todos"));

  const index = todos.findIndex((todo) => todo.id == id);

  if (todos[index].checked) {
    todos[index].checked = false;
  } else {
    todos[index].checked = true;
  }

  localStorage.setItem("todos", JSON.stringify(todos));

  displayTodos();
};
