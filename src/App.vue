<template>
    <div class="main-wrapper">
        <div class="header-wrapper">
            <div class="logo">
                <img src="./images/logo.svg" height="100" />
            </div>

            <div class="navigation-menu">
                <router-link to="/"><span class="label">Planets</span></router-link>
                <router-link to="/starships"><span class="label">Starships</span></router-link>
                <router-link to="/shop"><span class="label">Shop</span></router-link>
                <router-link to="/contact"><span class="label">Contact</span></router-link>
            </div>
        </div>

        <router-view class="content-wrapper" v-slot="slotProps">
            <transition name="fade-page" mode="out-in">
                <component :is="slotProps.Component"></component>
            </transition>
        </router-view>

        <div class="footer-wrapper">
            <span><a href="https://www.elpixelista.com" target="_blank">El Pixelista</a></span>
        </div>
    </div>
</template>

<script>
export default {};
</script>

<style scoped lang="scss">
@import 'App.scss';
</style>
