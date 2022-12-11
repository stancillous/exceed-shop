<template>
    <div>
        <header class="header">
            <nav class="nav">
                <div class="logo-container">
                    <div class="hamburger-button">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>

                    <NuxtLink class="logo" to="/">exceed</NuxtLink>
                </div>
                
                <div class="menu-links">
                    <ul>
                        <li> <NuxtLink class="nav-router-links" to="/">home</NuxtLink> </li>
                        <li> <NuxtLink class="nav-router-links" to="/products"> products</NuxtLink> </li>
                        <li>
                            <div id="ctc" class="categories-container">
                                <div class="categories-title-div">
                                    <p class="categories-title">Categories</p>
                                    <div class="categories-arrow"></div>
                                </div>
                                <div class="categories-content">

                                    <NuxtLink class="nav-router-links" to="/products/men">
                                        <img class="nav-img" src="../assets/images/image3.jpg" alt="men clothes category image">
                                        <p>Men</p>
                                    </NuxtLink>
                                    <NuxtLink class="nav-router-links" to="/products/women">
                                        <img class="nav-img" src="https://images.pexels.com/photos/965324/pexels-photo-965324.jpeg?auto=compress&cs=tinysrgb&w=600" alt="women clothes category image">
                                        <p>Women</p>
                                    </NuxtLink>
                                    <NuxtLink class="nav-router-links" to="/products/kids">
                                        <img class="nav-img" src="https://images.pexels.com/photos/1620760/pexels-photo-1620760.jpeg?auto=compress&cs=tinysrgb&w=600" alt="kids clothes category image">
                                        <p>Kids</p>
                                    </NuxtLink>
                                    
                                </div>
                            </div>
                        </li>
                        <li> <NuxtLink class="nav-router-links" to="/policy/privacy-policy">privacy policy</NuxtLink> </li>
 
                        
                    </ul>
                </div>

                <div class="cart-container">

                    <!-- login container -->
                    <div id="login-div-c">
                        <NuxtLink to="/account/login" id="nav-login" class="login-icon">
                            <svg class="Icon Icon--account" role="presentation" viewBox="0 0 20 20">
                                <g transform="translate(1 1)" stroke="currentColor" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="square">
                                    <path d="M0 18c0-4.5188182 3.663-8.18181818 8.18181818-8.18181818h1.63636364C14.337 9.81818182 18 13.4811818 18 18"></path>
                                    <circle cx="9" cy="4.90909091" r="4.90909091"></circle>
                                </g>
                            </svg>
                            <span class="log-t">log in</span>
                        </NuxtLink>


                    </div>

                    <!-- cart container -->
                    <div class="cart-icon">

                        <div class="cart">
                            <div class="icon-div">
                                <svg class="Icon Icon--cart" role="presentation" viewBox="0 0 17 20">
                                 <path d="M0 20V4.995l1 .006v.015l4-.002V4c0-2.484 1.274-4 3.5-4C10.518 0 12 1.48 12 4v1.012l5-.003v.985H1V19h15V6.005h1V20H0zM11 4.49C11 2.267 10.507 1 8.5 1 6.5 1 6 2.27 6 4.49V5l5-.002V4.49z" fill="currentColor"></path>
                                </svg>
                                <span class="cart-t">cart</span>

                            </div>

                            <div class="cart-items-container">
                                <div class="cart-items-div">

                                    <h3 class="cart-title">your cart</h3>
                                    
                                    <div class="cart-item">


                                        <!-- each item in the cart -->

                                    </div>

                                    <div class="cart-total-div">
                                        <h3 class="cart-total-title">Total</h3>
                                        <p class="cart-total-amount">$0</p>
                                    </div>

                                    <div class="checkout-div">
                                        <div class="button-wrapper">
                                            <button>checkout</button>

                                        </div>
                                    </div>
                                    

                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </nav>
        </header>

    </div>
</template>

<script setup>

import { onMounted } from 'vue';

onMounted(allPageFuncs)



// function showCartItems(){
//     let cartdiv = document.querySelector('.cart-item')
    
//     // var cartItems = JSON.parse(localStorage.getItem('data'))
//     let cartItems = JSON.parse(localStorage.getItem('data'))
    
 
//     if(cartItems.length!==0){
//         return cartdiv.innerHTML = cartItems.map((item)=>{
            
//             return `
//             <div class="cart-item-data">
//                 <div class="cart-image-name">
//                     <img src="" alt="cart item image">
//                     <p class="cart-item-name">loremip</p>

//                 </div>
            
//                 <div class="cart-item-price-container">
//                     <span class="remove-cart-item">-</span>
//                     <p class="cart-item-price sum">$<span class="price-span"> 43</span></p>

//                 </div>

//             </div>
//         `
//         //     return `
//         //     <div class="cart-item-data">
//         //         <div class="cart-image-name">
//         //             <img src="${clickedImage}" alt="cart item image">
//         //             <p class="cart-item-name">${clickedItemTitle}</p>

