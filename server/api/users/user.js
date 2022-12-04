export default defineEventHandler(async(event)=>{

    const { age} = await useBody(event)
    return{
        me:'dj',
        years:age
    }
})