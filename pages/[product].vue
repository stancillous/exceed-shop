<template>
    <div class="outer-root-div">
      
        <section class="cart-section-wrapper">
            <div class="cart-section">
                <div class="cart-container">
                    <div class="image-container">
                        <img id="aic-image" :src="data[0].image" :alt=data[0].title>
                        <div class="price-container-div">
                            <span>$</span> <span class="item-price">{{data[0].price}}</span>

                        </div>
                        <div @click="arrowClicked" class="ov-container">
                            <h2>Overview</h2>
                            <div class="overview-arrow"></div>
                        </div>
                        <div class="product-overview">
                            <ul class="overview-content">
                                <li v-for="overview in data[0].overview">{{overview}}</li>
                            </ul>
                        </div>
                        
                    </div>
        
                    <div class="product-details">
                        <h4 class="product-title">{{data[0].title}}</h4>
                        <h4 class="product-description">{{data[0].description}}</h4>

                        <button @click="totalItems>1?totalItems--:1" class="subtract">-</button>
                        <input :value="totalItems" class="total-products" min="1" type="number">
                        <button @click="totalItems++" class="add">+</button> <br>
                        
                        <!-- ADD ITEM TO CART -->
                        <button @click="updateUserCart" class="buy-btn">add to cart</button>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script setup>
import {onMounted} from 'vue'

// onMounted(()=>{
//     localStorage.removeItem('data')
// })

//function to show additional description of products
function arrowClicked(){
    document.querySelector('.overview-arrow').classList.toggle('arrowClicked')
    document.querySelector('.overview-content').classList.toggle('showOverviewContent')
}



//access the client side
if (process.client){
   var basket = JSON.parse(localStorage.getItem("data")) || [];
    var cartItemContainer =document.querySelector('.cart-item');
    // localStorage.removeItem('data')
    // localStorage.clear()
}

//variable to hold the total items user wants to buy
let totalItems = ref(1)


const parameter = useRoute()
let productID = parameter.params.product


const {data} = await useFetch(`/api/products/${productID}`)

let productName =await data.value[0].title
useHead({
    title:productName
})
function updateUserCart(event){
    const clickedItem =event.target.parentNode

    const imageContainer = clickedItem.parentNode

     const clickedImage =imageContainer.querySelector('#aic-image').src
     const clickedItemPrice =imageContainer.querySelector('.item-price').textContent

     const clickedItemTitle = clickedItem.querySelector('.product-title').textContent

     const clickedItemTotal = clickedItem.querySelector('.total-products').value
     
     let itemTotalPrice = Number(clickedItemPrice) * Number(clickedItemTotal)

   
     let addItem =`
     <div style="border-bottom:1px solid gainsboro;position:relative;display:flex;justify-content:space-between;padding:1rem 2rem;align-items:flex-end;" class="cart-item-data">
                <div class="cart-image-name">
                    <img style="width:6rem;height:6rem" class="cart-image" src="${clickedImage}" alt="cart item image">
                    <p style="padding:0 1rem;font-weight:bold;color:black" class="cart-item-name">${clickedItemTitle}</p>

                </div>
            
                <div class="cart-item-price-container">
                    <span class="remove-cart-item" style="cursor:pointer;position: absolute;top: 0; font-weigh:bolder;font-size:2.4rem;color:black;">-</span>
                    <p style="font-weight:bold;color:black;white-space:nowrap;" class="cart-item-price sum">$<span class="price-span"> ${itemTotalPrice}</span></p>

                </div>

            </div>
        `

    basket.push({
        cartItem:addItem
    })
    
   
    localStorage.setItem("data", JSON.stringify(basket));
   
    //function to add the items in the basket to the cart
    addItemsToCartFunc()
    

    let pricesTags = document.querySelectorAll('.price-span')

    let ttl  = 0 //total for items in the cart
    pricesTags.forEach((element)=>{
            let price = Number(element.textContent)
            ttl += price
        })

    document.querySelector('.cart-total-amount').textContent ='$'+ttl


}

// function addItemToCart(event){
//     let cartItemContainer =document.querySelector('.cart-item')
//     const clickedItem =event.target.parentNode

//     const imageContainer = clickedItem.parentNode

//      const clickedImage =imageContainer.querySelector('#aic-image').src
//      const clickedItemPrice =imageContainer.querySelector('.item-price').textContent

//      const clickedItemTitle = clickedItem.querySelector('.product-title').textContent
     
//      const clickedItemTotal = clickedItem.querySelector('.total-products').value
     
//      let itemTotalPrice = Number(clickedItemPrice) * Number(clickedItemTotal)


//      let addItem =`
//     <div style="display:flex;justify-content:space-between;padding:1rem 2rem;align-items:flex-end;" class="cart-item-info">
//         <div class="cart-image-name">
//             <img style="width:6rem;height:6rem" class="cart-image" src="${clickedImage}" alt="cart item image">
//             <p  style="padding:0 1rem;font-weight:bold;color:black" class="cart-item-name">${clickedItemTitle}</p>