//         //         </div>
            
//         //         <div class="cart-item-price-container">
//         //             <span class="remove-cart-item">-</span>
//         //             <p class="cart-item-price sum">$<span class="price-span"> ${itemTotalPrice}</span></p>

//         //         </div>

//         //     </div>
//         // `
//         })
        






//     }


// }



//funtion for when hamburger button is clicked
function menuLinksFunctions(){
    let menuLinksDiv = document.querySelector('.menu-links')
    let menuButton = document.querySelector('.hamburger-button')

    menuButton.addEventListener('click',()=>{
        menuButton.classList.toggle('hamburgerButtonClicked')
        document.querySelector('.logo').classList.toggle('lightLogo')
        document.querySelector('.menu-links').classList.toggle('showMenuLinks')

        
    })


    //HIDING MENU LINKS DIV WHEN A LINK IS CLICKED
    document.querySelectorAll('.nav-router-links').forEach((link)=>{
        link.addEventListener('click',()=>{
            menuButton.classList.remove('hamburgerButtonClicked')
            document.querySelector('.logo').classList.remove('lightLogo')
            document.querySelector('.menu-links').classList.remove('showMenuLinks')

        })
    })
}

//funtion to show the categories present 
function showNavCategoriesContent(){
    let categoriesDiv = document.querySelector('.categories-container')

    categoriesDiv.addEventListener('click',()=>{
        document.querySelector('.categories-arrow').classList.toggle('arrowClicked')
        document.querySelector('.categories-content').classList.toggle('showNavCategoriesContent')
    })
}


function allPageFuncs(){
    menuLinksFunctions()
    showNavCategoriesContent()
    
}



</script>

<style lang="scss" scoped>

.header{
    color: var(--buttonColor);
    height: 8rem;
    background-color: var(--navColor);
    background-color: var(--bgColor);
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    z-index: 54;
    border-bottom: 1px solid rgba(0, 0, 0, 0.297);
    .nav{
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: var(--maxWidth);
        padding: 0 2rem;
        margin: 0 auto;
        .logo-container{
            padding: .5rem;
            display: flex;
            align-items: center;
            .hamburger-button{
                cursor: pointer;
                display: none;

                span{
                    width: 2.5rem;
                    opacity: .8;
                    height: .3rem;
                    background-color: black;
                    margin: .2rem;
                    padding: .1rem;
                    display: block;

                }
            }
            .logo{
                text-transform: capitalize;
                font-weight: bolder;
                text-decoration: none;
                color: black;
                font-size: 2rem;
                font-weight: bolder;
                padding:0 2rem;
            }
        }

        .menu-links{
            .router-link-exact-active{
                color: var(--buttonColor);
            }

            ul li{
                list-style: none;
                display: inline-block;
                a{
                    color: black;
                    padding: .2rem 1rem;
                    font-size: 1.3rem;
                    text-transform: capitalize;
                    font-weight: bold;
                    text-decoration: none;
                    opacity: .8;
                }
                
                .categories-container{
                    position: relative;
                    cursor:pointer;

                    .categories-title-div{
                        position: relative;
                        display: flex;
                        // padding-right: 1rem;
                        justify-content: space-between;
                        align-items: center;
                        .categories-title{
                            opacity: .8;
                            font-weight: bold;
                            color: black;
                            font-size: 1.3rem;
                            padding: .2rem;
    
                        }
                        .categories-arrow{
                            width: 0;
                            margin:0 .4rem; 
                            height: 0; 
                            border-left: 7px solid transparent;
                            border-right: 7px solid transparent;
                            border-top: 7px solid rgb(79, 73, 73);
                            transition:all .2s ease;
                        }
                    }
                    .categories-content{
                        // display: none;
                        border: 1px solid gainsboro;
                        position: absolute;
                        top: 100%;
                        left: 50%;
                        height: 23rem;
                        width: 62rem;
                        background-color: var(--navColor);
                        z-index: 3;
                        transform: translate(-50%);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        opacity: 0;
                        visibility: hidden;

                       
                    }

                    //NUXT LINKS
                    a{
                        display: block;


                        .nav-img{
                            width: 8rem;
                            height: 8rem;
                            object-fit: cover;
                        }
                    }

                }
            }
        }

        
        .cart-container{
            padding:0 1rem ;
            padding: 1rem;
            position: relative;
            display: flex;
            
             .cart-icon{
                
                .cart{
                    position: relative;
                    //SHOWING ITEMS IN CART WHEN THIS IS HOVERED
                    &:hover .cart-items-container{
                            opacity: 1;
                            visibility: visible;
                        }

                        
                    .icon-div{  //div with cart icon and name
                        display: flex;
                        padding: 0 1rem;
                        flex-direction: column;
                        text-transform: capitalize;
                        cursor: pointer;

                        span{
                            color: black;
                            font-size: 1.1rem;
                        }
                    }

                    
                    .cart-items-container{//div to show items in the cart
                        position: absolute;
                        top: 100%;
                        right: -30%;
                        opacity: 0;
                        visibility: hidden;
                        transition: all .4s ease;
                        .cart-items-div{
                            border: 1px solid rgba(0, 0, 0, 0.376);
                            background-color: white;
                            
                            .cart-title{
                                color: black;
                                text-transform: capitalize;
                                text-align: center;
                                margin: 1rem 0 2rem 0;
                            }
                            
                            .cart-item{  
                                overflow-y: scroll;
                                width:26rem;
                                height:50vh;
                                overflow-x: hidden;
                            }

                            .cart-total-div{//element showing cart total
                                display: flex;
                                justify-content: space-between;
                                color: black;
                                margin: 2rem;
                                font-weight: bolder;
                                font-size: 1.2rem;
                                padding-top: .4rem;
                                border-top: 1px solid rgba(0, 0, 0, 0.819);

                                
                            }

                            .checkout-div{ 
                                display: grid;
                                place-items: center;
                                margin: 3rem 0;

                                .button-wrapper{
                                    width: 80%;

                                    button{
                                        all: unset;
                                        background-color: var(--buttonColor);
                                        padding: 1rem 0;
                                        width: 100%;
                                        color: white;
                                        font-weight: bolder;
                                        font-size: 1.2rem;
                                        text-align: center;
                                        cursor: pointer;
                                     }
                                    }
                            }
                        }
                    }
                }
             }
            
            
            a{
                // color: black;
                text-decoration: none;
                font-size: 1rem;
            }

            svg{
                width: 2rem;
                color: black;
                height: 2rem;
            }

            
            .login-icon{
                display: flex;
                flex-direction: column;
                text-transform: capitalize;
                margin: 0 1rem;
                align-items: flex-start;
                padding: 0 .4rem;

                span{
                    color: black;
                    font-size: 1.1rem;
                }

            }

        }
    }
}

