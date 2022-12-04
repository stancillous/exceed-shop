
import { goods } from "../goods"

export default defineEventHandler((event)=>{

    const { category } = event.context.params
    


    // return{
    //   works:'ok',
    //   cat:category,
    //   me:goods,
    // }

    return goods.filter((element)=>element.category==category)
})