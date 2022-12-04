<template>
    <div>
        <footer class="footer">
            <div class="footer-container">
                <div class="footer-content">

                    <div class="quick-links">
                        <!-- <p>quick links</p> -->
                        <NuxtLink to="/">About us</NuxtLink>
                        <NuxtLink to="/">contact us</NuxtLink>
                        <NuxtLink to="/">FAQs</NuxtLink>
                        <NuxtLink to="/">Privacy policy</NuxtLink>
                        <NuxtLink to="/">Terms of service</NuxtLink>
                    </div>

                    <div class="social">
                        <a href="">Instagram</a>
                        <a href="">Linkedin</a>
                        <a href="">Twitter</a>
                        <a href="">Facebook</a>
                    
                    </div>

                    <div class="newsletter">
                        <p>Back in stock notifications. <br> Join our newsletter.</p>
                        
                        <form action="" id="join-newsletter-form">
                            <input required type="email" placeholder="Your Email Address" id="email-join">
                            <button class="newsletter-btn" type="submit">launch</button>

                        </form>
                    </div>
                </div>

                <div class="footer-cc">
                    <div class="alr-div">
                        <p>Exceed. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>

    </div>
</template>

<script setup>

onMounted(joinedNewsletter)

function joinedNewsletter(){
    document.getElementById('join-newsletter-form').addEventListener('submit',(e)=>{
        e.preventDefault()
        document.querySelector('.newsletter-btn').textContent = 'thanks for subscribing'
    })
}

</script>

<style lang="scss" scoped>
.footer{
    background-color: black;
    // height: 50rem;
    padding: 3rem 0;
    color: white;
    .footer-container{
        max-width: var(--maxWidth);
        margin: 0 auto;
        padding: 2rem;
        height: 100%;
        justify-content: space-evenly;
        display: flex;
        flex-direction: column;
        .footer-content{
            margin-top: 2rem;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            height: 100%;
            width: 100%;


            p{
                text-transform: capitalize;
                font-size: 1.2rem;
                margin-bottom: 4rem;
                font-weight: 500;
                opacity: .8;
                
             
            }
            a{
                    color: white;
                    padding: .2rem 0;
                    font-size: 1.2rem;
                    opacity: .9;
                    text-transform: capitalize;
                    text-decoration: none;
                    display: block;
                    line-height: 2rem;
                    font-weight: 500;
                }

        
            button{
                all: unset;
                border: 1px solid whitesmoke;
                padding: .6rem 2.3rem;
                margin: 0 .4rem;
                cursor: pointer;
                text-transform: uppercase;
            }
            input{
                font-size: 1.2rem;
                color: white;
            }
        }

        .footer-cc{
            display: grid;
            place-items: center;
            .alr-div{
                p{
                    // font-weight: bold;
                    opacity: .8;
                    margin: 2rem 0;
                }
            }
        }
    }
}


@media screen and (max-width:600px) {
    .footer .footer-container .footer-content{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;

        div{
            padding: 2rem;
            margin: 2rem 0;
        }
        
    }
}

</style>