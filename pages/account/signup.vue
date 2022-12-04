<template>
    <div>

        <main class="main">
            <div class="signup-form-container">
                <h3 class="sign-up-title">Sign Up</h3>
                <div class="signup-form">
                    <form action="" id="signup-form">
                        
                        <div class="username-div">
                            <label for="">Username</label>
                            <!-- <input required id="user-name" placeholder="Username" type="text"> -->
                            <input required id="user-name" placeholder="" type="text">
                        </div>

                        <div class="email-div">
                            <label for="email">Email</label>
                            <input required id="signup-email" type="email" placeholder="">
                        </div>

                        <div class="tel-div">
                            <label for="">Phone Number</label>
                            <input required type="text" placeholder="">
                        </div>

                        <div class="password-div">
                            <label for="">Password</label>
                            <input required id="user-password" type="password" placeholder="">
                        </div>

                        <div class="confirm-password-div">
                            <label for="">Confirm Password</label>
                            <input required id="confirm-user-password" type="password" placeholder="">
                        </div>

                        <div class="btn-container">
                            <button type="submit">Sign Up</button>
                        </div>
                    </form>
                    <p>Have an account? <NuxtLink to="/account/login">Login</NuxtLink> </p>
                </div>
            </div>
        </main>

    </div>
</template>

<script setup>

useHead({
    title:'Exceed | Register'
})

</script>

<style lang="scss" scoped>

.main{
    
    max-width: 500px;
    padding: 3rem;
    margin: 8rem auto;
    // border: 2px solid;
    display: grid;
    height: calc(100vh - 8rem);
    .signup-form-container{
        // border: 2px solid;
        h3{
            font-size: 1.5rem;
            font-weight: 500;
            text-align: center;
            margin-bottom: 3rem;
        }
        .signup-form{

            #signup-form{

                div{
                    label{
                        font-size: 1.2rem;
                        opacity: .8;
                    }
                    input{
                        background-color:var(--bgColor);
                        border-bottom: 1px solid black;
                        width: 100%;
                        color: black;
                        &:focus{
                            outline: none;
                            border-bottom: 1px solid black;
                        }
                    }

                    button{
                        all: unset;
                        text-align: center;
                        padding: 1rem .2rem;
                        font-size: 1.2rem;
                        font-weight: 500;
                        text-transform: capitalize;
                        background-color: black;
                        cursor: pointer;
                        color: white;
                        width: 100%;
                        margin-top: 2rem;

                        &:hover{
                            opacity: .8;
                        }
                    }
                    
                }
            }
        }
        p{
            font-size: 1.2rem;
            font-weight: 500;
            margin-top: 2rem;
        }
        a{
            color: black;
            // font-weight: bold;
            font-size: 1.2rem;
        }
    }
}


</style>