//class to be toggled to the arrow on the nav when the arrow is clicked
.header .nav .menu-links ul li .categories-container .categories-title-div .categories-arrow.arrowClicked{
    transform: rotate(180deg);
}

.header .nav .menu-links ul li .categories-container .categories-content.showNavCategoriesContent{
    opacity:1;
    visibility: visible;
}




//show login div when the login icon is hovered
#login-div-c:hover .login-container{
    opacity: 1;
    visibility: visible;
}

//class to change color of logo
.header .nav .logo-container .logo.lightLogo{
    color:white;
}

//class to be toggled to the hamburger button when clicked
.header .nav .logo-container .hamburger-button.hamburgerButtonClicked{
    span{
        background-color: white;
        width: 2.2rem;
        // height: .2rem;

        &:nth-child(1){
                transform: translateY(.4rem) rotate(45deg);
    
        }
        &:nth-child(2){
            opacity: 0;
        }

        &:nth-child(3){
            transform: translateY(-.6rem) rotate(-45deg);
        }
    }
}

//class to show menu links when menu button is clicked
.header .nav .menu-links.showMenuLinks{
    clip-path: inset(0 0 0 0);
}



@media screen and (max-width:650px) {
    .header .nav{
        .logo-container{
            z-index: 122;
            .hamburger-button{
                display: block;
                
                
            }
            

            .logo{
                // color: white;
                font-size: 1.7rem;
            }
        }

        .menu-links{
            // display: none;
            height: 100vh;
            background-color: black;
            position: absolute;
            top: 0;
            left: 0;
            width: 70vw;
            display: grid;
            place-items: center;
            color: white;
            clip-path: inset(0 100% 0 0);
            transition: all .3s ease;


            ul{
                height: 50%;
                width: 100%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                padding-left: 2rem;
                li{
                    a{
                        color: white;
                        opacity: 1;
                    }
                    .categories-container{

                        .categories-title-div{
                            justify-content:flex-start;
                            .categories-title{
                                color: white;
                                opacity: 1;
                                padding-left: 1rem;
                            }
                            .categories-arrow{
                            border-top: 7px solid rgb(226, 214, 214);
                            margin-left:1rem;
                            margin-top:.2rem;
                              
                            }
                        }

                        .categories-content{
                            flex-direction: column;
                            // align-items: flex-end;
                            justify-content: flex-start;
                            height: auto;
                            padding: 1rem;
                            width:100%;
                            background-color: whitesmoke;
                            
                            &::before{
                                content:'';
                                display:none;
                            }
                        }

                        a{
                            color:black;
                            border-bottom: 1px solid;
                            width:100%;
                            
                            p{
                                display: block;
                                padding: .7rem 0;
                            }

                            .nav-img{
                                display: none;
                            }
                        }
                    } 
            }
            }
        }
     
    }
}
</style>
