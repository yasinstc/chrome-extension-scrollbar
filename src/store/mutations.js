import * as types from './mutation-types';

export default {
  [types.SAVE](state, payload) {
    state.scroll = payload;
  },
};
