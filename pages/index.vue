<template>
    <div>
        <!-- <TheHeader/> -->
        <main class="main">

            <div class="main-container">
                <div class="main-content">
                    <div class="image-container">
                        <div class="text-container">
                            <div class="t-content">
                                <h1>Redefining clothing, <br> with a focus on quality </h1>
                                <p>For over 2 years, we have been making it easy for you to get amazing designer clothes.  </p>
                                
                                
                                <div class="hero-btn">
                                    <NuxtLink to="/products" class="browse-categories">
                                        <button>browse products</button>
                                    </NuxtLink>

                                    <div class="btn-hover"></div>
                                </div>
                            </div>
                        </div>
                        <!-- <img src="../assets/images/image3.jpg" alt="hero image" class="hero-img"> -->
                    </div>
                </div>
            </div>
        </main>
        <section class="tsection">

            <div class="ts-container">
                <div class="tiny-img">
                    <img src="../assets/images/img.png" alt="image of a man shopping for clothes" class="tiny-image">
                </div>
                <div class="ts-content">

                    <div class="ts-header">
                        <h1>The web's one-stop shop for apparel of all kinds</h1>
                    </div>
                    <div class="ts-p">
                        <p>We offer a wide selection of blank apparel styles, brands, and sizes for crafting,
                            and just wearing every day.Our goal is to satisfy the apparel needs of online shoppers with
                            plenty of options, a user-friendly site and affordable prices.
                        </p>
                        <!-- <p>From cozy fleeces, to casual t-shirts and sweat-wicking athletic wear, Exceed has it all.</p> -->
                        <!-- <p>Explore clothing options for every member of the family at Clothing Shop Online.</p> -->
                    </div>

                </div>
            </div>
        </section>

        <section class="addn">
            <!-- <video autoplay loop  src="https://image.uniqlo.com/UQ/ST3/us/imagesother/home/L1_large_UniqoloXMarni_Hero_2x1_video.mp4"></video> -->
            <div class="addn-section-container">
                <div class="addn-content">
                    <div class="imgt-wrapper">
                        <div class="grid-container">

                            <div class="grid-info">
                                <div class="img-container">
                                    <img src="../assets/images/image6.jpg" alt="exceed image">
                                    <p>We know what you want. Browse through the categories and find what you love. </p>

                                </div>
                                <!-- <div class="text-div">

                                </div> -->
                            </div>
                            

                            <div id="grid-info-df" class="grid-info">
                                <div class="img-container">
                                    <img src="../assets/images/image7.jpg" alt="exceed image">
                                    <p>Don't miss out! Massive discounts on the first Monday of every month.</p>
                                    
                                </div>
                            </div>
                            

                            <div class="grid-info">
                                <div class="img-container">
                                    <img src="https://images.pexels.com/photos/7679868/pexels-photo-7679868.jpeg?auto=compress&cs=tinysrgb&w=600" alt="exceed image">
                                    <p>Visit our store and shop with us.</p>

                                </div>
                                
                            </div>
                    
                    
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- <TheFooter/> -->
        

    </div>
</template>

<script setup>






useHead({
    title:'Exceed | Apparel Shop ',

})


// 
</script>
<style lang="scss" scoped>



.main{
    height: 85vh;
    width: 100vw;
    .main-container{
        height: 100%;
        width: 100%;
        .main-content{
            height: 100%;
            width: 100%;
            .image-container{
                height: 100%;
                width: 100%;
                background-image: url('../assets/images/image4.jpg');
                background-size: 100% 100%;
                background-repeat: no-repeat;
                background-size: cover;
                background-position: top;   
                
           
                
                .text-container{
                padding: 2rem;
                    display: flex;
                    height: 100%;
                    align-items: center;
                    max-width: var(--maxWidth);
                    margin: 2rem auto;
                    .t-content{
                        // color: white;
                        color: whitesmoke;
                        h1{
                            text-transform: capitalize;
                            font-weight: 600;
                            font-size: 3rem;
                        }
                        p{
                            font-size: 1.4rem;
                            font-weight: 500;
                        }

                        .hero-btn{
                            margin-top: 3rem;
                            position: relative;
                         
                            a{
                                color: rgb(0, 0, 0);
                                font-size: 1.2rem;
                                font-weight: 500;

                                text-decoration: none;

                                button{
                                    all: unset;
                                    padding: 1.3rem 2.4rem;
                                    background-color: white;
                                    color: black;
                                    font-weight: 600;
                                    
                                }
                            }

  
                        }
                    }
                }
            }
        }
    }
}


.tsection{
    max-width: 940px;
    margin: 4rem auto;
    .ts-container{
        padding: 2rem;
        display: flex;
        border-right: 1px solid gainsboro;
        align-items: center;
        border-left: 1px solid gainsboro;
        .tiny-img{
            margin: 0 1rem;
            background-color:#9BB1F2;
            img{
                width: 20rem;
            }
        }
        .ts-content{
            padding: 0 1rem;
            .ts-header{
                h1{
                    opacity: .8;
                    font-size: 2.5rem;
                    margin-bottom: 1rem;
                }
            }

            .ts-p{
                p{
                    font-size: 1.2rem;
                    font-weight: bold;
                    opacity:.9;

                    &:nth-child(2){
                        padding-top: 1rem;
                    }
                }
            }
        }
    }
}

//section
.addn{
    max-width: var(--maxWidth);
    max-width: 1100px;
    margin: 3rem auto;
    padding: 1rem;
    .addn-section-container{
        .addn-content{

            .imgt-wrapper{
                .grid-container{
                    display: grid;
                    align-items: center;
                    grid-template-columns: repeat(auto-fit, minmax(24rem,1fr));
                    .grid-info{
                        margin: 1rem;
                        .img-container{
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            width: 100%;

                            img{
                                height:24rem;
                                width: 100%;
                                object-fit: cover;
                            }
                            p{
                                width:100%;
                                margin-top: 1.6rem;
                                font-weight: bold;
                                font-size: 1.2rem;
                            }
                        }

                      
                    }
                    // .grid-info{
                    //     margin: 8rem 2rem;
                    //     display:grid;
                    //     grid-template-columns:40% 60%;
                    //     align-items:center;

                    //     .img-container{
                    //         width: 100%;
                    //         height: 40rem;
                    //         display: grid;
                    //         place-items: center;

                    //         img{
                    //             height:35rem;
                    //             width:90%;
                    //             object-fit:cover;
                    //         }
                    //     }


                    //     .text-div{
                    //         // border: 2px solid red;
                    //         padding: 1rem 8rem;
                    //         p{
                    //             font-size: 1.5rem;
                    //             font-weight: 600;
                    //         }
                    //     }

                    // }
                }
            }
        }
    }
}

@media screen and (max-width:550px) {

    .main .main-container .main-content .image-container .text-container .t-content{
        h1{
            font-size: 2.5rem;
        }
        p{
            font-size: 1.3rem;
        }
    }

    .tsection .ts-container {
        flex-wrap: wrap;
        justify-content: center;
        .tiny-img{
            margin-bottom: 3rem;
        }
    }
    .addn .addn-section-container .addn-content{
        .imgt-wrapper{
            .grid-container{
                .grid-info{
                    margin: 4rem 0;

                    .img-container{
                        img{
                            width: 80%;
                        }
                        p{
                            width:80%;
                        }
                    }
                } 

            } 
        }
    }
}
</style>