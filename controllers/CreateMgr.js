const express=require('express')
const router=express.Router()
const MgrDetails=require('../models/MgrDetails')

 
router.post('/create',async(req,res)=>{
    let data = req.body
    const mgr = new MgrDetails({
        id:data.id,
        fname:data.fname,
        phone:data.phone,
        email:data.email
    })
    mgr.save().then((result)=>res.send('manager created')).then((err)=>res.send('manager is not created',err))


})

module.exports=router