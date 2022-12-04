<template>
    <div>

        <div class="pp-outer-div">
            <div class="pp-container">
                <div class="pp-content">
                    <h1>Exceed Privacy Policy</h1>

                    <div class="policy-container">

                        <h2>What personal information do we collect?</h2>

                        <div class="pp-info-div">
                            <p>PI means information relating to an identifiable, living, natural person, and where it is applicable, an identifiable, existing juristic person, including: information relating to race, gender, marital status, ethnic or social origin, age, disability (mostly as required by labour and credit laws); an identifiable number, e-mail address, physical address, telephone number, identification number, location information, online identifier; biometric information; personal preferences, views or opinions; correspondence of a private or confidential nature; and a name if it appears with other PI relating to you or if disclosing your name itself will reveal information about you.</p>
                        
                            <p>The PI we collect about you is dependent on:</p>

                            <ul>
                                <li>The transaction you are completing</li>
                                <li>The reason you are communicating with us</li>
                                <li>The media used to communicate with us</li>
                            </ul>

                            <h2>When do we collect your Personal information</h2>
                            <p>We collect three types of information from you:</p>
                            <ul>
                                <li>Information that you provide to us</li>
                                <li>Information we collect or receive from others;</li>
                                <li>Information that is derived through automated tracking mechanisms and technology.</li>
                            </ul>

                            <p>Below are the details on when we collect your information</p>

                            <ul>
                                <li>Voluntarily provide us with information when you interact with us, for example when you send us online enquiries, or you subscribe to or consent to receiving newsletters or other communications from us, call us etc.</li>
                                <li>Register an online profile on our websites or apps to purchase goods.</li>
                                <li>Agree to the terms and conditions of credit applications and other products and services that contain provisions dealing with the use or disclosure of your personal information</li>
                                <li>Apply for vacancies on our Careers portal or through emails</li>
                                <li>Make general enquiries, lodge complaints, and communicate with us.</li>
                            </ul>

                            <h2>How we use and process your Personal Information</h2>
                            <ul>
                                <li>Process orders</li>
                                <li>Deliver products and services</li>
                                <li>Develop products and services</li>
                                <li>Process payments and communicate with you about your orders, products, services and promotional offers</li>
                                <li>Keep and update our database and your accounts with us</li>
                                <li>Propose a unique and targeted navigation experience</li>
                                <li>Prevent and detect fraud and abuse on our website</li>
                                <li>Communicate with you regarding new product features, personalized products, services, offers and events that we think may be of interest to you</li>
                                <li>Analyze, develop, continually improve and enhance the use, functionality and performance of our websites and apps, products and services to manage the security of our sites, networks and systems;</li>
                                <li>Comply with applicable laws, including our obligations to make disclosures to authorities, regulators and government bodies;</li>
                                <li>Engage in our legitimate business and related interests, including but not limited to detecting and preventing fraud and conducting our business as a fashion-value retailer.</li>
                            </ul>
                        </div>
                 
                 
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

useHead({
    title:'Exceed | Privacy Policy'
})

</script>

<style lang="scss" scoped>

.pp-outer-div{
    // background-color: white;
    margin-top: 8rem;
    .pp-container{
        max-width: 800px;
        margin: 0 auto;
        padding: 5rem 1rem;
        .pp-content{
            h1{
                color:black;
                font-size: 1.7rem;
                padding: .5rem;
            }

            h2{
                font-size: 1.4rem;
                padding: 2rem .5rem;
            }
            p{
                // opacity: .9;
                font-size: 1.2rem;
                font-weight: 500;
                line-height: 160%;
                padding: .5rem .5rem;
            }
            ul li{
                // opacity: .9;
                font-size: 1.2rem;
                font-weight: 500;
                line-height: 160%;
                padding: .5rem .5rem;
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
    }
}

</style>