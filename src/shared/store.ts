import { createStore } from "@stencil/store";

const { state, onChange } = createStore({
  clicks: 0,
  seconds: 0,
  squaredClicks: 0
});

onChange('clicks', value => {
  state.squaredClicks = value ** 2;
});

/*
const state = {
  clicks: 0,
  seconds: 0,
  squaredClicks: 0
};
*/

export default state;
