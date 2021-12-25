import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'app-child',
  styleUrl: 'app-child.css',
  shadow: true,
})
export class AppChild {
  @Prop() p1: string;
  @Prop() p2: string;

  render() {
    return (
      <Host>
        <h2>App Child</h2>
        {this.p1 && this.p2 ? <h3>{this.p1}, {this.p2}</h3> : null}
      </Host>
    );
  }

}
