import mutations from './mutations.js';
import actions from './actions.js';
import getters from './getters.js';

export default {
    namespaced: true,
    state() {
        return {
            starships: [
                {
                    id: 'c1',
                    name: 'STARSHIP 1'
                },
                {
                    id: 'c2',
                    name: 'STARSHIP 2'
                },
                {
                    id: 'c3',
                    name: 'STARSHIP 3'
                }
            ]
        };
    },
    mutations,
    actions,
    getters
};
