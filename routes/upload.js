import express from 'express'
import {v4 as uuidv4} from 'uuid'
import path from 'path'
import {__dirname} from '../paths.js'

const router=express.Router()

router.post('/',async (req, res)=>  {
    try {
        const file=req.files.file
        const fileName=`${uuidv4()}.${file.mimetype.split('/')[1]}`
        const filePath=path.join(__dirname+`/images/${fileName}`)
        await file.mv(filePath)
        return res.status(201).json({message: 'Successfully uploaded',fileName})
    }   catch(err)  {
        return res.status(500).json({message: 'Failed to upload'})
    }
})

export default router