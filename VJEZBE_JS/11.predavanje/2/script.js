"use strict";

const apiURL = "https://jsonplaceholder.typicode.com/todos"

const getTodos = () => {
    fetch(apiURL)
    .then((res) => res.json())
    .then((data) => {
        data.forEach((todo)=> noviTodo(todo));
    });
};

const noviTodo = (todo) => {
    const div = document.createElement("div");
    div.classList.add("todo");
    div.appendChild(document.createTextNode(todo.title));
    div.setAttribute("data-id", todo.id);

    let trashIcon = document.createElement("i");
    trashIcon.className = "fa solid fa trash";
    trashIcon.addEventListener("click", deleteTodo);
    div.appendChild(trashIcon);

    if (todo.completed) {
        div.classList.add("gotov");
    }

    document.getElementById("todo-list)").appendChild("div");
}

document.addEventListener("DOMContentLoaded", getTodos);

const deleteTodo = (e) => {
    const id = e.target.dataset.id;
    fetch (`${apiUrl}/${id}`, {
        method: "DELETE",
    })
    .then((res) => res.json())
    .then(() => {
        const todoDiv = e.target.closest(".todo");
        todoDiv.remoce();
    });
};

const createTodo = (e) => {
    e.preventDefault();
}