<script lang="ts" setup>
const { border } = defineProps<{ border?: 'none' | 'dashed' | 'solid' | 'dotted' | 'double' | 'ridge' | 'inset' | 'groove' }>()
const getBorderStyle = () => {
    return `border: 1px ${border} var(--color-border1)`
}
</script>

<template>
    <li class="item-box w-100% " :style="getBorderStyle()">
        <div class="item-inner">
            <i class="item-arrow"></i>
            <div class="flex items-center ">
                <div class="icon-active">
                    <slot name="icon" v-if="$slots.icon"></slot>
                </div>
                <slot name="text" v-if="$slots.text"></slot>
                <span v-else class="font-medium text-sm">
                    <slot>
                    </slot>
                </span>
            </div>
            <div class="pt-[2px] pl-[26px] leading-none">
                <span class="font-normal text-xs text-gray-400">
                    <slot name="subTitle"></slot>
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
        .icon-active {
            display: inline-flex;
            color: #2d28ff;
        }

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

}

.icon-active {
    display: inline-flex;
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
