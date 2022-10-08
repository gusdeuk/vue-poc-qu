<template>
    <div class="starships-page">
        <div class="page-title">Starships page</div>
        <div class="page-content">Lorem ipsum dolor sit amet</div>
        <!--
            TEST STORE DATA
            <div>
            <div>{{ getUserIdFromStore }}</div>
            <div>{{ getStarShipsFromStore }}</div>
            <div>{{ getPlanetsFromStore }}</div>
        </div>
        -->
    </div>
</template>

<script>
export default {
    computed: {
        // getUserIdFromStore() {
        //     // get from root store
        //     return 'Get User id from root store >  ' + this.$store.state.userId;
        // },
        // getStarShipsFromStore() {
        //     // get from named module > starshipsModule
        //     return this.$store.getters['starshipsModule/starships'][0].name;
        // },
        // getPlanetsFromStore() {
        //     // get from named module planetsModule
        //     return this.$store.getters['planetsModule/planets'][0].name;
        // }
    }
};
</script>

<style lang="scss" scoped>
@import 'StarshipsPage.scss';
</style>
