<template>
    <div class="planet-filter-component">
        <div class="block-filters">
            <div class="item form-check">
                <input
                    class="form-check-input"
                    type="checkbox"
                    checked
                    value=""
                    id="tropical"
                    @change="setFilter"
                />
                <label class="form-check-label noselect" for="tropical">
                    Tropical
                </label>
            </div>

            <div class="item form-check">
                <input
                    class="form-check-input"
                    type="checkbox"
                    checked
                    value=""
                    id="temperate"
                    @change="setFilter"
                />
                <label class="form-check-label noselect" for="temperate">
                    Temperate
                </label>
            </div>

            <div class="item form-check">
                <input
                    class="form-check-input"
                    type="checkbox"
                    checked
                    value=""
                    id="hot"
                    @change="setFilter"
                />
                <label class="form-check-label noselect" for="hot">
                    Hot
                </label>
            </div>

            <div class="item form-check">
                <input
                    class="form-check-input"
                    type="checkbox"
                    checked
                    value=""
                    id="humid"
                    @change="setFilter"
                />
                <label class="form-check-label noselect" for="humid">
                    Humid
                </label>
            </div>

            <div class="item form-check">
                <input
                    class="form-check-input"
                    type="checkbox"
                    checked
                    value=""
                    id="arid"
                    @change="setFilter"
                />
                <label class="form-check-label noselect" for="arid">
                    Arid
                </label>
            </div>

            <div class="item form-check">
                <input
                    class="form-check-input"
                    type="checkbox"
                    checked
                    value=""
                    id="others"
                    @change="setFilter"
                />
                <label class="form-check-label noselect" for="others">
                    Others
                </label>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    emits: ['change-filter'],
    data() {
        return {
            filters: {
                tropical: true,
                temperate: true,
                hot: true,
                humid: true,
                arid: true,
                others: true
            }
        };
    },
    methods: {
        setFilter(event) {
            const inputId = event.target.id;
            const isActive = event.target.checked;
            const updatedFilters = {
                ...this.filters,
                [inputId]: isActive
            };
            this.filters = updatedFilters;
            this.$emit('change-filter', updatedFilters);
        }
    }
};
</script>

<style scoped lang="scss">
@import 'PlanetFilter.scss';
</style>
