<template>
    <div class="planet-list-component">
        <planet-filter @change-filter="setFilters"></planet-filter>

        <div class="loader-wrap" v-if="isLoading">
            <div class="loader-oval med spin-me"></div>
        </div>

        <div class="planet-list clearfix" v-if="!isLoading">
            <transition-group name="planet-list" tag="div">
                <planet-item
                    v-for="planet in filteredPlanets"
                    :key="planet.name"
                    :planet="planet"
                    class="list-item"
                ></planet-item>
            </transition-group>
        </div>
    </div>
</template>

<script>
import PlanetFilter from '../PlanetFilter/PlanetFilter';
import PlanetItem from '../PlanetItem/PlanetItem';

export default {
    name: 'PlanetList',
    components: {
        PlanetFilter,
        PlanetItem
    },
    data() {
        return {
            isLoading: false,
            error: null,
            activeFilters: {
                tropical: true,
                temperate: true,
                hot: true,
                humid: true,
                arid: true,
                others: true
            }
        };
    },
    mounted() {
        // other
    },
    created() {
        const planetsInStore = this.$store.getters['planetsModule/planets'];
        // load planets just once!
        if (planetsInStore.length === 0) {
            this.loadPlanets(true);
        }
    },
    computed: {
        filteredPlanets() {
            const planets = this.$store.getters['planetsModule/planets'];
            return planets.filter(planet => {
                if (this.activeFilters.arid && planet.climate.includes('arid')) {
                    return true;
                }
                if (this.activeFilters.tropical && planet.climate.includes('tropical')) {
                    return true;
                }
                if (this.activeFilters.temperate && planet.climate.includes('temperate')) {
                    return true;
                }
                if (this.activeFilters.hot && planet.climate.includes('hot')) {
                    return true;
                }
                if (this.activeFilters.humid && planet.climate.includes('humid')) {
                    return true;
                }
                if (
                    this.activeFilters.others &&
                    !planet.climate.includes('humid') &&
                    !planet.climate.includes('arid') &&
                    !planet.climate.includes('tropical') &&
                    !planet.climate.includes('temperate') &&
                    !planet.climate.includes('hot')
                ) {
                    return true;
                }
                return false;
            });
        }
    },
    methods: {
        async loadPlanets() {
            // flag to show / hide a loader
            this.isLoading = true;
            try {
                // dispatch action and load stuff in store
                await this.$store.dispatch('planetsModule/loadPlanets', {
                    // TODO: add force reload or something like that in the payload
                    something: true
                });
            } catch (error) {
                this.error = error.message || 'Something went wrong!';
            }
            // loading complere
            this.isLoading = false;

            // const planetsInStore = this.$store.getters['planetsModule/planets'];
            // console.log(planetsInStore);
        },
        setFilters(updatedFilters) {
            this.activeFilters = updatedFilters;
        }
    }
};
</script>

<style scoped lang="scss">
@import 'PlanetList.scss';
</style>
