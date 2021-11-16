import { API, render } from "./utils.js";
import { List } from "./list.js";
import { Add } from "./add.js";

const loadList = () => fetch(API)
    .then((response) => response.json())
    .then((data) => List(data));

document.addEventListener('DOMContentLoaded', loadList);


window.addEventListener('hashchange', () => {
    console.log('hash has canched', location.hash);

    switch (location.hash) {
        case '#add':
            Add();
            break;

        case '':
            loadList();
            break;
    }
});