import 'express-async-errors'
import express, { NextFunction, Request, Response } from 'express';
import { router } from './router';
import swaggerUi from 'swagger-ui-express';
import swaggerDocs from './swagger.json';
import { InternalServerError } from './errors/InternalServerError';
import { Unauthorized } from './errors/Unauthorized';
import { BadRequest } from './errors/BadRequest';
import { Errors } from './errors/Errors';

const app = express()

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

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.listen(3000, () => console.log('Server is running on port 3000'))