// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

    app:{

        head:{
            title:'Exceed | Apparel Shop',
            meta:[
                {charset:"utf-8"},
                {"http-equiv":"x-ua-compatible", content:"IE:edge"},
                {name:"viewport", content:"width:device-width,initial-scale:1.0"},
                {name:"description", content:"Exceed is the web's one-stop shop for affordable apparel of all kinds"},
                {name:"theme-color",content:"##eaebed"},

            ],
            link:[
                {rel:"apple-touch-icon", sizes:"180x180", href:"/apple-touch-icon.png"},
                {rel:"icon", type:"image/png", sizes:"32x32", href:"/favicon-32*32.png"},
                {rel:"icon", type:"image/png", sizes:"16x16", href:"/favicon-16*16.png"},
                {rel:"manifest", href:"/site.webmanifest"}
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

