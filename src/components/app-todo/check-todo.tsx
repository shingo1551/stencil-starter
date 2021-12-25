import { Component, h, Prop } from '@stencil/core';
import { done } from '../../shared/todo';

@Component({
  tag: 'check-todo',
  styleUrl: 'app-todo.css',
  shadow: true,
})
export class CheckToDo {
  @Prop() done!: boolean;
  @Prop() text!: string;
  @Prop() n!: number;

  onClick = () => {
    done(this.n);
  }

  render() {
    return (
      <li>
        <label class="checkbox">
          <input type="checkbox" checked={this.done} onClick={this.onClick} />
          <span class={{ done: this.done }}>{this.text}</span>
        </label>
      </li>
    );
  }

}
