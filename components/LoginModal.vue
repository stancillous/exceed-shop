<template>
    <div>
        <div class="addmodal">
            <div class="adm-lg">
                <div class="adm-lg-container">
                    <div class="content">
                        <div class="close-modal-div">
                            <span class="close-modal">
                                <svg width="24" height="24" viewBox="0 0 24 24" focusable="false" class="fr-ec-icon fr-ec-icon--default fr-ec-button-icon__icon"><title>Close</title><g fill-rule="evenodd"><polygon points="21 4.6 19.4 3 12 10.4 4.6 3 3 4.6 10.4 12 3 19.4 4.6 21 12 13.6 19.4 21 21 19.4 13.6 12"></polygon></g>
                                </svg>
                            </span>
                        </div>
                        <h2>Login</h2>
                        <p>Please login to your account to add items to wish list</p>
                       
                        <div class="login-container">
                            <NuxtLink to="/account/login" class="modal-btn">login</NuxtLink>
                            <div class="arrow-div">
                                <div class="arrow"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>
onMounted(pageFunctions)

function pageFunctions(){
    let addtoWishlistIcons= document.querySelectorAll('.add-to-wishlist')
    let modal = document.querySelector('.addmodal')

   
    addtoWishlistIcons.forEach(item=>{
        item.addEventListener('click',()=>{
            modal.classList.add('showModal')

            //close the modal if user clicks outside of the div showing the modal
            modal.addEventListener('click',()=>{
                modal.classList.remove('showModal')
            })
        
        })
    })

    let closeModal = document.querySelector('.close-modal')
    closeModal.addEventListener('click',()=>{
        modal.classList.remove('showModal')

    })


}
</script>

<style lang="scss" scoped>


.addmodal{
    position: fixed;
    height: 100%;
    width: 100%;
    top:0;
    left: 0;
    display: grid;
    place-items: center;
    z-index: 23;
    background-color: rgba(0, 0, 0, 0.552);
    opacity: 0;
    visibility: hidden;
    transition: all .4s ease;
    .adm-lg{
        border: 1px solid black;
        background-color: whitesmoke;
        color: black;
        padding: 2rem;
        margin: 1rem;
        .adm-lg-container{
            .content{
                .close-modal-div{
                    border-bottom: 1px solid gainsboro;
                    margin-bottom: 0.5rem;
                    text-align: right;
                    .close-modal{
                        font-weight: bolder;
                        font-size: 2rem;
                        cursor: pointer;

                    }
                    
                }
                h2{
                    font-weight: 600;
                    
                }
                p{
                    font-weight: 500;
                    font-size: 1.3rem;
                    opacity: 0.8;
                    padding-top: 1rem;
                }
                .login-container{
                    margin: 2rem 0;
                    display: flex;

                    .modal-btn{
                        all: unset;
                        padding: .8rem 2.5rem;
                        font-size: 1.2rem;
                        font-weight: bold;
                        text-transform: capitalize;
                        background-color: black;
                        cursor: pointer;
                        color: white;

                        &:hover{
                            opacity:.8;
                        }
                    }
                }
            }
        }
    }
}

//class to show modal
.addmodal.showModal{
    opacity: 1;
    visibility: visible;
}

</style>