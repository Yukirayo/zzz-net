<template>
    <div>
        <!-- start -->
        <svg v-if="props.status === 0" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            width="210" height="60" viewBox="0 0 210 60" fill="none">
            <path fill="#FFEA49"
                d="M30 -1.44797e-14L148.235 0L148.235 60L30 60C13.4314 60 -8.55449e-15 46.5685 -5.51091e-15 30L1.83697e-15 30C2.8515e-15 13.4314 13.4314 -1.65087e-14 30 -1.44797e-14Z"
                style="animation: change-color .6s infinite alternate;">
            </path>
            <path fill="#FFEA49"
                d="M135.882 9.99999L135.882 50C135.882 55.5228 140.36 60 145.882 60L181.356 60C185.572 60 189.335 57.3559 190.764 53.3896L205.176 13.3896C207.524 6.8726 202.695 -7.85215e-15 195.768 -7.85215e-15L145.882 -7.85215e-15C140.36 -8.52851e-15 135.882 4.47715 135.882 9.99999Z"
                style="animation: change-color .6s infinite alternate;">
            </path>
        </svg>

        <!-- middle -->

        <svg v-if="props.status === 1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
            width="210" height="60.000022888183594" viewBox="0 0 210 60.000022888183594" fill="none">
            <path fill="#FFEA49"
                d="M21.4856 6.2861L5.48556 46.2861C2.85811 52.8548 7.69568 60 14.7703 60L152 60C157.523 60 162 55.5229 162 50L162 10C162 4.47715 157.523 -1.6071e-14 152 -1.6071e-14L30.7703 -1.6071e-14C26.6813 -1.65718e-14 23.0042 2.48951 21.4856 6.2861Z"
                style="animation: change-color .6s infinite alternate;">
            </path>
            <path fill="#FFEA49"
                d="M135.882 9.99999L135.882 50C135.882 55.5229 140.36 60 145.882 60L181.356 60C185.572 60 189.335 57.3561 190.764 53.39L205.178 13.39C207.526 6.87287 202.697 -7.85244e-15 195.77 -7.85244e-15L145.882 -7.85244e-15C140.36 -8.52879e-15 135.882 4.47715 135.882 9.99999Z"
                style="animation: change-color .6s infinite alternate;">
            </path>
        </svg>

        <!-- end -->

        <svg v-if="props.status === 2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="210"
            height="60.000022888183594" viewBox="0 0 210 60.000022888183594" fill="none">
            <path
                d="M21.4856 6.2861L5.48556 46.2861C2.85811 52.8548 7.69568 60 14.7703 60L152 60C157.523 60 162 55.5229 162 50L162 10C162 4.47715 157.523 0 152 0L30.7703 0C26.6813 -5.008e-16 23.0042 2.48951 21.4856 6.2861Z"
                fill="#FFEA49" style="animation: change-color .6s infinite alternate;">
            </path>
            <path fill="#FFEA49"
                d="M158 -5.40314e-15C141.431 -7.43221e-15 128 13.4315 128 30C128 46.5686 141.431 60 158 60L172.12 60C188.689 60 202.12 46.5686 202.12 30C202.12 13.4315 188.689 -5.40314e-15 172.12 -5.40314e-15L158 -5.40314e-15Z" style="animation: change-color .6s infinite alternate;">
            </path>
        </svg>
    </div>


</template>

<script setup>
import { ref, defineProps } from 'vue';
const props = defineProps(['status'])

</script>

<style>
@keyframes change-color {
    from {
        fill: #FFEA49;
    }

    to {
        fill: #bddb38;
    }
}
</style>
