<template>
    <div class="planets-page">
        <div class="page-title">Planets page</div>
        <planet-list class="page-content"></planet-list>
    </div>
</template>

<script>
// import components
import PlanetList from '@/components/PlanetList/PlanetList.vue';

export default {
    name: 'Home',
    components: {
        PlanetList
    },
    computed: {},

    mounted() {
        // console.log(this.$store.getters);
        // console.log(this.$store.getters['starshipsModule/starships']);
    }
};
</script>

<style lang="scss" scoped>
@import 'PlanetsPage.scss';
</style>
