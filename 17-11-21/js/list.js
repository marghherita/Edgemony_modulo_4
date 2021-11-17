import { render, API } from "./utils.js";

const List = (data) => {
    const elements = data
        .map(
            (item) => `<li class="film">
        <a href="#view-${item.id}">${item.title}</a> - ${item.year} </br>
        <a class="edit" href="#edit-${item.id}">EDIT</a>
        <button class="delete" id="${item.id}">X</button>
      </li>`
        )
        .join("");

    const container = document.querySelector("#container");
    render(
        container,
        `
    
    <ul>${elements}</ul>
    <div class="center"><a href="#add" id="add">Aggiungi una nuova scheda</a></div>
    `
    );

    const btns = [...document.querySelectorAll(".delete")];

    const deleteItem = (event) => {
        const id = parseInt(event.target.id);
        const filtered = data.filter((movie) => movie.id !== id);

        fetch(`${API}/${id}`, { method: "DELETE" })
            .then((response) => response.json())
            .then(() => List(filtered));
    };

    const btnClicks = (btn) =>
        btn.addEventListener("click", deleteItem, { once: true });

    btns.forEach(btnClicks);
};

export { List };