<script lang="ts" setup>

</script>

<template>
    <li class="item-box">
        <div class="item-inner">
            <i class="item-arrow"></i>
            <div class="flex items-center">
                <slot name="icon" v-if="$slots.icon"></slot>

                <slot name="text" v-if="$slots.text"></slot>
                <span class="font-medium text-sm">
                    <slot>
                    </slot>
                </span>
            </div>
        </div>
    </li>
</template>
<style lang="scss" scoped>
.item-box {
    border-radius: 8px;
    border: 1px dashed transparent;

    &:hover {
        background-color: var(--color-background-secondary);
        color: var(--color-text);
    }

    &.active {
        background-color: var(--color-background-secondary);
        color: var(--color-text);
    }
}

.item-inner {
    position: relative;
    display: block;
    padding: 12px 8px;
    cursor: pointer;
}

.active {
    .item-arrow {
        position: absolute;
        left: -17px;
        top: 56%;
        transform: translateY(-50%);
        width: 32px;
        height: 76px;
        display: inline-block;
        background-repeat: no-repeat;
        background-position: 0;
        background-size: 32px 76px;
        animation: item-arrow-show .3s ease-in-out;
        background-image: url('../images/active.png');
    }


    .icon-active {
        background-image: linear-gradient(90deg, #2d28ff, #1a7dff);
    }
}




@keyframes item-arrow-show {
    0% {
        transform: translate(-50%, -50%) scale(0);
        opacity: 0;
    }

    100% {
        transform: translateY(-50%);
        opacity: 1;
    }
}
</style>
