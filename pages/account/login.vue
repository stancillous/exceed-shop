<template>
    <div>

        <div class="login-main-section">
            <div class="lms-wrapper">

                <h2 class="lg-title">Login</h2>
                <div class="login-container">
                    <div class="login-content">
                        <form action="">

                            <div class="email-container">
                                <label for="user-email">Email Address</label>
                                <input required placeholder="" class="user-email" type="email">
                            </div>
                            
                            <div class="password-container">
                                
                                <div class="password-wrapper">
                                    <label for="passcode-input">Password</label>
                                    <input required id="passcode-input" placeholder="" class="user-password" type="password">
                                </div>
                            </div>
        
                            <div class="login-button-wrapper">
                                <button type="submit">log in</button>
                                
                            </div>
                        </form>
                        <p>Don't have an account? <NuxtLink to="/account/signup">Sign up.</NuxtLink> </p>
                    </div>
                </div> 
            </div>
        </div>
    </div>
</template>

<script setup>

useHead({
    title:'Exceed | Account Login'
})

</script>

<style lang="scss" scoped>

.login-main-section{
    margin:0 auto;
    height: calc(100vh - 8rem);
    max-width: var(--maxWidth);
    display: grid;
    place-items: center;
    padding: 4rem 0;
    // background-color: white;
    .lms-wrapper{
        .lg-title{
            font-weight: 600;
            font-size: 1.7rem;
            text-align: center;
            margin: rem 0;
        }
        .login-container{
            padding: 4rem 2.5rem;
            min-width: 38rem;
           
            label{
                font-size: 1.2rem;
            }
            input{
                background-color: transparent;
                padding: 1rem .4rem;
                border: 1px solid rgba(0, 0, 0, 0.375);
                font-weight: 400;
                font-size: 1.3rem;
                width: 100%;
                color: black;
                margin-bottom: 2rem;
                
                &:focus{
                    border: 1px solid rgb(0, 0, 0);
                }
            }



            .login-button-wrapper{
                margin-bottom: 1rem;
                display: flex;
                button{
                    all: unset;
                    padding: .8rem 2.5rem;
                    font-size: 1.3rem;
                    // font-weight: bold;
                    text-transform: capitalize;
                    background-color: black;
                    cursor: pointer;
                    color: white;
                    width:100%;
                    margin-bottom: 1rem;
                    text-align: center;
                    &:hover{
                        opacity: .8;
                    }
                }

                

            }

            p{
                font-size: 1.2rem;
                font-weight: 500;
                color: black;
                // opacity: .8;

                a{
                    opacity: 1;
                    color: black;
                    font-size: 1.2rem;
                }
            }
        }
    }
}



</style>