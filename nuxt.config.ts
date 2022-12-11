// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    app:{

        head:{
            title:'Exceed | Apparel Shop',
            meta:[
                {charset:"utf-8"},
                {"http-equiv":"x-ua-compatible", content:"IE:edge"},
                { name: 'viewport', content: 'width=device-width, initial-scale=1' },
                {name:"description", content:"Exceed is the web's one-stop shop for affordable apparel of all kinds"},
                {name:"theme-color",content:"#eaebed"},

            ],
            noscript:[
                { children:"We're sorry but stanceray.com doesn't work properly without JavaScript enabled. Please enable it to continue."}
            ]
        }
    },

    css:[
        "@/assets/styles/main.css"
    ]
})

