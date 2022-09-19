const express=require('express')
const router=express.Router()
const MgrDetails=require('../models/MgrDetails')


router.get('/delete/:fname',async (req,res)=>{
    const ip_fname=req.params.fname
    try{
       const result= await MgrDetails.findOneAndDelete({fname:ip_fname})
       console.log(result)
       res.send('deleted')
    }
    catch(e){
        res.send('some error occured')
    }
})


module.exports=router 