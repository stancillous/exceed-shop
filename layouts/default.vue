<template>
    <div>

        <!-- <NuxtLink to="/">
        <div class="scroll-to-top">
            <div class="stt-div">
                    <div class="scroll-icon">

                    </div>
            </div>
        </div>
        </NuxtLink> -->

        <TheHeader/>
        <slot/>

        <TheFooter/>
        
       

    </div>
</template>

<script setup>


</script>

<style lang="scss" scoped>


.scroll-to-top{
    position: fixed;
    right: 3%;
    top: 90%;
    z-index: 8;
    .stt-div{
        border: 1px solid black;
        height: 4rem;
        width: 4rem;
        border-radius: 50%;
        display: grid;
        place-items: center;
        .scroll-icon{
            width: 0; 
            height: 0; 
            border-left: 15px solid transparent;
            border-right: 15px solid transparent;
            border-top: 15px solid rgba(0, 0, 0, 0.735);
            transform: rotate(180deg);

    	
        }
    }
}










</style>