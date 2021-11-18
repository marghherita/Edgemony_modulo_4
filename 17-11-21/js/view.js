import { render, API } from "./utils.js";

const View = (id = 0) => {
    console.log(id);

    fetch(`${API}/${id}`)
        .then((response) => response.json())
        .then((movie) => {
            const container = document.querySelector("#container");
            render(
                container,
                `<article>
        <h2>${movie.title} </br> ${movie.year} </h2>
        <div class="vieew">
        <img src="${movie.poster}" />
        <p>${movie.description} </br></br></br> <span class="center-two"><a href="#" id="back">Torna alla home</a></span></p>
        
        </div>
        
      </article>`
            );
        });
};

export { View };