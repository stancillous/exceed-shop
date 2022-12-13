<template>
    <div class="ed-container">

        <div class="err-d">
            <div class="err-content">
                <h3 class="err-name">page not found :(</h3>
                <NuxtLink to="/">return home</NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup>
import { error } from 'console';

defineProps(['error'])

</script>

<style lang="scss" scoped>
.ed-container{
    background-color: whitesmoke;
    height: 100vh;
    width: 100vw;
    border: 1px solid gainsboro;
}
.err-d{
    max-width: 1000px;
    margin: 5rem auto;
    display: grid;
    place-items: center;
    padding: 0 2rem;
    .err-content{
        .err-name{
            font-size: 2.4rem;
            text-transform: capitalize;
            opacity: .8;
            margin: 1rem 0;
        }
        a{
            font-weight: 500;
            font-size: 1.3rem;
            text-transform: capitalize;
            color: black;
        }
    }
}

</style>
