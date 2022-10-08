<template>
    <div class="planet-item-component">
        <div class="name">{{ name }}</div>
        <div class="data text-truncate"><span>Diameter: </span>{{ getDiameter }}</div>
        <div class="data text-truncate"><span>Population: </span>{{ population }}</div>
        <div class="data text-truncate"><span>Orbital period: </span>{{ orbital_period }}</div>
        <div class="data text-truncate"><span>Rotation period: </span>{{ rotation_period }}</div>
        <div class="data text-truncate"><span>Surface water: </span>{{ surface_water }}</div>
        <div class="data text-truncate"><span>Terrain: </span>{{ terrain }}</div>

        <div class="tag-wrapper">
            <tag v-for="tag in getClimateTagList" :key="tag" :label="tag"></tag>
        </div>
    </div>
</template>

<script>
import Tag from './PlanetItemTag.vue';
export default {
    props: ['planet'],
    components: { Tag },
    data() {
        return {
            // dispose planet data
            name: this.planet.name,
            created: this.planet.created,
            diameter: this.planet.diameter,
            id: this.planet.id,
            orbital_period: this.planet.orbital_period,
            population: this.planet.population,
            rotation_period: this.planet.rotation_period,
            surface_water: this.planet.surface_water,
            terrain: this.planet.terrain
        };
    },
    computed: {
        getLabel() {
            //console.log(this.planet);
            return this.planet.name + ' - ' + this.planet.climate;
        },
        getDiameter() {
            //console.log(this.planet);
            return this.planet.diameter + ' km';
        },
        getClimateTagList() {
            ///console.log(this.planet.climate.split(','));
            let climateArray = this.planet.climate.split(', ');
            return climateArray;
        }
    }
};
</script>

<style scoped lang="scss">
@import 'PlanetItem.scss';
</style>
