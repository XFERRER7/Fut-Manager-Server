

export class NotFound extends Error {

  statusCode: number;
  messageEx: string;
  
  constructor(message: string) {
    super(message);
    this.name = "Not Found";
    this.statusCode = 404
    this.messageEx = 'Not found'
  }

}