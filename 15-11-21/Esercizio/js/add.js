import { render, API } from "./utils.js";

const Add = () => {
    const container = document.querySelector('#container');

    render(container, `
    <div>
    <form id="create">

    <div class="row">
      <label for="title">Task:</label>
      <input type="text" id="title" name="title" />
    </div>

    <div class="row">
      <label for="completed">Completed:</label>
      <input type="checkbox" id="completed" name="completed" />
    </div>

    <div class="row">
      <label for="expires">Expires:</label>
      <input type="date"  id="expires" name="expires" />
    </div>

    <button>+ Add Task</button>
  </form>
    </div>
    `);

    const form = document.querySelector('#create');
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const todos = {
            title: event.target.title.value,
            completed: event.target.completed.value,
            expires: event.target.expires.value
        };

        fetch(API, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(todos),
        })
    });
};

export { Add };