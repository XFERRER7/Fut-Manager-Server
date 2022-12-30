

export class Unauthorized extends Error {

  statusCode: number;
  messageEx: string;
  
  constructor(message: string) {
    super(message);
    this.name = "Unauthorized";
    this.statusCode = 401
    this.messageEx = "A valid token must be sent"
  }

}