//         </div>
    
//         <div class="cart-item-price-container">
//             <p style="font-weight:bold;color:black" class="cart-item-price">${itemTotalPrice}</p>

//         </div>

//     </div>
//     `
//     cartItemContainer.innerHTML+=addItem

//        let pricesTags = document.querySelectorAll('.cart-item-price')
 
//        let ttl  = 0
//     pricesTags.forEach((element)=>{
//             let price = Number(element.textContent)
//             ttl += price
//         })
    
//     document.querySelector('.cart-total-amount').textContent =ttl


// }


//function to add/remove items from the cart
function addItemsToCartFunc(){
  

    cartItemContainer.innerHTML = ''
    basket.forEach(item=>{
        cartItemContainer.innerHTML+=item.cartItem //add items to the cart
    })


    //selecting all the buttons to remove items from the cart when clicked
    let removeCartItemIcon = document.querySelectorAll('.remove-cart-item')
    removeCartItemIcon.forEach(element => {
        element.addEventListener('click',(event)=>{
            let d = event.target.parentNode.parentNode

            d.remove()
            
        })
    });
    


}



</script>


<style lang="scss" scoped>

.cart-section-wrapper{
    max-width: 1000px;
    margin: 10rem auto;
.cart-section{
    padding: 2rem 3rem;
    .cart-container{
        display: grid;
        grid-template-columns: 1fr 1fr;
        align-items: center;
        
        .image-container{
            margin-right:5rem;
            border-left: 1px solid gainsboro;
            border-right: 1px solid gainsboro;
            padding: 1rem;
            display: grid;
            place-items: center;
            grid-template-columns: 1fr;
            img{
                width: 90%;
                object-fit: cover;
                height: 100%;
            }

            span{
                text-align: center;
                font-weight: bold;
                text-decoration: underline;
                text-decoration-thickness: 2px;
                text-decoration-color: var(--bgColor);
                font-size: 1.5rem;
                opacity: .9;
                margin: 1rem 0;
            }
            .ov-container{
                margin: 2rem 0 1rem 0;
                    cursor: pointer;
                    border-bottom: 1px solid rgb(34, 32, 32);
                    border-top: 1px solid rgb(34, 32, 32);
                    display: flex;
                    align-items: center;
                    h2{
                        opacity: .8;
                        font-size: 1.4rem;
                    }
                    .overview-arrow{
                        width: 0;
                        margin: 0 0.4rem;
                        
                        height: 0;
                        border-left: 7px solid transparent;
                        border-right: 7px solid transparent;
                        border-top: 7px solid rgb(79, 73, 73);
                        transition: all 0.2s ease;
                    }
                    .arrowClicked{
                        transform: rotate(180deg);
                    }
                }
            .product-overview{
                margin:1rem auto;
                ul{
                    display: none;
                    li{
                    opacity: .9;
                    font-size: 1.2rem;
                    font-weight: 500;
                    padding: .2rem .5rem;
                    list-style-type:none;
                    &::before{
                        content: "\2023"; 
                        color: var(--webColor); 
                        font-weight: bold; 
                        display: inline-block;
                        width: .8rem; 
                        margin-left: -1rem; 
                    }
                }
                } 
                .showOverviewContent{
                    display: block;
                }
            }
        }
        .product-details{
            .product-title{
                font-size: 1.7rem;
                opacity: .9;
            }
            .product-description{
                font-size: 1.3rem;
                opacity: .9;
                margin: 1rem 0;
            }

            
    
            .add, .subtract{
                all: unset;
                font-weight: bolder;
                font-size: 1.4rem;
                margin:0 .8rem;
                cursor: pointer;
                background-color: gainsboro;
                border: 1px solid gainsboro;
                padding: .5rem .8rem;
            }
            input{
                padding: .5rem;
                color: black;
                border: 1px solid gainsboro;
                font-weight: bolder;
                background-color: white;
                text-align: center;
                width: 5rem;
                
            }
            .buy-btn{
                display: block;
                all: unset;
                cursor: pointer;
                border-radius: .1rem;
                color: white;
                background-color: black;
                margin-top: 2rem;
                font-weight: bold;
                padding: 1rem 2.5rem;
                font-size: 1.2rem;
            }
        }
    }

}

}

@media screen and (max-width:650px) {
    .cart-section-wrapper .cart-section .cart-container{
        display: flex;
        flex-direction: column;
        align-items: center;

        .image-container{
            img{
                width:100%;
            }
        }

        .product-details{
            .product-title{
                font-size: 1.5rem;
            }
            .product-description{
                font-size: 1.2rem;
            }
        }
        .image-container{
            margin-bottom: 2rem;
        }
    }
}

</style>