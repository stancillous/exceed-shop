<template>
    <div>

        <div class="products-container">

            <div class="item">
               
                <div v-for="item in products" :key="item"  class="items-content">
                    
                    <!-- ICON TO BE CLICKED TO ADD ITEM TO CART -->
                    <div class="add-to-wishlist">
                        <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" class="fr-ec-icon fr-ec-icon--default fr-ec-icon-toggle fr-ec-button-toggle--icon" role="presentation"><g><g><path fill-rule="evenodd" clip-rule="evenodd" d="M8.23254 4.93861C9.23984 4.89569 10.2176 5.25233 10.9828 5.92576L11.9951 6.81992L13.0085 5.92576C13.7727 5.25131 14.7616 4.89467 15.7577 4.93861C16.7661 4.9754 17.7154 5.39744 18.4306 6.12605C19.1449 6.85364 19.559 7.82137 19.5987 8.85144C19.6374 9.88049 19.2975 10.8789 18.6412 11.6616L18.5446 11.7761L11.9951 18.4736L5.34904 11.6616C4.69277 10.8779 4.35294 9.88049 4.39262 8.85144C4.43128 7.82137 4.84641 6.85466 5.55965 6.12605C6.27494 5.39744 7.22423 4.9754 8.23254 4.93861ZM4.27866 12.612L11.9951 20.5L19.7096 12.5905C20.5897 11.54 21.0486 10.1901 20.9957 8.79626C20.9438 7.4024 20.3821 6.09233 19.4166 5.10825C18.451 4.12416 17.169 3.55395 15.8076 3.50387C14.4381 3.45176 13.1276 3.92694 12.0959 4.83642L11.9951 4.92533L11.8944 4.83642C10.9126 3.9719 9.67226 3.50183 8.38109 3.50183C8.31394 3.50183 8.24679 3.50285 8.17964 3.50592C6.81623 3.55701 5.53524 4.12927 4.57067 5.11438C2.59475 7.13568 2.46655 10.4292 4.27866 12.612Z"></path></g></g>
                        </svg>
                   
                    </div>
                    <NuxtLink :to="'/'+item.id">
                        <div class="image-container">
                            <img :src="item.image" alt="image of exceed product">
                        </div>
                        <div class="name-container">
                            <p class="product-name">{{item.title}}</p>
                        </div>
                        <div class="category-container">
                            <p class="category">{{item.category}}</p>
                        </div>
                        <div class="price-container">
                            <p class="product-price">$ {{item.price}}</p>
                        </div>
                    
                    </NuxtLink>

                </div>
               

            </div>
            
        </div>

        <LoginModal/>

    </div>
</template>

<script setup>


useHead({
    title:'Exceed | Products',

})

const {data:products} =await useFetch('/api/goods')



</script>

<style lang="scss" scoped>


.products-container{

    max-width: var(--maxWidth);
    margin: 10rem auto;
    .item{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(25rem,1fr));
        margin: 1rem;
        padding: .5rem;
        
        .items-content{
            margin: 1rem;
            border: 1px solid gainsboro;
            padding: 1rem;
            height: auto;

            //icon to be clicked to add item to cart
            .add-to-wishlist{
                margin: .5rem;
                cursor: pointer;
                width: 1.4rem;
            }

            a{
                color: black;
                text-decoration: none;
                display: grid;
                height: 100%;
                padding: 1rem;

                .image-container{
                    height: 18rem;
                    width: 100%;
                    
                    img{
                        width: 100%;
                        height: 100%;
                        object-fit: contain;
                        transition: all .3s ease;

                    }
                }

                .name-container{
                    // text-align: center;   
                    display: grid;
                    place-items: center;             
                    .product-name{
                        font-size: 1.2rem;
                        font-weight: 700;
                        opacity: .8;
                    }
                }

                .category-container{
                    .category{
                        text-align: center;
                        text-transform: capitalize;
                        font-weight: 600;
                        opacity: .8;
                        font-size: 1.1rem;
                    }
                }
                .price-container{

                    .product-price{
                        border:none;
                        text-align: center;
                        color: rgb(0, 0, 0);
                        width: 100%;
                        border-radius: .2rem;
                        padding:1.3rem 0;
                        font-size: 1.3rem;
                        text-decoration: dotted;
                        font-weight: bold;
            
                    }
                }
            }

            &:hover img{
                transform: scale(1.1);
            }
        }




    }
}



@media screen and (max-width:789px) {
    .products-container .item{
        grid-template-columns: repeat(auto-fit, minmax(20rem,1fr));

    }
}

@media screen and (max-width:630px) {
    .products-container{
        width:100vw;

        .item{
        border: none;
        grid-template-columns: 1fr 1fr;
        margin: unset;
        padding:unset;

        .items-content{
            margin: 2rem .5rem;
        }
    }
    } 
}


</style>