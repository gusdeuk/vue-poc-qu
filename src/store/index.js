import { createStore } from 'vuex';

import starshipsModule from './modules/starships/index.js';
import planetsModule from './modules/planets/index.js';

const store = createStore({
    modules: {
        starshipsModule: starshipsModule,
        planetsModule: planetsModule
    },

    /**
    TODO: Explore THIS STUFF play / organize  data root store + store modules
    **/
    state() {
        return {
            userId: 'carlo1'
        };
    },
    getters: {
        userId(state) {
            return state.userId;
        }
    }
});

export default store;
