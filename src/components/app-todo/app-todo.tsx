import { Component, Host, h, State } from '@stencil/core';
import state, { archive, push } from '../../shared/todo';

@Component({
  tag: 'app-todo',
  styleUrl: 'app-todo.css',
  shadow: true,
})
export class AppToDo {
  @State() disabled = true;

  input: HTMLInputElement;

  onArchive = (ev: Event) => {
    ev.preventDefault();
    archive();
  }

  onAdd = (ev: MouseEvent) => {
    ev.preventDefault();
    push({ text: this.input.value, done: false });
    this.input.value = '';
    this.disabled = true;
  }

  onKeyUp = () => {
    this.disabled = !this.input.value;
  }

  render() {
    return (
      <Host>
        <h2>Todo</h2>
        <span>{state.count} of {state.list.length} remaining</span>
        [ <a href="" onClick={this.onArchive}>archive</a> ]
        <ul>
          {state.list.map((todo, n) => <check-todo done={todo.done} text={todo.text} n={n} />)}
        </ul>
        <form>
          <input type="text" size={30} placeholder="add new todo here" ref={el => this.input = el} onKeyUp={this.onKeyUp} />
          <input type="submit" value="add" onClick={this.onAdd} disabled={this.disabled} />
        </form>
      </Host>
    );
  }

}
