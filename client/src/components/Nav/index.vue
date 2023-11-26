<script lang="ts" setup>
import NavTop from './NavTop/index.vue';
import NavFooter from './NavFooter/index.vue';
</script>

<template>
    <nav class="mantine-navbar" style="transition: width 400ms ease 0s, min-width 400ms ease 0s;">
        <NavTop></NavTop>
        <NavFooter></NavFooter>
    </nav>
</template>
<style lang="scss" scoped>
.mantine-navbar {
    overflow-x: hidden;
    overflow-y: auto;
    top: var(--mantine-header-height);
    left: 0px;
    bottom: 0px;
    z-index: 100;
    height: calc(100vh - var(--mantine-header-height, 0rem) - var(--mantine-footer-height, 0rem));
    width: 100%;
    position: fixed;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background-color: rgb(255, 255, 255);
    border-right: 0.0625rem solid rgb(233, 236, 239);
}

@media (min-width: 48em) {
    .mantine-navbar {
        width: 13.75rem;
        min-width: 13.75rem;
    }
}
</style>
