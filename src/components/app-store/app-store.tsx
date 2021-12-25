import { Component, Host, h } from '@stencil/core';
import state from '../../shared/store';

@Component({
  tag: 'app-store',
  styleUrl: 'app-store.css',
  shadow: true,
})
export class AppStore {
  timer: number;

  connectedCallback() {
    console.log('connectedCallback')
    this.timer = setInterval(() => state.seconds++, 1000);
  }

  disconnectedCallback() {
    console.log('disconnectedCallback')
    clearInterval(this.timer);
  }

  render() {
    return (
      <Host>
        <button onClick={() => state.clicks++}>
          {state.clicks}
        </button>
        <p>
          Seconds: {state.seconds}
          <br />
          Squared Clicks: {state.squaredClicks}
        </p>
      </Host>);
  }

}
