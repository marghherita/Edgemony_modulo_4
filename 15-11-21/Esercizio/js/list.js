import { render } from "./utils.js";

const List = (data) => {
    const elements = data
        .map((item) => `<li ${item.title} - ${item.completed} - ${item.expires} </li>`)
        .join('');

    const container = document.querySelector('#container');
    render(container, `
        <p>To Do List</p>
        <ul> ${elements} </ul>`);
};

export { List };