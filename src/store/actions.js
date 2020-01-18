import * as types from './mutation-types';

export const save = ({ commit}, payload) => {
    localStorage.setItem('scroll', JSON.stringify(payload));
    commit('SAVE', payload)
}