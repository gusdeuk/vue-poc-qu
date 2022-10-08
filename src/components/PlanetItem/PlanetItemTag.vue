<template>
    <div class="tag-component text-truncate" :class="getTagColor" :title="labelTag.toUpperCase()">
        {{ labelTag }}
    </div>
</template>

<script>
export default {
    props: ['label'],
    data() {
        return {
            labelTag: this.label
        };
    },
    computed: {
        getTagColor() {
            return 'climate-color-' + this.label;
        }
    }
};
</script>

<style scoped lang="scss">
@import './PlanetItemTag.scss';
</style>
