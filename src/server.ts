import 'express-async-errors'
import cors from 'cors';
import express, { NextFunction, Request, Response } from 'express';
import { router } from './router';
import { Errors } from './errors/Errors';


const app = express()

app.use(cors())

app.use(express.json())

app.use(router)

app.use((error: Errors, request: Request, response: Response, next: NextFunction) => {
  
  if (error && error.statusCode) {
    return response.status(error.statusCode).json({
      data: null,
      erro: true,
      errors: null,
      message: error.message,
      messageEx: error.messageEx
    })
  }
})

app.use('/playerFiles', express.static('playerUploads'))

app.use('/teamFiles', express.static('teamUploads'))

app.listen(3000, () => console.log('Server is running on port 3000'))