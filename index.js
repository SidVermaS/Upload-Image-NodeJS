import express from 'express'
import fileUpload from 'express-fileupload'
import uploadRouter from './routes/upload.js'
import {__dirname} from './paths.js'

const app=express()
app.use(fileUpload())
app.use('/api/upload', uploadRouter)
app.use('/images', express.static(__dirname+'/images/'))

const PORT=process.env.PORT || 5000

app.listen(PORT, ()=>   {
    console.log('Server is connected')
})