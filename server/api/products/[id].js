

import { goods } from "../goods"

export default defineEventHandler(async(event)=>{

    const {id} = event.context.params
    
    // const idNumber = Number(id)

    // if(idNumber<=goods.length)
        return goods.filter ((element)=>element.id==id)

})