import { createStore } from "@stencil/store";

export interface ToDo {
  done: boolean;
  text: string;
}

const list: ToDo[] = [
  { text: 'lean TypeScript', done: true },
  { text: 'build Stencil App', done: false },
];

const { state } = createStore({
  count: 0,
  list: list,
});

function count() {
  state.count = state.list.reduce((sum, todo) => sum + (todo.done ? 0 : 1), 0);
}

function loadStorage() {
  const str = localStorage.getItem('todo');
  if (str) {
    const todo = JSON.parse(str);
    state.list = todo.list;
  }
  count();
}

function saveStorage() {
  const todo = {
    list: state.list,
  };
  localStorage.setItem('todo', JSON.stringify(todo));
  count();
}

export function push(todo: ToDo) {
  state.list.push(todo);
  saveStorage();
}

export function done(n: number) {
  state.list[n].done = !state.list[n].done;
  saveStorage();
}

export function archive() {
  state.list = state.list.filter(todo => !todo.done);
  saveStorage();
}

loadStorage();

export default state;
